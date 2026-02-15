import pytest
from unittest.mock import AsyncMock, patch
from httpx import AsyncClient, ASGITransport
from app.main import app

API_KEY = "cyber-broker-secret-key-2024"


@pytest.fixture
def auth_headers():
    return {"X-API-Key": API_KEY}


@pytest.fixture
async def client():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac


@pytest.fixture
def mock_db():
    mock = AsyncMock()
    mock.properties = AsyncMock()
    mock.properties.find.return_value.to_list = AsyncMock(return_value=[])
    mock.properties.insert_one = AsyncMock(
        return_value=AsyncMock(inserted_id="test-id")
    )
    mock.properties.find_one = AsyncMock(return_value=None)
    return mock


@pytest.mark.asyncio
async def test_health_check(client):
    response = await client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


@pytest.mark.asyncio
async def test_root(client):
    response = await client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()


@pytest.mark.asyncio
async def test_get_properties_without_auth(client):
    response = await client.get("/api/properties")
    assert response.status_code in [401, 403]


@pytest.mark.asyncio
async def test_create_property_without_auth(client):
    new_property = {
        "title": "Test Property",
        "location": "Test Location",
        "price": "$100,000",
        "beds": 2,
        "baths": 1,
        "sqft": "1000",
    }
    response = await client.post("/api/properties", json=new_property)
    assert response.status_code in [401, 403]


@pytest.mark.asyncio
async def test_invalid_api_key(client):
    response = await client.get("/api/properties", headers={"X-API-Key": "invalid-key"})
    assert response.status_code in [401, 403]
