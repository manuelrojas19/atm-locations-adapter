package com.manuelr.atm.locations;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
class AtmResourceTest {

  @Test
  void testAtmEndpoint() {
    given().when().get("/api/v3/atm").then().statusCode(200);
  }
}
