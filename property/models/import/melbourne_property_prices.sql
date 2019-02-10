
@inherits HyperModelImport
@{
  Context
    .FromKaggle("anthonypino", "melbourne-housing-market", "MELBOURNE_HOUSE_PRICES_LESS.csv")
    .AsDataWarehouseTable();
}