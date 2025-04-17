package com.manuelr.atm.locations;

import com.manuelr.atm.locations.config.TestContainersConfig;
import io.quarkus.test.common.QuarkusTestResource;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
@QuarkusTestResource(TestContainersConfig.class)
class AtmResourceTest {

  @Test
  void testAtmEndpoint() {
    given().when().get("/api/v3/atm").then().statusCode(200);
  }
}
