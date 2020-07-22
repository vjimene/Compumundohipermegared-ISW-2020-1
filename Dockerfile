# pull official base image
FROM postgres:12.3-alpine

# run init.sql
ADD ./db/init.sql /docker-entrypoint-initdb.d
