-- Listar todos los usuarios cuyo nombre comience con la letra “a”.
SELECT * FROM usuario
WHERE nombre LIKE "a%";

-- Listar todos los usuarios que no hayan cargado el email.
SELECT * FROM usuario
WHERE email IS NULL;

-- Mostrar todos los canales creados entre el 01/04/2021 y el 01/06/2021.
SELECT * FROM canal 
WHERE fechaCreacion BETWEEN "2021-04-01" AND "2021-06-01";

-- Listar los 10 usuarios más jóvenes.
SELECT * FROM usuario 
ORDER BY fechaNacimiento DESC
lIMIT 10;

-- Mostrar todas las playlists que sean privadas.
SELECT * FROM playlist 
WHERE privado = 1;

-- Listar el top 5 de videos con más cantidad de likes.
SELECT * FROM video
ORDER BY  cantidadLikes DESC
LIMIT 5;

INSERT INTO usuario VALUES (DEFAULT, "Juan Jose Batzal", "jjbatzal@gmail.com", "jj1597", "2000-04-01", "1429", 9, 85);

-- Generar un listado con todos los usuarios que hayan nacido en el año 2000.
SELECT * FROM usuario
WHERE fechaNacimiento BETWEEN "2000-01-01" AND "2000-12-31";

-- Listar todos los países ordenados alfabéticamente y su nombre en mayúsculas.
SELECT UPPER(nombre) AS "Nombre País" FROM pais 
ORDER BY nombre; 

-- 10.Listar todos los videos que posean más de 500.000 reproducciones.
SELECT * FROM video
WHERE cantidadReproducciones > 500000;

-- Generar un reporte de todos los videos publicados en el año 2020 que sean privados y que posean más de 100 dislikes.
SELECT * FROM video 
WHERE fechaPublicacion BETWEEN "2020-01-01" AND "2020-12-31" AND privado = 1 AND cantidadDislikes > 100;

/*
Por error hemos cargado mal los datos de Juan Jose Batzal. La fecha de
nacimiento no era 01/04/2000, sino 04/01/2000. Ahora debemos crear y
ejecutar la sentencia necesaria para realizar la modificación.
*/
UPDATE usuario
SET fechaNacimiento = "2000-01-04"
WHERE idUsuario = 0;

-- 13. Listar todos los usuarios cuyo password contenga menos de 5 caracteres
SELECT * FROM usuario
WHERE length(password) > 5;

-- 14 Generar un reporte de los usuarios. En la consulta mostrar los siguientes títulos:
SELECT idUsuario AS ID, nombre AS Nombre, email AS "E-mail", fechaNacimiento AS "Fecha de Nacimiento", TIMESTAMPDIFF(YEAR,fechaNacimiento,CURDATE()) AS Edad, Pais_idPais AS "Codigo de Pais"
FROM usuario;

-- 15.Listar el video de mayor tamaño.
SELECT * FROM video 
ORDER BY tamanio DESC
LIMIT 1;

-- 16.Generar un reporte de las últimas 10 reacciones, listando la fecha, el código de reacción, el ID de usuario y el video.
SELECT  fecha AS "Fecha reacción", TipoReaccion_idTipoReaccion AS "Código de reacción", Usuario_idUsuario AS "Id usuario", Video_idVideo AS "Id video" 
FROM reaccion 
ORDER BY fecha DESC 
LIMIT 10;

-- 17.Listar todos los videos que tengan menos de 100.000 reproducciones y 100 o más likes.
SELECT * FROM video
WHERE cantidadReproducciones < 100000 AND cantidadLikes >= 100;

-- 18.Mostrar todos los videos que incluyan la palabra “FAN” dentro de su descripción.
SELECT * FROM video 
WHERE descripcion LIKE "%FAN%";

/*
19.Generar un listado de los usuarios cuyos passwords sean aquellos que no
satisfacen las políticas de seguridad de la empresa. Estos son los que se
corresponden con: 123, 1234, 12345, abc, clave, password.
*/
SELECT * FROM usuario
WHERE (password = 123) OR  (password = 1234) OR (password = 12345) OR (password = "abc") OR (password = "clave") OR (password = "password");

-- 20.Eliminar el avatar cuyo nombre sea avDhTube.
SELECT * FROM avatar;

DELETE FROM avatar
WHERE idAvatar = 84;




