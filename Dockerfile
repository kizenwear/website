# --- Stage 1: Build Frontend ---
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

# Copy package files and install dependencies
COPY frontend/package*.json ./
# Use --legacy-peer-deps or similar if needed, but we try npm ci first
RUN npm ci

# Copy the rest of the frontend source
COPY frontend/ ./

# Build the Angular app
RUN npm run build -- --configuration production

# --- Stage 2: Build Backend ---
FROM eclipse-temurin:21-jdk-jammy AS backend-builder
WORKDIR /app/backend

# Copy gradle files
COPY backend/gradlew .
COPY backend/gradle gradle
COPY backend/build.gradle backend/settings.gradle ./

# Make gradlew executable and try to download dependencies
RUN chmod +x gradlew
RUN ./gradlew dependencies --no-daemon || true

# Copy backend source
COPY backend/src src

# Copy frontend static files to backend resources
# This embeds the Angular app into the Spring Boot jar
COPY --from=frontend-builder /app/frontend/dist/kizenwear-app/browser src/main/resources/static/

# Build the Spring Boot application
RUN ./gradlew build -x test --no-daemon

# --- Stage 3: Runtime ---
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Create a non-root user and group
RUN groupadd -r appgroup && useradd -r -g appgroup appuser
USER appuser

# Copy the built jar file
COPY --from=backend-builder /app/backend/build/libs/*-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
