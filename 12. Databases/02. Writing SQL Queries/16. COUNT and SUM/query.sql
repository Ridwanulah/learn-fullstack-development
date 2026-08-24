/*
	Count the number of cars
		where sold is true
*/

SELECT
	AVG(price),
	MAX(price),
	MIN(price)
FROM cars
	AND sold IS TRUE
