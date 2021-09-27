-- Utilizando la bd movies_db

/*
Utilizando la base de datos de movies, queremos conocer, por un lado, los
títulos y el nombre del género de todas las series de la base de datos.
*/
SELECT series.title, genres.name
FROM series 
RIGHT JOIN genres ON genres.id = series.genre_id;

/*
Por otro, necesitamos listar los títulos de los episodios junto con el nombre y
apellido de los actores que trabajan en cada uno de ellos.
*/
SELECT DISTINCT series.title, seasons.title, episodes.title, CONCAT(actors.first_name, " ", actors.last_name) AS "Nombre completo"
FROM series
INNER JOIN seasons ON seasons.id = serie_id
INNER JOIN episodes ON episodes.id = season_id
INNER JOIN actor_episode ON actor_episode.id = episode_id
INNER JOIN actors ON actors.id = actor_episode.actor_id;

/*
Para nuestro próximo desafío, necesitamos obtener a todos los actores o
actrices (mostrar nombre y apellido) que han trabajado en cualquier película
de la saga de La Guerra de las galaxias.
*/
SELECT  movies.title, actors.first_name, actors.last_name
FROM actors
INNER JOIN actor_movie ON actor_movie.id= actor_id
INNER JOIN movies ON movies.id = movie_id
WHERE movies.title LIKE "La Guerra de las galaxias%";

/*
Crear un listado a partir de la tabla de películas, mostrar un reporte de la
cantidad de películas por nombre de género.
*/
SELECT genres.name, COUNT(*) AS "Numeros de peliculas"
FROM genres
INNER JOIN movies ON movies.id = genre_id
GROUP BY genres.name; 

-----------------------------------------------------------------------------------------------------

-- Utilizando la bd emarket

-- ¿Cuántos clientes existen?
SELECT COUNT(clienteID)
FROM clientes;

-- ¿Cuántos clientes hay por ciudad?
SELECT Ciudad, COUNT(*)
FROM clientes
GROUP BY Ciudad; 

-- ¿Cuál es el total de transporte?
SELECT SUM(Transporte) AS "Total de transporte" 
FROM facturas;

-- ¿Cuál es el total de transporte por EnvioVia (empresa de envío)?
SELECT SUM(EnvioVia) 
FROM facturas;

-- Calcular la cantidad de facturas por cliente. Ordenar descendentemente por cantidad de facturas.
SELECT facturas.ClienteID, COUNT(*)
FROM facturas
GROUP BY facturas.ClienteID;

-- Obtener el Top 5 de clientes de acuerdo a su cantidad de facturas.
SELECT facturas.ClienteID, COUNT(*)
FROM facturas
GROUP BY facturas.ClienteID
ORDER BY  COUNT(*) DESC
LIMIT 5;

-- ¿Cuál es el país de envío menos frecuente de acuerdo a la cantidad de facturas?
SELECT paisEnvio, COUNT(*)
FROM facturas
GROUP BY paisEnvio 
ORDER BY COUNT(*) 
LIMIT 1;

/*
Se quiere otorgar un bono al empleado con más ventas. ¿Qué ID de empleado
realizó más operaciones de ventas?
*/
SELECT EmpleadoID, COUNT(*) 
FROM facturas
GROUP BY EmpleadoID
ORDER BY COUNT(*) DESC
LIMIT 1;

-- ¿Cuál es el producto que aparece en más líneas de la tabla Factura Detalle?
SELECT ProductoID, COUNT(*) 
FROM facturadetalle
GROUP BY ProductoID
ORDER BY COUNT(*) DESC
LIMIT 1;

/*
¿Cuál es el total facturado? Considerar que el total facturado es la suma de
cantidad por precio unitario.
*/
SELECT  facturadetalle.FacturaID, SUM(PrecioUnitario * Cantidad) AS "Total facturado" 
FROM facturadetalle
GROUP BY facturadetalle.FacturaID;

-- ¿Cuál es el total facturado para los productos ID entre 30 y 50?
SELECT facturadetalle.ProductoID, SUM(PrecioUnitario * Cantidad) AS "Total facturado" 
FROM facturadetalle
GROUP BY facturadetalle.ProductoID
HAVING facturadetalle.ProductoID BETWEEN 30 AND 50;

-- ¿Cuál es el precio unitario promedio de cada producto?
SELECT facturadetalle.ProductoID, AVG(PrecioUnitario)
FROM facturadetalle
GROUP BY facturadetalle.ProductoID;

-- ¿Cuál es el precio unitario máximo?
SELECT facturadetalle.ProductoID, MAX(PrecioUnitario)
FROM facturadetalle
GROUP BY facturadetalle.ProductoID
ORDER BY PrecioUnitario DESC
LIMIT 1;

-- Generar un listado de todas las facturas del empleado 'Buchanan'.
SELECT facturaID, facturas.EmpleadoID FROM facturas
INNER JOIN empleados ON empleados.EmpleadoID = facturas.EmpleadoID
WHERE empleados.Apellido = "Buchanan";

-- Generar un listado con todos los campos de las facturas del correo 'Speedy Express'.
SELECT * FROM facturas 
INNER JOIN correos ON correos.correoID = facturas.EnvioVia
WHERE correos.Compania = "Speedy Express";

-- Generar un listado de todas las facturas con el nombre y apellido de los empleados.
SELECT FacturaID, CONCAT(empleados.Nombre, " ", empleados.Apellido) AS "Nombre completo"
FROM facturas
INNER JOIN empleados ON  empleados.EmpleadoID = facturas.EmpleadoID;

-- Mostrar un listado de las facturas de todos los clientes “Owner” y país de envío “USA”.
SELECT FacturaID, clientes.Titulo, PaisEnvio
FROM facturas 
INNER JOIN clientes ON clientes.ClienteID = facturas.ClienteID
WHERE clientes.Titulo LIKE "Owner%" AND PaisEnvio = "USA";

/*
Mostrar todos los campos de las facturas del empleado cuyo apellido sea
“Leverling” o que incluyan el producto id = “42”.
*/
SELECT facturas.FacturaID, 
	   facturas.ClienteID,
       facturas.EmpleadoID,
       facturas.FechaFactura,
       facturas.FechaRegistro, 
       facturas.FechaEnvio, 
       facturas.EnvioVia, 
       facturas.Transporte, 
       facturas.NombreEnvio, 
       facturas.DireccionEnvio, 
       facturas.CiudadEnvio, 
       facturas.RegionEnvio,
       facturas.CodigoPostalEnvio, 
       facturas.PaisEnvio
FROM facturas 
INNER JOIN empleados ON empleados.EmpleadoID = facturas.EmpleadoID
INNER JOIN facturadetalle ON facturadetalle.FacturaID = facturas.FacturaID
INNER JOIN productos ON productos.ProductoID = facturadetalle.ProductoID
WHERE empleados.Apellido = "Leverling" OR facturadetalle.ProductoID = 42;

/*
Mostrar todos los campos de las facturas del empleado cuyo apellido sea
“Leverling” y que incluya los producto id = “80” o ”42”.
*/
SELECT F.*
FROM facturas AS F
INNER JOIN empleados ON empleados.EmpleadoID = F.EmpleadoID
INNER JOIN facturadetalle ON facturadetalle.FacturaID = F.FacturaID
INNER JOIN productos ON productos.ProductoID = facturadetalle.ProductoID
WHERE empleados.Apellido = "Leverling" AND (facturadetalle.ProductoID = 80 OR facturadetalle.ProductoID = 42);

/*
Generar un listado con los cinco mejores clientes, según sus importes de
compras total (PrecioUnitario * Cantidad).
*/
SELECT clientes.ClienteID, SUM(facturadetalle.PrecioUnitario * facturadetalle.Cantidad) AS ComprasTotales
FROM clientes
INNER JOIN facturas ON facturas.ClienteID = clientes.ClienteID
INNER JOIN facturadetalle ON facturadetalle.FacturaID = facturas.FacturaID
GROUP BY clientes.ClienteID
ORDER BY ComprasTotales DESC
LIMIT 5;

/*
Generar un listado de facturas, con los campos id, nombre y apellido del cliente,
fecha de factura, país de envío, Total, ordenado de manera descendente por
fecha de factura y limitado a 10 filas.
*/
SELECT facturas.FacturaID, clientes.Contacto, facturas.FechaFactura, facturas.PaisEnvio, SUM(facturadetalle.PrecioUnitario * facturadetalle.Cantidad) AS ComprasTotales
FROM  facturas
INNER JOIN clientes ON clientes.ClienteID = facturas.ClienteID
INNER JOIN facturadetalle ON facturadetalle.FacturaID = facturas.FacturaID
GROUP BY facturas.FacturaID
ORDER BY facturas.FechaFactura DESC
LIMIT 10;





















