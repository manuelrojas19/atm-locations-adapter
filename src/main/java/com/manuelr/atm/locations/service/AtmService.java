package com.manuelr.atm.locations.service;

import com.manuelr.atm.locations.dto.AtmSearchCriteriaDto;
import com.manuelr.atm.locations.util.AtmSearchMapper;
import com.manuelr.atm.locations.strategy.AtmSearchStrategyRegistry;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.core.Response;

import io.quarkus.logging.Log;

@ApplicationScoped
public class AtmService {

  private final AtmSearchStrategyRegistry atmSearchStrategyRegistry;

  @Inject
  public AtmService(AtmSearchStrategyRegistry atmSearchStrategyRegistry) {
    this.atmSearchStrategyRegistry = atmSearchStrategyRegistry;
  }

  /**
   * Finds ATM data based on the search criteria.
   *
   * @param criteria The search criteria for finding ATMs.
   * @return A Uni containing a Response, either with the ATM data or an error message.
   */
  public Uni<Response> findAtmData(AtmSearchCriteriaDto criteria) {

    Log.infof("Received request to search ATMs with criteria: %s", criteria);

    // Map the criteria to the search command
    final var atmSearchCommand = AtmSearchMapper.map(criteria);

    Log.infof("Mapped search criteria to command: %s", atmSearchCommand);

    // Perform the ATM search using the strategy registry
    return atmSearchStrategyRegistry
        .search(atmSearchCommand)
        .onItem()
        .transform(
            atmInfo -> {
              Log.infof("Successfully retrieved %d ATMs", atmInfo.content().size());
              return Response.ok(atmInfo).build();
            })
        .onFailure()
        .recoverWithItem(
            t -> {
              String message = "Unexpected error occurred while searching ATMs.";
              Log.errorf(t, message);
              return Response.serverError().entity(message).build();
            });
  }
}
