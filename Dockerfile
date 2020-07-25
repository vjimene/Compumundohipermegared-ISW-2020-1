# pull official base image
# FROM postgres:12.3-alpine

# run init.sql
# ADD ./db/init.sql /docker-entrypoint-initdb.d



FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package


FROM openjdk:8-jdk-alpine
# MAINTAINER compumundohipermegared-sa
VOLUME /tmp
EXPOSE 5000
COPY --from=build chopinhauer/target/chopinhauer-0.0.1-SNAPSHOT.jar chopinhauer.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/chopinhauer.jar"]



#FROM openjdk:11-jre-slim
#COPY --from=build /home/app/target/demo-0.0.1-SNAPSHOT.jar /usr/local/lib/demo.jar
#EXPOSE 8080
#ENTRYPOINT ["java","-jar","/usr/local/lib/demo.jar"]