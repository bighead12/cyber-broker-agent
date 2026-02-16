from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
from app.routers import properties
from app.database import connect_to_mongo, close_mongo_connection

app = FastAPI(
    title="Cyber Broker API",
    description="API for managing real estate properties with MongoDB backend and API key authentication",
    version="1.0.0",
    terms_of_service="http://example.com/terms/",
    contact={
        "name": "API Support",
        "url": "http://example.com/support",
        "email": "support@example.com",
    },
    license_info={
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT",
    },
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title="Cyber Broker API",
        version="1.0.0",
        description="API for managing real estate properties with MongoDB backend and API key authentication",
        routes=app.routes,
    )

    openapi_schema["info"]["contact"] = {
        "name": "API Support",
        "url": "http://example.com/support",
        "email": "support@example.com",
    }

    openapi_schema["info"]["license"] = {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT",
    }

    openapi_schema["servers"] = [
        {
            "url": "http://localhost:8000",
            "description": "Local development server",
        },
        {
            "url": "https://cyber-broker-backend.koyeb.app",
            "description": "Production server (Koyeb)",
        },
    ]

    openapi_schema["components"]["securitySchemes"] = {
        "ApiKeyAuth": {
            "type": "apiKey",
            "in": "header",
            "name": "X-API-Key",
            "description": "API key for authentication. Add this to request headers.",
        }
    }

    openapi_schema["security"] = [{"ApiKeyAuth": []}]

    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi

app.add_event_handler("startup", connect_to_mongo)
app.add_event_handler("shutdown", close_mongo_connection)

app.include_router(properties.router, prefix="/api/properties", tags=["properties"])


@app.get("/")
async def root():
    return {"message": "Cyber Broker API is running"}


@app.get("/health")
async def health():
    return {"status": "healthy"}
