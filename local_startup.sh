#!/bin/bash

# 🧱 Set default Docker image name, Dockerfile path and Maven profile
DOCKERFILE_PATH="src/main/docker/Dockerfile.native-distroless"
DOCKER_IMAGE_NAME="quarkus/atm-adapter-native-distroless"
DOCKER_COMPOSE_FILE="docker-compose/docker-distroless-compose.yaml"
QUARKUS_PROFILE="local-distroless"

# 🔍 Parse command-line arguments for image selection
for arg in "$@"; do
  case $arg in
    image=micro)
      DOCKERFILE_PATH="src/main/docker/Dockerfile.native-micro"
      DOCKER_IMAGE_NAME="quarkus/atm-adapter-native-micro"
      DOCKER_COMPOSE_FILE="docker-compose/docker-micro-compose.yaml"
      QUARKUS_PROFILE="local-micro"
      ;;
    image=distroless)
      DOCKERFILE_PATH="src/main/docker/Dockerfile.native-distroless"
      DOCKER_IMAGE_NAME="quarkus/atm-adapter-native-distroless"
      DOCKER_COMPOSE_FILE="docker-compose/docker-distroless-compose.yaml"
      QUARKUS_PROFILE="local-distroless"
      ;;
    *)
      echo "❌ Usage: $0 image=micro or image=distroless"
      exit 1
      ;;
  esac
done

# 🧹 Clean up any previous builds
echo "🧹 Cleaning up previous builds..."
./mvnw clean

# 🔧 Build the native image with Maven
echo "🛠️  Building the native image using Maven profile: $QUARKUS_PROFILE..."
./mvnw package -Dnative -Dquarkus.native.container-build=true -Dquarkus.native.native-image-xmx=6g -Dquarkus.profile=$QUARKUS_PROFILE

# ✅ Check if the build was successful
if [ $? -ne 0 ]; then
  echo "❌ Native image build failed!"
  exit 1
fi

# 🐳 Build the Docker image using the selected Dockerfile
echo "🐳 Building the Docker image using $DOCKERFILE_PATH..."
docker build -f $DOCKERFILE_PATH -t $DOCKER_IMAGE_NAME .

# ✅ Check if Docker build was successful
if [ $? -ne 0 ]; then
  echo "❌ Docker build failed!"
  exit 1
fi

# 🚀 Start the containers using the selected Docker Compose file
echo "🚀 Starting containers using Docker Compose from $DOCKER_COMPOSE_FILE..."
docker-compose -f $DOCKER_COMPOSE_FILE up -d

# ✅ Check if Docker Compose was successful
if [ $? -ne 0 ]; then
  echo "❌ Docker Compose failed!"
  exit 1
fi

echo "🎉 Native image and Docker image built successfully. Services are now running! 🟢"


