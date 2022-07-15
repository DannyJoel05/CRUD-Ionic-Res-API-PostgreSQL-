create table Estudiante(
	ID_Estudiante serial primary key not null,
	Nombres varchar(50) not null,
	Apellidos varchar(50) not null,
	Correo varchar(50) not null,
	Edad int
);

/* CONSULTAS */
select * from Estudiante

insert into Estudiante (Nombres, Apellidos, Correo, Edad)
values('Dabu','Code','dabu.code@prueba.com',20)

insert into Estudiante (Nombres, Apellidos, Correo, Edad)
values('Juan','Code','juan.code@prueba.com',28)

insert into Estudiante (Nombres, Apellidos, Correo, Edad)
values('Fernanda','Code','fernanda.code@prueba.com',25)