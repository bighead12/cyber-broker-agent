from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    MONGODB_URL: str = ""
    DATABASE_NAME: str = "cyber_broker"
    DATABASE_COLLECTION: str = "properties"

    class Config:
        env_file = ".env"


settings = Settings()
