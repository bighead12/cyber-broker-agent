from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    MONGODB_URL: str = ""
    API_KEY: str = ""
    DATABASE_NAME: str = "cyber_broker"
    DATABASE_COLLECTION: str = "properties"
    USE_MONGOMOCK: bool = False

    class Config:
        env_file = ".env"


settings = Settings()
