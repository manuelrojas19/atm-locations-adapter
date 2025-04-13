package com.manuelr.atm.locations.resource;

import com.manuelr.atm.locations.dto.AtmSearchCriteriaDto;
import com.manuelr.atm.locations.service.AtmService;
import io.smallrye.mutiny.Uni;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/api/v3/atm")
public class AtmResource {

  private final AtmService atmService;

  @Inject
  public AtmResource(AtmService atmService) {
    this.atmService = atmService;
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Uni<Response> findAtms(@BeanParam AtmSearchCriteriaDto criteria) {
    return atmService.findAtmData(criteria);
  }
}
