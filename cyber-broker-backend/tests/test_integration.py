import pytest


@pytest.mark.asyncio
async def test_get_nonexistent_property(client, auth_headers):
    """Test getting a property that doesn't exist."""
    response = await client.get("/api/properties/nonexistent_id", headers=auth_headers)
    assert response.status_code == 400


@pytest.mark.asyncio
async def test_update_nonexistent_property(client, auth_headers):
    """Test updating a property that doesn't exist."""
    response = await client.put(
        "/api/properties/nonexistent_id",
        json={"price": "$999,999"},
        headers=auth_headers,
    )
    assert response.status_code == 400


@pytest.mark.asyncio
async def test_delete_nonexistent_property(client, auth_headers):
    """Test deleting a property that doesn't exist."""
    response = await client.delete(
        "/api/properties/nonexistent_id", headers=auth_headers
    )
    assert response.status_code == 400
