FROM maven:3.6.3-jdk-8-slim AS build

WORKDIR /demo

COPY pom.xml .

RUN mvn dependency:go-offline

COPY src src

RUN mvn clean package

FROM openjdk:8-jdk-alpine

WORKDIR /app

COPY --from=build /demo/target/*.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]
