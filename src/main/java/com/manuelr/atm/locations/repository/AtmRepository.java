package com.manuelr.atm.locations.repository;

import com.manuelr.atm.locations.entity.AtmEntity;
import com.manuelr.atm.locations.util.Pageable;
import com.manuelr.atm.locations.util.PagedResult;
import com.mongodb.client.model.Collation;
import com.mongodb.client.model.CollationStrength;
import io.quarkus.mongodb.panache.reactive.ReactivePanacheMongoRepository;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.regex.Pattern;

@ApplicationScoped
public class  AtmRepository implements ReactivePanacheMongoRepository<AtmEntity> {

  private Collation caseInsensitiveCollation() {
    return Collation.builder().locale("en").collationStrength(CollationStrength.SECONDARY).build();
  }

  public Uni<Long> countAllAtms() {
    return count();
  }

  public Uni<PagedResult<AtmEntity>> findAtmsWithPagination(Pageable pageable) {
    final var data = findAll().page(pageable.pageNumber(), pageable.pageSize()).list();
    final var total = countAllAtms();
    return PagedResult.from(data, total, pageable);
  }

  public Uni<PagedResult<AtmEntity>> findAtmsByPostalCodeWithPagination(
      String postalCode, Pageable pageable) {
    var query = find("postalCode", postalCode);
    final var data = query.page(pageable.pageNumber(), pageable.pageSize()).list();
    final var total = countAllAtms();
    return PagedResult.from(data, total, pageable);
  }

  public Uni<PagedResult<AtmEntity>> findAtmsByStateIgnoreCaseWithPagination(
      String state, Pageable pageable) {
    var query = find("state", state).withCollation(caseInsensitiveCollation());
    final var data = query.page(pageable.pageNumber(), pageable.pageSize()).list();
    final var total = countAllAtms();
    return PagedResult.from(data, total, pageable);
  }

  public Uni<PagedResult<AtmEntity>> findAtmsByPostalCodeAndStateIgnoreCaseWithPagination(
      String postalCode, String state, Pageable pageable) {
    var query =
        find("{ 'postalCode': ?1, 'state': ?2 }", postalCode, state)
            .withCollation(caseInsensitiveCollation());
    final var data = query.page(pageable.pageNumber(), pageable.pageSize()).list();
    final var total = countAllAtms();
    return PagedResult.from(data, total, pageable);
  }

  public Uni<PagedResult<AtmEntity>> findAtmsByLocationWithinRangeWithoutPagination(
      Double minLat, Double maxLat, Double minLong, Double maxLong) {

    final var query =
        find(
            "{ 'location.latitude': { '$gte': ?1, '$lte': ?2 }, 'location.longitude': { '$gte': ?3, '$lte': ?4 } }",
            minLat,
            maxLat,
            minLong,
            maxLong);

    final var data = query.list();
    final var total = query.count();
    return PagedResult.fromAll(data, total);
  }

  public Uni<PagedResult<AtmEntity>> findAtmsByAddressContainingWithPagination(
      String address, Pageable pageable) {
    final var pattern = ".*" + Pattern.quote(address.trim()) + ".*";
    final var query =
        find("{ 'address': { '$regex': ?1, '$options': 'i' } }", pattern)
            .withCollation(caseInsensitiveCollation());
    final var data = query.page(pageable.pageNumber(), pageable.pageSize()).list();
    final var total = countAllAtms();
    return PagedResult.from(data, total, pageable);
  }
}
