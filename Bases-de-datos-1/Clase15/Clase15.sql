-- Listar las canciones cuya duración sea mayor a 2 minutos
SELECT * FROM canciones 
WHERE milisegundos/60000 > 2;

-- Listar las canciones cuyo nombre comience con una vocal.
SELECT * FROM canciones 
WHERE (nombre LIKE "A%") OR (nombre LIKE "E%") OR (nombre LIKE "I%") OR (nombre LIKE "O%") OR (nombre LIKE "U%");

/*
Listar las canciones ordenadas por compositor en forma descendente. 
Luego, por nombre en forma ascendente. Incluir únicamente aquellas canciones que tengan compositor.
*/

SELECT nombre,  compositor,  COUNT(*) FROM canciones
GROUP BY nombre
ORDER BY compositor DESC, nombre;

-- a) Listar la cantidad de canciones de cada compositor.
SELECT  compositor,  COUNT(compositor) FROM canciones
GROUP BY compositor;

SELECT * FROM canciones;

/*
Modificar la consulta para incluir únicamente los compositores que
tengan más de 10 canciones.
*/
SELECT  compositor,  COUNT(compositor) AS NumeroCanciones FROM canciones
GROUP BY compositor
HAVING NumeroCanciones > 10;

-- a) Listar el total facturado agrupado por ciudad.
SELECT ciudad_de_facturacion, SUM(total)
FROM facturas
GROUP BY ciudad_de_facturacion;

/*
b) Modificar el listado del punto (a) mostrando únicamente las ciudades
de Canadá.
*/
SELECT pais_de_facturacion, ciudad_de_facturacion, SUM(total)
FROM facturas
GROUP BY ciudad_de_facturacion
HAVING pais_de_facturacion = "Canada";

/*
c) Modificar el listado del punto (a) mostrando únicamente las ciudades
con una facturación mayor a 38.
*/
SELECT ciudad_de_facturacion, SUM(total)
FROM facturas
GROUP BY ciudad_de_facturacion
HAVING SUM(total) > 38;

/*
d) Modificar el listado del punto (a) agrupando la facturación por país, y
luego por ciudad.
*/
SELECT pais_de_facturacion, ciudad_de_facturacion, SUM(total)
FROM facturas
GROUP BY pais_de_facturacion, ciudad_de_facturacion
ORDER BY pais_de_facturacion;

-- a) Listar la duración mínima, máxima y promedio de las canciones.
SELECT MIN(milisegundos/60000) AS DuracionMinima, 
	   MAX(milisegundos/60000) AS DuracionMaxima, 
       AVG(milisegundos/60000) AS DuracionPromedio
FROM canciones;

-- b) Modificar el punto (a) mostrando la información agrupada por género.
SELECT id_genero, MIN(milisegundos/60000) AS DuracionMinima, 
	   MAX(milisegundos/60000) AS DuracionMaxima, 
       AVG(milisegundos/60000) AS DuracionPromedio
FROM canciones
GROUP BY id_genero;

