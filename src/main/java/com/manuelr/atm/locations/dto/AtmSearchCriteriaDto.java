package com.manuelr.atm.locations.dto;

import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.QueryParam;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AtmSearchCriteriaDto {

  @QueryParam("latitude")
  public Double latitude;

  @QueryParam("longitude")
  public Double longitude;

  @QueryParam("startLatitude")
  public Double startLatitude;

  @QueryParam("startLongitude")
  public Double startLongitude;

  @QueryParam("endLatitude")
  public Double endLatitude;

  @QueryParam("endLongitude")
  public Double endLongitude;

  @QueryParam("postalCode")
  public String postalCode;

  @QueryParam("state")
  public String state;

  @QueryParam("address")
  public String address;

  @QueryParam("types")
  public List<String> types;

  @QueryParam("page")
  @DefaultValue("0")
  public int page;

  @QueryParam("size")
  @DefaultValue("10")
  public int size;
}
