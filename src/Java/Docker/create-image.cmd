docker build --no-cache -f SQL\Dockerfile.PostgreSql -t celiii-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t celiii-java/app ../../..
