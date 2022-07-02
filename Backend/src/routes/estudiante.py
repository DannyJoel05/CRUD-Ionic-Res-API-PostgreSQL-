from flask import Blueprint, jsonify, request
from database.config import connect
import psycopg2.extras

estudiante=Blueprint('estudiante', __name__)

@estudiante.route("/mostrar", methods=["GET"])
def mostrar():
    mensage=""
    bandera=False
    resultado=""
    try:
        cur = connect.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cur.execute("select * from Sp_Mostrar_Estudiante()")
        resultado=cur.fetchall()
        if(resultado):
            bandera=True
            mensage="Exito al realizar la consulta"
    except OSError as error:
        mensage ='Ha ocurrido un error al momento de realizar la peticion '+ error
    return jsonify({
        "mensaje":mensage,
        "ejecucion":bandera,
        "resultado":resultado
    })

@estudiante.route("/proceso/<int:b>", methods=['PUT', 'POST'])
def proceso(b):
    mensage=""
    bandera=False
    resultado=""
    accion=""
    try:
        if b==1: accion="INSERTAR"
        elif b==2: accion="ACTUALIZAR"
        elif b==3: accion="ELIMINAR"

        cur = connect.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cur.execute("select Sp_Proceso_Estudiante(%s,%s,%s,%s,%s,%s)",
            (   
                request.json['codigo'],
                request.json['nombres'],
                request.json['apellidos'],
                request.json['correo'],
                request.json['edad'],
                b
            )
        )
        connect.commit()
        mensage='Exito al '+accion+' registro en la base de datos.'
        bandera= True
    except OSError as error:
        mensage = 'Ha ocurrido un error al '+ accion +' los registros en la base de datos.' +error
    return jsonify({
        "mensaje":mensage,
        "ejecucion":bandera,
        "resultado":resultado
    })