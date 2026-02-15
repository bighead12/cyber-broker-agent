from fastapi import APIRouter, HTTPException, Depends
from typing import List
from bson import ObjectId
from app.database import get_database
from app.models import PropertyCreate, PropertyUpdate, PropertyResponse
from app.middleware import verify_api_key

router = APIRouter()


def serialize_property(property) -> dict:
    """Convert MongoDB document to JSON-serializable dict"""
    property["id"] = str(property.pop("_id"))
    return property


@router.get(
    "", response_model=List[PropertyResponse], dependencies=[Depends(verify_api_key)]
)
async def get_properties():
    db = get_database()
    properties = await db.properties.find().to_list(100)
    return [serialize_property(p) for p in properties]


@router.post(
    "", response_model=PropertyResponse, dependencies=[Depends(verify_api_key)]
)
async def create_property(property: PropertyCreate):
    db = get_database()
    property_dict = property.model_dump()
    result = await db.properties.insert_one(property_dict)
    property_dict["id"] = str(result.inserted_id)
    return property_dict


@router.get(
    "/{property_id}",
    response_model=PropertyResponse,
    dependencies=[Depends(verify_api_key)],
)
async def get_property(property_id: str):
    db = get_database()
    try:
        property = await db.properties.find_one({"_id": ObjectId(property_id)})
    except:
        raise HTTPException(status_code=400, detail="Invalid ID format")

    if not property:
        raise HTTPException(status_code=404, detail="Property not found")

    return serialize_property(property)


@router.put(
    "/{property_id}",
    response_model=PropertyResponse,
    dependencies=[Depends(verify_api_key)],
)
async def update_property(property_id: str, property: PropertyUpdate):
    db = get_database()
    try:
        existing = await db.properties.find_one({"_id": ObjectId(property_id)})
    except:
        raise HTTPException(status_code=400, detail="Invalid ID format")

    if not existing:
        raise HTTPException(status_code=404, detail="Property not found")

    update_data = {k: v for k, v in property.model_dump().items() if v is not None}
    await db.properties.update_one(
        {"_id": ObjectId(property_id)}, {"$set": update_data}
    )

    updated = await db.properties.find_one({"_id": ObjectId(property_id)})
    return serialize_property(updated)


@router.delete("/{property_id}", dependencies=[Depends(verify_api_key)])
async def delete_property(property_id: str):
    db = get_database()
    try:
        result = await db.properties.delete_one({"_id": ObjectId(property_id)})
    except:
        raise HTTPException(status_code=400, detail="Invalid ID format")

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Property not found")

    return {"message": "Property deleted successfully"}
