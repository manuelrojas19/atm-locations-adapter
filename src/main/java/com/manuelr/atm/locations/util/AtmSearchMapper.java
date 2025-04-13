package com.manuelr.atm.locations.util;

import com.manuelr.atm.locations.command.*;
import com.manuelr.atm.locations.dto.AtmSearchCriteriaDto;
import lombok.experimental.UtilityClass;

@UtilityClass
public class AtmSearchMapper {

  public static AtmBaseSearchCommand map(AtmSearchCriteriaDto request) {

    Pageable pageable = new Pageable(request.page, request.size);

    if (request.startLatitude != null
        && request.endLatitude != null
        && request.startLongitude != null
        && request.endLongitude != null) {
      return AtmSearchByLocationQuadrantCommand.builder()
          .startLatitude(request.startLatitude)
          .endLatitude(request.endLatitude)
          .startLongitude(request.startLongitude)
          .endLongitude(request.endLongitude)
          .pageable(pageable)
          .build();
    }

    if (request.latitude != null && request.longitude != null) {
      return AtmSearchByLocationCommand.builder()
          .latitude(request.latitude)
          .longitude(request.longitude)
          .pageable(pageable)
          .build();
    }

    if (request.postalCode != null && request.state != null) {
      return AtmSearchByPostalCodeAndStateCommand.builder()
          .postalCode(request.postalCode)
          .state(request.state)
          .pageable(pageable)
          .build();
    }

    if (request.postalCode != null) {
      return AtmSearchByPostalCodeCommand.builder()
          .postalCode(request.postalCode)
          .pageable(pageable)
          .build();
    }

    if (request.state != null) {
      return AtmSearchByStateCommand.builder().state(request.state).pageable(pageable).build();
    }

    if (request.address != null) {
      return AtmSearchByAddressCommand.builder()
          .address(request.address)
          .pageable(pageable)
          .build();
    }

    return AtmSearchAllCommand.builder().pageable(pageable).build();
  }
}
