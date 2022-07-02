/*
PROCESO
1= INSERTAR
2= MODIFICAR
3= ELIMINAR
*/

create function Sp_Proceso_Estudiante(
	_id_estudiante int,
	_nombres varchar(50),
	_apellidos varchar(50),
	_correo varchar(50),
	_edad int,
	_b int
)
returns table (respuesta text)
as $$
begin
		if(_b=1) then
				insert into Estudiante(Nombres, Apellidos, Correo, Edad)
				values (_nombres, _apellidos, _correo, _edad);
		elseif(_b=2) then
				update Estudiante
				set  Nombres = _nombres,
					 Apellidos = _apellidos,
					 Correo = _correo,
					 Edad = _edad
				where ID_Estudiante= _id_estudiante;
		elseif(_b=3) then
				delete from Estudiante 
				where ID_Estudiante= _id_estudiante;
		end if;		
end
$$ language plpgsql;


/*
MOSTRAR
*/

create function Sp_Mostrar_Estudiante()
returns setof Estudiante
as $$
begin
	return query select * from Estudiante;
end
$$ language plpgsql;
