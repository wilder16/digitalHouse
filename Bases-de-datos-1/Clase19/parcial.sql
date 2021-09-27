/*
11. Generar un reporte con el nombre del usuario y el título de videos del usuario que no pertenecen a ninguna playlist.
*/
SELECT usuario.nombre, video.titulo 
FROM usuario
INNER JOIN playlist ON Usuario_idUsuario = usuario.idUsuario
INNER JOIN playlist_video ON Playlist_idPlaylist = playlist.idPlaylist
INNER JOIN video ON Video_idVideo = video.idVideo;


 
 -- 12. Listar a todos los usuarios que no poseen ningún video.
 SELECT * FROM usuario
 LEFT JOIN video ON Usuario_idUsuario = usuario.idUsuario
 WHERE video.idVideo IS NULL;
 
 
 -- 13. Listar la cantidad total de reacciones por cada tipo de reacción, en el período del 01-01-2021 al 01-04-2021
 SELECT tiporeaccion.idTipoReaccion, tiporeaccion.nombre,  COUNT(TipoReaccion_idTipoReaccion) FROM reaccion
 INNER JOIN tiporeaccion ON TipoReaccion_idTipoReaccion = tiporeaccion.idTipoReaccion
 GROUP BY TipoReaccion_idTipoReaccion;
 
 -- 14. Listar los videos que tienen los usuarios cuyo nombre contiene la letra “a” y son del país Argentina.
 SELECT * FROM video
 INNER JOIN usuario ON Usuario_idUsuario = usuario.idUsuario
 INNER JOIN pais ON Pais_idPais = pais.idPais
 WHERE usuario.nombre LIKE "%A%" AND pais.nombre = "Argentina";

 
 
 -- 15. Generar un informe estilo ranking de avatars utilizados por país
 SELECT avatar.nombre, COUNT(avatar.nombre) FROM avatar
 INNER JOIN usuario ON Avatar_idAvatar = avatar.idAvatar
 INNER JOIN pais ON Pais_idPais = pais.idPais
 ORDER BY avatar.nombre;
 
 
 
 
