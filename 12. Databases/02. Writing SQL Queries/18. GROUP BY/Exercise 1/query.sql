/*
	Select the condition, and a count of the condition from cars
		group by the condition column
*/

SELECT
	condition,
	COUNT(condition) AS conditonCount
	FROM cars
	GROUP BY condition



/*
	Select the brand, a count of the brand and the average price for each brand
*/
SELECT brand, COUNT(brand), FLOOR(AVG(price)) AS AVG FROM cars
	GROUP BY brand
	AND sold is FALSE
