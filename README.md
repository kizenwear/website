# Kizenwear Website

This is the unified codebase for the Kizenwear website, serving both the Angular frontend and the Spring Boot API backend in a single streamlined container.

## 🚀 Running the Application

To build and run the application using Docker, simply run:

```bash
docker compose up --build
```

*(You can add `-d` at the end to run it in the background).*

## 🔗 Useful Local URLs

Once the container is running, you can access the various parts of the application here:

| Component | URL | Description |
| :--- | :--- | :--- |
| **Website (Frontend)** | [http://localhost:8080/](http://localhost:8080/) | The main Kizenwear Angular application. |
| **Swagger UI (API Docs)** | [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html) | Interactive API documentation for the backend. |
| **OpenAPI Spec (JSON)** | [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs) | Raw JSON specification of the API. |
| **Health Check** | [http://localhost:8080/actuator/health](http://localhost:8080/actuator/health) | API endpoint to verify the backend is running properly. |

## 🏗️ Architecture

This project uses a **Single Image Architecture**:
1. **Frontend Builder Stage:** Compiles the Angular source code (`/frontend`) into static files.
2. **Backend Builder Stage:** Copies the built static files into the Spring Boot resource folder (`src/main/resources/static/`) and compiles the `.jar` file.
3. **Runtime Stage:** Runs the `.jar` file in a lightweight Java environment. Spring Boot automatically serves both the API endpoints and the static frontend website on port `8080`.
