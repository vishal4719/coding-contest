FROM openjdk:17-jdk
WORKDIR /app
COPY target/coding-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=worker"] 