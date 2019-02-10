@inherits WarehouseHttpApi
@{
	Context
		.WithDependency("melbourne_property_prices")
		.WithHttpOutputAsJson();

	var suburbParam = Context.WithParameter("suburb");
}

SELECT	COUNT(*) AS sales,
        AVG(CAST(price AS float)) AS avg_price,
        CAST(substr(DATE, -4) AS INT) AS year
FROM melbourne_property_prices
WHERE 	method = 'S'
AND 	suburb = @suburbParam
GROUP BY CAST(substr(DATE, -4) AS INT)

