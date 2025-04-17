package com.manuelr.atm.locations.config;

import io.quarkus.test.common.QuarkusTestResourceLifecycleManager;
import lombok.extern.slf4j.Slf4j;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.utility.MountableFile;

import java.time.Duration;
import java.time.Instant;
import java.util.Map;

import java.util.HashMap;

@Slf4j
public class TestContainersConfig implements QuarkusTestResourceLifecycleManager {

  private static final Instant start = Instant.now();

  public static final MongoDBContainer mongoDBContainer =
      new MongoDBContainer("mongo:latest")
          .withCopyFileToContainer(
              MountableFile.forClasspathResource("mongo-init.js"),
              "/docker-entrypoint-initdb.d/mongo-init.js");

  @Override
  public Map<String, String> start() {
    try {
      mongoDBContainer.start();

      log.info("🐳 MongoDB TestContainer started in {}", Duration.between(start, Instant.now()));

      Map<String, String> config = new HashMap<>();
      log.info("Connection string {}", mongoDBContainer.getConnectionString());
      config.put("quarkus.mongodb.connection-string", mongoDBContainer.getConnectionString());

      return config;
    } catch (Exception e) {
      throw new RuntimeException("❌ Failed to start MongoDB container", e);
    }
  }

  @Override
  public void stop() {
    mongoDBContainer.stop();
    log.info("🐳 MongoDB TestContainer stopped after {}", Duration.between(start, Instant.now()));
  }
}
