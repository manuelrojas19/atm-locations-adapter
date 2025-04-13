# 🏧 atm-adapter

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: <https://quarkus.io/>.

---

## 🧠 Project Description

The **ATM Adapter** provides an API for a flexible set of **search strategies** for querying Automated Teller Machines (
ATMs) using various criteria such as:

- 🌍 **Geographic location** (latitude and longitude within a configurable margin)
- 🏙️ **Postal code**
- 🧭 **State or province**
- 🏡 **Partial address**
- 📦 **Geographical quadrant** (bounding box)
- 📬 **Combination of postal code and state**
- 📚 **Paginated general search**

These strategies are executed by querying a **MongoDB database**, enabling high-performance and flexible filtering of
ATM data.

The adapter leverages **Mutiny**, a reactive programming library, to support non-blocking, asynchronous search
operations — ensuring scalability and responsiveness under load.

It is built with **Quarkus**, the Supersonic Subatomic Java framework, and is intended to be compiled into a **native
executable** to optimize startup time and memory usage. This makes it especially well-suited for **Dockerized
deployments** in cloud-native environments.

---

## ✅ Prerequisites

Make sure you have the following tools installed:

- 🐳 [Docker](https://docs.docker.com/get-docker/)
- 📦 [Docker Compose](https://docs.docker.com/compose/install/)
- ☕ [Java 17+](https://adoptium.net/) (or GraalVM if building native images)
- 🔨[Maven](https://maven.apache.org/) (or use `./mvnw` wrapper)

## 🐳 Setting Up downstream dependencies

Before starting the application, ensure that all required dependencies are running. This can be done using Docker
Compose. Follow these steps:

```shell script
cd docker-compose/
docker-compose -f docker-local-dependencies-compose.yaml up -d
```

This will bring up the necessary services like MongoDB, RabbitMQ, or any other dependencies defined in
docker-local-dependencies-compose.yml.

To verify that the containers are running correctly, you can check the status of the containers with:

```shell script
docker-compose ps
```

---

## 🛠️ Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```shell script
./mvnw quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at <http://localhost:8080/q/dev/>.

---

## 🐳 Build Native Image and run locally in Docker Compose with Startup Script Script

This project includes a helper script called `local_startup.sh` that does the following for quick package and local run on
Docker:

1. 🧪 Builds a native image
2. 🛳️ Creates a Docker image
3. 🚀 Launches containers using Docker Compose.

Depending on the image flavor you want to build (micro or distroless), use one of the following commands:

```shell script
# Build and run using distroless image (default)
./local_startup.sh image=distroless

# Build and run using micro image
./local_startup.sh image=micro
```

If you want to learn more about building native executables, please consult <https://quarkus.io/guides/maven-tooling>.

---

### 📊 Optional: Start Local Collector and Observability Stack with Docker Compose

This project includes an additional Docker Compose file to start a local observability stack for monitoring and tracing,
which is useful during local development or performance testing.

The stack includes the following services:

- **OpenTelemetry Collector:** to receive, process, and export telemetry data.
- **Prometheus:** for metrics scraping and querying.
- **Jaeger:** for distributed tracing visualization.
- **Grafana:** for dashboard-based metrics visualization.

You can launch the observability services with the following command:

```shell script
cd docker-compose/
docker-compose -f docker-compose/docker-local-collector-compose.yaml up -d
```

#### Access URLs

- **Grafana**: http://localhost:3000 (user: admin, pass: admin)
- **Prometheus**: http://localhost:9090
- **Jaeger UI**: http://localhost:16686
---

## 📚 Related Guides

- Mutiny ([guide](https://quarkus.io/guides/mutiny-primer)): Write reactive applications with the modern Reactive
  Programming library Mutiny
- REST ([guide](https://quarkus.io/guides/rest)): A Jakarta REST implementation utilizing build time processing and
  Vert.x. This extension is not compatible with the quarkus-resteasy extension, or any of the extensions that depend on
  it.
- MongoDB client ([guide](https://quarkus.io/guides/mongodb)): Connect to MongoDB in either imperative or reactive style

---

## 💻 Provided Code

### REST

Easily start your REST Web Services

[Related guide section...](https://quarkus.io/guides/getting-started-reactive#reactive-jax-rs-resources)
