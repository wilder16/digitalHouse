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

