package com.manuelr.atm.locations.entity;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Location {
  private Double latitude;
  private Double longitude;
}
