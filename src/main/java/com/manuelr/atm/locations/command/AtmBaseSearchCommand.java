package com.manuelr.atm.locations.command;

import com.manuelr.atm.locations.util.Pageable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public abstract class AtmBaseSearchCommand {
  private Pageable pageable;
}
