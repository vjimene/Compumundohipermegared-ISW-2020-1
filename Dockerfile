# pull official base image
# FROM postgres:12.3-alpine

# run init.sql
# ADD ./db/init.sql /docker-entrypoint-initdb.d



FROM openjdk:8-jdk-alpine
# MAINTAINER compumundohipermegared-sa
VOLUME /tmp
EXPOSE 5000
ADD chopinhauer/target/chopinhauer-0.0.1-SNAPSHOT.jar chopinhauer.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/chopinhauer.jar"]