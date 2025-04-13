package com.manuelr.atm.locations.command;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
public class AtmSearchByLocationQuadrantCommand extends AtmBaseSearchCommand {
  private Double startLatitude;
  private Double endLatitude;
  private Double startLongitude;
  private Double endLongitude;
}
