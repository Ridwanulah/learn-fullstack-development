/*
	Select the brand, model, year, condition and price from cars
		where the condition is 3 or higher
		and the year is before 1970
*/

SELECT brand, model, year, consition, price FROM cars
	WHERE consition >= 3
	AND year < 1970
