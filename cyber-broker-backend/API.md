# Cyber Broker API Documentation

## Overview
API for managing real estate properties with MongoDB backend and API key authentication.

## Base URL
```
http://localhost:8000
```

## Authentication
All endpoints require an API key in the request header:
```
X-API-Key: cyber-broker-secret-key-2024
```

## Endpoints

### 1. Get All Properties
```http
GET /api/properties
```

**Response:**
```json
[
  {
    "id": "...",
    "title": "Neon Penthouse Suite",
    "location": "Downtown Cyber City",
    "price": "$4,250,000",
    "beds": 3,
    "baths": 3.5,
    "sqft": "2,800",
    "status": "Exclusive",
    "image": "https://...",
    "listedDate": "2 days ago"
  }
]
```

---

### 2. Get Property by ID
```http
GET /api/properties/{property_id}
```

**Parameters:**
- `property_id` (string) - MongoDB ObjectId

**Response:**
```json
{
  "id": "...",
  "title": "Neon Penthouse Suite",
  "location": "Downtown Cyber City",
  "price": "$4,250,000",
  "beds": 3,
  "baths": 3.5,
  "sqft": "2,800",
  "status": "Exclusive",
  "image": "https://...",
  "listedDate": "2 days ago"
}
```

---

### 3. Create Property
```http
POST /api/properties
```

**Headers:**
```
Content-Type: application/json
X-API-Key: cyber-broker-secret-key-2024
```

**Body:**
```json
{
  "title": "Property Title",
  "location": "Property Location",
  "price": "$500,000",
  "beds": 3,
  "baths": 2,
  "sqft": "1500",
  "status": "New",
  "image": "https://...",
  "listedDate": "Just now"
}
```

**Response:** Returns created property with ID

---

### 4. Update Property
```http
PUT /api/properties/{property_id}
```

**Body (partial update):**
```json
{
  "price": "$600,000",
  "status": "Pending"
}
```

---

### 5. Delete Property
```http
DELETE /api/properties/{property_id}
```

**Response:**
```json
{
  "message": "Property deleted successfully"
}
```

---

## Interactive Documentation

FastAPI provides built-in interactive documentation:

| URL | Description |
|-----|-------------|
| `/docs` | Swagger UI (recommended) |
| `/redoc` | ReDoc alternative |

---

## Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid ID format |
| 403 | Invalid or missing API key |
| 404 | Property not found |

---

## Example curl Commands

```bash
# Get all properties
curl -H "X-API-Key: cyber-broker-secret-key-2024" \
     http://localhost:8000/api/properties

# Create property
curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-API-Key: cyber-broker-secret-key-2024" \
     -d '{"title":"Test","location":"Loc","price":"$100","beds":1,"baths":1,"sqft":"500","status":"New","listedDate":"Today"}' \
     http://localhost:8000/api/properties

# Delete property
curl -X DELETE \
     -H "X-API-Key: cyber-broker-secret-key-2024" \
     http://localhost:8000/api/properties/{id}
```
