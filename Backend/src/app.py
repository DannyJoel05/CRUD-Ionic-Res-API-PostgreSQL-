from flask import Flask
from flask_cors import CORS
from routes.estudiante import estudiante

app = Flask(__name__)
app.secret_key='Prueba_crud_if'

if __name__=='__main__':
    app.register_blueprint(estudiante)
    CORS(app)
    app.run(port=3000, debug=True)