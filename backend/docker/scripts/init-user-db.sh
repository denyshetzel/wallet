#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER wallet;
    CREATE DATABASE wallet;
    GRANT ALL PRIVILEGES ON DATABASE wallet TO wallet;
EOSQL