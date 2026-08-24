/*
	Select brand, model, and color from cars
		where the color is 'red'
		and the brand is not 'Ferrari'
		and the car has not been sold
*/

SELECT brand, model, color, sold FROM cars
	WHERE color IS "%red%"
	AND brand IS NOT "%Ferrari%"
	AND sold IS FALSE
