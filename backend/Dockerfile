# Use the official OpenJDK 11 image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/project-voteEase-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Start the Spring Boot application
CMD ["java", "-jar", "app.jar"]
