-- Queremos tener un listado de todas las categorías.
SELECT * FROM categorias; 
-- Discriminando solo las columnas CategoriaNombre y Descripcion
SELECT CategoriaNombre, Descripcion FROM categorias; 

-- Obtener un listado de los productos.
SELECT * FROM productos;

-- ¿Existen productos discontinuados? (Discontinuado = 1).
SELECT * FROM productos
WHERE Discontinuado = 1 ;

/*Para el viernes hay que reunirse con el Proveedor 8. ¿Qué productos son
los que nos provee?
*/
SELECT * FROM productos 
WHERE ProveedorID = 8; 

/*Queremos conocer todos los productos cuyo precio unitario se encuentre
entre 10 y 22.
*/
SELECT * FROM productos 
WHERE PrecioUnitario BETWEEN 10 AND 22 ;

/*Se define que un producto hay que solicitarlo al proveedor si sus
Unidades en stock son menores al Nivel de Reorden. ¿Hay productos por
solicitar?
*/
SELECT * FROM productos 
WHERE UnidadesStock <= NivelReorden; 

/*
Se quiere conocer todos los productos del listado anterior pero que
Unidades pedidas sea igual a cero.
*/
SELECT * FROM productos 
WHERE UnidadesStock <= NivelReorden AND UnidadesPedidas = 0;

/*
Obtener un listado de todos los clientes con Contacto, Compania, Título,
País. Ordenar el listado por País.
*/
SELECT Contacto, Compania AS Compañia, Titulo, Pais FROM clientes
ORDER BY Pais;

-- Queremos conocer a todos los clientes que tengan un título “Owner”.
SELECT * FROM clientes
WHERE Titulo = "Owner";

/*
El operador telefónico que atendió a un cliente, no recuerda su nombre.
Solo sabe que comienza con “C”. ¿Lo ayudamos a obtener un listado con
todos los contactos que inician con C?
*/
SELECT *  FROM clientes
WHERE contacto LIKE 'C%';

/*
Obtener un listado de todas las facturas, ordenado por fecha de factura
ascendente.
*/
SELECT * FROM facturas 
ORDER BY FechaFactura;
/*
Ahora se requiere un listado de las facturas con el país de envío “USA” y
que su correo (EnvioVia) sea distinto de 3.
*/
SELECT * FROM facturas
WHERE PaisEnvio = 'USA' AND EnvioVia != 3;

-- ¿El cliente 'GOURL' realizó algún pedido?

-- Se quiere visualizar todas las facturas de los empleados 2, 3, 5, 8 y 9.
SELECT * FROM facturas
WHERE EmpleadoID = 2 OR 3 OR 5 OR 8 OR 9 ORDER BY EmpleadoID;

SELECT * FROM clientes
WHERE pais = 'Mexico' OR pais ='Brazil';

