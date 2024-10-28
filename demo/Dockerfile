FROM openjdk:22-jdk AS build
RUN apt-get update && \
    apt-get install -y maven && \
    apt-get clean
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:22-jdk-slim
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]