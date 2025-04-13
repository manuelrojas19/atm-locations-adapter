package com.manuelr.atm.locations.strategy;

import com.manuelr.atm.locations.command.AtmBaseSearchCommand;
import com.manuelr.atm.locations.entity.AtmEntity;
import com.manuelr.atm.locations.util.PagedResult;
import io.smallrye.mutiny.Uni;

/**
 * A functional interface that defines the strategy for searching ATMs. Implementations of this
 * interface are responsible for handling different search criteria and returning a list of ATMs
 * based on the provided request.
 *
 * <p>The interface defines a single method, {@link #search}, which will be implemented to execute
 * the actual ATM search logic based on various request types.
 */
@FunctionalInterface
public interface AtmSearchStrategy {

  /**
   * Searches for ATMs based on the provided search request.
   *
   * @param request The search request that defines the search criteria.
   * @return A {@link Uni} containing a list of {@link AtmEntity} representing the ATMs that match
   *     the search criteria. If no ATMs are found, the result will be an empty list.
   */
  Uni<PagedResult<AtmEntity>> search(AtmBaseSearchCommand request);
}
