package com.manuelr.atm.locations.strategy;

import com.manuelr.atm.locations.command.*;
import com.manuelr.atm.locations.entity.AtmEntity;
import com.manuelr.atm.locations.util.PagedResult;
import io.smallrye.mutiny.Uni;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.util.concurrent.ConcurrentHashMap;

import java.util.Map;
import java.util.NoSuchElementException;

/**
 * A registry for managing and executing different ATM search strategies. This class is a singleton
 * that registers different strategies for searching ATMs based on various request types. It ensures
 * thread-safety by using a ConcurrentHashMap to store the strategies.
 */
@Singleton
public class AtmSearchStrategyRegistry {

  // Thread-safe registry of search strategies, mapping request types to their corresponding
  // strategies.
  private final Map<Class<? extends AtmBaseSearchCommand>, AtmSearchStrategy> registry =
      new ConcurrentHashMap<>();

  // The service that provides various search strategy instances.
  private final AtmSearchStrategies atmSearchStrategies;

  /**
   * Constructor to inject AtmSearchStrategies and initialize the strategy registry.
   *
   * @param atmSearchStrategies The service that provides the strategy instances.
   */
  @Inject
  public AtmSearchStrategyRegistry(AtmSearchStrategies atmSearchStrategies) {
    this.atmSearchStrategies = atmSearchStrategies;
    registerAllStrategies(); // Register all available strategies upon initialization.
  }

  /**
   * Registers a single strategy for a given request type in the registry.
   *
   * @param requestType The class type of the search request.
   * @param strategy The ATM search strategy to associate with the request type.
   */
  private void registerStrategy(
      Class<? extends AtmBaseSearchCommand> requestType, AtmSearchStrategy strategy) {
    registry.put(requestType, strategy);
  }

  /**
   * Registers all available search strategies by calling the appropriate methods on the
   * AtmSearchStrategies service.
   */
  private void registerAllStrategies() {

    // Register each ATM search strategy with its corresponding request type

    registerStrategy(
        AtmSearchByLocationQuadrantCommand.class,
        atmSearchStrategies.createLocationQuadrantSearchStrategy());

    registerStrategy(
        AtmSearchByLocationCommand.class, atmSearchStrategies.createLocationSearchStrategy());

    registerStrategy(
        AtmSearchByPostalCodeAndStateCommand.class,
        atmSearchStrategies.createPostalCodeAndStateSearchStrategy());

    registerStrategy(
        AtmSearchByPostalCodeCommand.class, atmSearchStrategies.createPostalCodeSearchStrategy());

    registerStrategy(
        AtmSearchByStateCommand.class, atmSearchStrategies.createStateSearchStrategy());

    registerStrategy(
        AtmSearchByAddressCommand.class, atmSearchStrategies.createAddressSearchStrategy());

    registerStrategy(AtmSearchAllCommand.class, atmSearchStrategies.createAllSearchStrategy());
  }

  /**
   * Searches for ATMs based on the provided request using the appropriate strategy.
   *
   * @param searchCommand The search request that defines the search criteria.
   * @return A Uni containing the result of the search (either a list of ATMs or an error). If no
   *     strategy is found for the given request type, a failure is returned.
   */
  public Uni<PagedResult<AtmEntity>> search(AtmBaseSearchCommand searchCommand) {
    // Retrieve the strategy based on the request type
    final var strategy = registry.get(searchCommand.getClass());

    // If no strategy is found for the request type, return a failure
    if (strategy == null) {
      return Uni.createFrom()
          .failure(
              new NoSuchElementException(
                  String.format(
                      "No strategy registered for %s", searchCommand.getClass().getName())));
    }

    // Execute the search and handle any errors that occur
    return strategy.search(searchCommand);
  }
}
