docker build --no-cache -f SQL\Dockerfile.PostgreSql -t celiii/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t celiii/app ../..
