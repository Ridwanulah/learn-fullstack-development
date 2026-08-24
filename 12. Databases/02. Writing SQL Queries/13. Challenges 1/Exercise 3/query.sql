/*
	Select brand, model, and color from cars
		where the color is 'red'
		and the brand is not 'Ferrari'
		and the car has not been sold
*/

SELECT brand, model, color, year, sold FROM cars
	WHERE ((brand IS "%Dogde%"
	AND year BETWEEN 1960 AND 1969)
	OR (brand IN ("%Ford%", "%TRIUMPH%")
	AND year BETWEEN 1970 AND 1979))
	AND sold IS FALSE
