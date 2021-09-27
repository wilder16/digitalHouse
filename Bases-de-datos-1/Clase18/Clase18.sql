SELECT FacturaID, 
	LEFT(DATE_FORMAT(FechaFactura, '%d/%m/%Y'), 10) AS "Fecha Factura", 
	LEFT(DATE_FORMAT(FechaEnvio, '%d/%m/%Y'), 10) AS "Fecha Envio",
 ROUND(Transporte, 2),
 CONCAT(DireccionEnvio, " / ", CiudadEnvio, " / ", CodigoPostalEnvio, " / ", PaisEnvio) AS Destino
FROM facturas
ORDER BY Transporte;