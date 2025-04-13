package com.manuelr.atm.locations.entity;

import io.quarkus.mongodb.panache.common.MongoEntity;
import io.quarkus.mongodb.panache.reactive.ReactivePanacheMongoEntityBase;
import lombok.*;
import org.bson.codecs.pojo.annotations.BsonId;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@MongoEntity(collection = "bankEntity", database = "atm_data_db")
public class AtmEntity extends ReactivePanacheMongoEntityBase {
  @BsonId private String id;
  private String name;
  private String address;
  private String references;
  private String state;
  private String postalCode;
  private String type;
  private String phone;
  private Location location;
  private OpeningTime openingTime;
}
