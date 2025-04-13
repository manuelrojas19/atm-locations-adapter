package com.manuelr.atm.locations.strategy;

import com.manuelr.atm.locations.command.*;
import com.manuelr.atm.locations.entity.AtmEntity;
import com.manuelr.atm.locations.repository.AtmRepository;
import com.manuelr.atm.locations.util.Pageable;
import com.manuelr.atm.locations.util.PagedResult;
import io.smallrye.mutiny.Uni;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.util.function.BiFunction;

/**
 * Singleton service responsible for providing different search strategies for querying ATMs based
 * on various request types. Each method creates a strategy specific to a search type (location,
 * postal code, state, etc.).
 */
@Singleton
public class AtmSearchStrategies {

  private static final String ILLEGAL_STRATEGY_TYPE_MSG =
      "Invalid request type for search: Expected a specific subclass of SearchRequest, but received: %s. Please verify the type of the request.";

  private static final double LOCATION_MARGIN = 0.05;

  // Repository for querying ATM data, injected through the constructor
  private final AtmRepository atmRepository;

  /**
   * Constructor to initialize the AtmSearchStrategies with an injected AtmRepository.
   *
   * @param atmRepository The repository used to query ATM data.
   */
  @Inject
  public AtmSearchStrategies(AtmRepository atmRepository) {
    this.atmRepository = atmRepository;
  }

  /**
   * Creates a search strategy for a given request type and corresponding search function. Ensures
   * the request is of the expected type before applying the search logic.
   *
   * @param requestType The expected class type of the incoming search request
   * @param searchFunction A function that applies the search logic and returns a result
   * @param <T> The type of the request
   * @return A strategy that checks the request type and applies the search function
   */
  private <T> AtmSearchStrategy createStrategy(
      Class<T> requestType, BiFunction<T, Pageable, Uni<PagedResult<AtmEntity>>> searchFunction) {
    return (request) -> {
      // Validate if the request is of the expected type
      if (!requestType.isInstance(request)) {
        // Throw an exception if the request type does not match
        throw new IllegalArgumentException(
            String.format(ILLEGAL_STRATEGY_TYPE_MSG, request.getClass().getName()));
      }
      T typedRequest = requestType.cast(request);
      return searchFunction.apply(typedRequest, request.getPageable());
    };
  }

  /**
   * Creates a search strategy to find ATMs by location (latitude and longitude within range).
   *
   * @return The ATM search strategy based on location.
   */
  public AtmSearchStrategy createLocationSearchStrategy() {
    return createStrategy(
        AtmSearchByLocationCommand.class,
        (request, pageable) ->
            atmRepository.findAtmsByLocationWithinRangeWithoutPagination(
                request.getLatitude() - LOCATION_MARGIN,
                request.getLatitude() + LOCATION_MARGIN,
                request.getLongitude() - LOCATION_MARGIN,
                request.getLongitude() + LOCATION_MARGIN));
  }

  /**
   * Creates a search strategy to find ATMs by postal code, with pagination.
   *
   * @return The ATM search strategy based on postal code.
   */
  public AtmSearchStrategy createPostalCodeSearchStrategy() {
    return createStrategy(
        AtmSearchByPostalCodeCommand.class,
        (request, pageable) ->
            atmRepository.findAtmsByPostalCodeWithPagination(request.getPostalCode(), pageable));
  }

  /**
   * Creates a search strategy to find ATMs by state, with pagination.
   *
   * @return The ATM search strategy based on state.
   */
  public AtmSearchStrategy createStateSearchStrategy() {
    return createStrategy(
        AtmSearchByStateCommand.class,
        (request, pageable) ->
            atmRepository.findAtmsByStateIgnoreCaseWithPagination(request.getState(), pageable));
  }

  /**
   * Creates a search strategy to find ATMs by partial address, with pagination.
   *
   * @return The ATM search strategy based on address.
   */
  public AtmSearchStrategy createAddressSearchStrategy() {
    return createStrategy(
        AtmSearchByAddressCommand.class,
        (request, pageable) ->
            atmRepository.findAtmsByAddressContainingWithPagination(
                request.getAddress(), pageable));
  }

  /**
   * Creates a search strategy to find ATMs within a defined geographical quadrant (bounding box).
   *
   * @return The ATM search strategy based on location quadrant.
   */
  public AtmSearchStrategy createLocationQuadrantSearchStrategy() {
    return createStrategy(
        AtmSearchByLocationQuadrantCommand.class,
        (request, pageable) ->
            atmRepository.findAtmsByLocationWithinRangeWithoutPagination(
                request.getStartLatitude(),
                request.getEndLatitude(),
                request.getStartLongitude(),
                request.getEndLongitude()));
  }

  /**
   * Creates a search strategy to find ATMs by a combination of postal code and state, with
   * pagination.
   *
   * @return The ATM search strategy based on postal code and state.
   */
  public AtmSearchStrategy createPostalCodeAndStateSearchStrategy() {
    return createStrategy(
        AtmSearchByPostalCodeAndStateCommand.class,
        (request, pageable) ->
            atmRepository.findAtmsByPostalCodeAndStateIgnoreCaseWithPagination(
                request.getPostalCode(), request.getState(), pageable));
  }

  /**
   * Creates a search strategy to find ATMs with pagination for all types of requests.
   *
   * @return The ATM search strategy for all types.
   */
  public AtmSearchStrategy createAllSearchStrategy() {
    return createStrategy(
        AtmSearchAllCommand.class,
        (request, pageable) -> atmRepository.findAtmsWithPagination(request.getPageable()));
  }
}
