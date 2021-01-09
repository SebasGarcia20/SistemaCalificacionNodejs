# Sistema de Calificacion con Nodejs + Express + MySQL + Sequelize 
Api sobre un sistema de calificación para empresas y productos

Endpoints: 

# permitir agregar una opinión (POST)
http://localhost:8080/api/qualifications

Ejemplo estructura json:

{
	"origen": "ProductoA",
  "opinion": "Excelente producto 100% recomendado",
  "calificacion": 5
} 

# traer todas las opiniones que tienen calificación mayor a 3 (GET)
http://localhost:8080/api/qualifications/GreaterThanThree

# Permite editar una opinión o una calificación o ambas (PUT)
http://localhost:8080/api/qualifications/id

Se reemplaza id por el número del id especifico a editar.

# Permite consultar una opinión específica con un id de opinión específica (GET)
http://localhost:8080/api/qualifications/id

Se reemplaza id por el número del id especifico a consultar.

# Permite consultar todas las opiniones (GET)
http://localhost:8080/api/qualifications

# PErmite consultar todas las opiniones realizadas pasándole una fecha específica (GET)
http://localhost:8080/api/qualifications/SpecifyDate?date=DATE

Se reemplaza DATE por la fecha específica a consultar de las calificaciones, la fecha se escribe en el estilo YYYY-MM-DD, por ejemplo, 2021-01-06. Se consulta por la fecha de creación.

# Endpoint que al ser consumido elimine una opinión (DELETE)
http://localhost:8080/api/qualifications/id

Se reemplaza id por el número del id especifico a eliminar.


