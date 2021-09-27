-- Listar las canciones que poseen la letra “z” en su título.
SELECT * FROM cancion
WHERE titulo LIKE "%Z%";

-- Listar las canciones que poseen como segundo carácter la letra “a” y como último, la letra “s”.
SELECT * FROM cancion 
WHERE titulo LIKE '_A%s';

/*
Mostrar la playlist que tiene más canciones, renombrando las columnas poniendo mayúsculas en la primera letra, los tildes correspondientes y agregar los espacios entre palabras.
*/

SELECT idPlaylist AS 'Id Playlist', idusuario AS 'Id usuario', cantcanciones AS 'Cantidad de canciones', idestado AS 'Id estado', Fechacreacion AS 'Fecha de creación', Fechaeliminada AS 'Fecha de eliminación'  FROM playlist
ORDER BY cantcanciones DESC 
LIMIT 1;

-- En otro momento se obtuvo un listado con los 5 usuarios más jóvenes, obtener un listado de los 10 siguientes.

SELECT * FROM usuario
ORDER BY fecha_nac DESC
LIMIT 10 OFFSET 5;

-- Listar las 5 canciones con más reproducciones, ordenadas descendentemente.
SELECT * FROM cancion
ORDER BY cantreproduccion DESC
LIMIT 5;

-- Generar un reporte de todos los álbumes ordenados alfabéticamente.
SELECT * FROM album
ORDER BY titulo;

-- Listar todos los álbumes que no tengan imagen, ordenados alfabéticamente.
SELECT * FROM album
WHERE imagenportada IS NULL 
ORDER BY titulo;

SELECT * FROM usuario;
SELECT * FROM pais;
INSERT INTO usuario (idUsuario, nombreusuario, nyap, password, fecha_nac, sexo, CP, Pais_idPais)
VALUES(20, 'nuevousuariodespotify@gmail.com', 'Elmer Gomez', 'S4321m', '1991-11-15', 'M', 'B4129ATF', 2);








