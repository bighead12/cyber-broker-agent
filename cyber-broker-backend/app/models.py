from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PropertyBase(BaseModel):
    title: str
    location: str
    price: str
    beds: int
    baths: float
    sqft: str
    status: str = "New"
    image: Optional[str] = None
    listedDate: str = "Just now"

class PropertyCreate(PropertyBase):
    pass

class PropertyUpdate(BaseModel):
    title: Optional[str] = None
    location: Optional[str] = None
    price: Optional[str] = None
    beds: Optional[int] = None
    baths: Optional[float] = None
    sqft: Optional[str] = None
    status: Optional[str] = None
    image: Optional[str] = None
    listedDate: Optional[str] = None

class PropertyResponse(PropertyBase):
    id: str
    
    class Config:
        from_attributes = True
