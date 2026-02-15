import pytest
import mongomock
from unittest.mock import patch
from httpx import AsyncClient, ASGITransport
from app.main import app

API_KEY = "cyber-broker-secret-key-2024"


@pytest.fixture
def mock_mongo_db():
    """Create a mongomock MongoDB client for testing."""
    client = mongomock.MongoClient()
    db = client["cyber_broker"]
    return db


@pytest.fixture
def auth_headers():
    return {"X-API-Key": API_KEY}


@pytest.fixture
async def client(mock_mongo_db):
    """Create test client with mocked MongoDB."""

    # Create a non-async function that returns the mock db
    def mock_get_database():
        return mock_mongo_db

    # Patch at the location where it's used
    with patch("app.routers.properties.get_database", mock_get_database):
        transport = ASGITransport(app=app)
        async with AsyncClient(transport=transport, base_url="http://test") as ac:
            yield ac


@pytest.fixture(autouse=True)
def cleanup_mock_db(mock_mongo_db):
    """Clean up mock database after each test."""
    yield
    mock_mongo_db.properties.delete_many({})
