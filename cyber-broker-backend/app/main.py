from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import properties
from app.database import connect_to_mongo, close_mongo_connection

app = FastAPI(title="Cyber Broker API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176",
        "http://localhost:5177",
        "http://localhost:5178",
        "http://localhost:5179",
        "http://localhost:5180",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_event_handler("startup", connect_to_mongo)
app.add_event_handler("shutdown", close_mongo_connection)

app.include_router(properties.router, prefix="/api/properties", tags=["properties"])


@app.get("/")
async def root():
    return {"message": "Cyber Broker API is running"}


@app.get("/health")
async def health():
    return {"status": "healthy"}
