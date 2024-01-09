# # Use the official OpenJDK 11 image
# FROM openjdk:17-jdk-slim

# # Set the working directory
# WORKDIR /app

# # Copy the JAR file into the container
# COPY target/project-voteEase-backend-0.0.1-SNAPSHOT.jar app.jar

# # Expose the port the app runs on
# EXPOSE 8080

# # Start the Spring Boot application
# CMD ["java", "-jar", "app.jar"]


# Stage 1: Build the application
FROM maven:3.8.4-openjdk-17 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package

# Stage 2: Copy only the JAR file to a lightweight image
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy JAR from the 'builder' stage
COPY --from=builder /app/target/project-voteEase-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
