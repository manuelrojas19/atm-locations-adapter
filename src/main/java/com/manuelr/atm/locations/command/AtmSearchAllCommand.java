package com.manuelr.atm.locations.command;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.SuperBuilder;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
public class AtmSearchAllCommand extends AtmBaseSearchCommand {}
