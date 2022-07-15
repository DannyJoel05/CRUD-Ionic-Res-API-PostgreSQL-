from dotenv import load_dotenv
import psycopg2
import os

load_dotenv()


user= os.environ['USER']
host= os.environ['HOST']
password=os.environ['PASSWORD']
database= os.environ['DATABASE']
port=os.environ['PORT']

connect = psycopg2.connect(dbname=database, user=user, password=password,host=host, port=port)