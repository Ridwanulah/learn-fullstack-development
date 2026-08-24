/*
	Select the brand, model, condition and year from cars
		Where the year is 1961, 1963, 1965, 1967 or 1969
		and the condition is 3 or higher
		and sold is false
*/

SELECT brand, model, condition, year, sold, FROM
	WHERE brand IN (1961, 1963, 1965, 1967, 1969)
	AND conditon >= 3
	AND sold IS FALSE
