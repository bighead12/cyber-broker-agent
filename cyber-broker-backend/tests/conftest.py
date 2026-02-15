import pytest
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
