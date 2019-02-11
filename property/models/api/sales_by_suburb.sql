@inherits WarehouseHttpApi
@{
	Context
		.WithDependency("melbourne_property_prices")
		.WithHttpOutputAsJson();

	var suburbParam = Context.WithParameter("suburb");
	var roomsParam = Context.WithParameter("rooms");
	var yearParam = Context.WithParameter("year");
}

SELECT	COUNT(*) AS sales,
        AVG(CAST(price AS float)) AS avg_price,
      	suburb
FROM melbourne_property_prices
WHERE 	method = 'S'
AND 	(suburb = @suburbParam OR @suburbParam IS NULL)
AND 	(rooms = @roomsParam OR @roomsParam IS NULL)
AND 	(CAST(substr(DATE, -4) AS INT) = @yearParam OR @yearParam IS NULL)

GROUP BY suburb

