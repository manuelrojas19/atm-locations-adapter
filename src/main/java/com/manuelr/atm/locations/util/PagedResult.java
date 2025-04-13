package com.manuelr.atm.locations.util;

import io.quarkus.runtime.annotations.RegisterForReflection;
import io.smallrye.mutiny.Uni;

import java.util.List;

@RegisterForReflection
public record PagedResult<T>(
    List<T> content, int pageNumber, int pageSize, long totalElements, int totalPages) {
  public PagedResult(List<T> content, int pageNumber, int pageSize, long totalElements) {
    this(
        content,
        pageNumber,
        pageSize,
        totalElements,
        (int) Math.ceil((double) totalElements / pageSize));
  }

  public static <T> Uni<PagedResult<T>> from(
      Uni<List<T>> data, Uni<Long> total, Pageable pageable) {
    return Uni.combine()
        .all()
        .unis(data, total)
        .asTuple()
        .map(
            tuple ->
                new PagedResult<>(
                    tuple.getItem1(),
                    pageable.pageNumber(),
                    pageable.pageSize(),
                    tuple.getItem2()));
  }

  public static <T> Uni<PagedResult<T>> fromAll(Uni<List<T>> data, Uni<Long> total) {
    return Uni.combine()
            .all()
            .unis(data, total)
            .asTuple()
            .map(
                    tuple -> {
                      int totalCount = tuple.getItem2().intValue();
                      return new PagedResult<>(tuple.getItem1(), 0, totalCount, tuple.getItem2());
                    });
  }
}
