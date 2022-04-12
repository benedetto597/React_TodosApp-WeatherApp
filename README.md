<div align="center">

<img src="https://miro.medium.com/max/500/1*GGy6YD5EJoWIzT22YWNp1Q.png" style="width:250px; height:150px"> </img>

<!-- Encabezado -->
### TodosApp | WeatherApp
#### React | Nest | TypeORM | Redux | OpenWeatherMap | NodeJS | PostgreSQL 
#### Abril 2022
#### Autor 

| Nombre | Correo |
|:-------:|:-----:|
| Edgar Josué Benedetto Godoy | [Gmail](mailto:ejbg597@gmail.com) |

</div>

_____

### Ejecución del aplicativo web en local
#### Instalaciones necesarias (ejecucion local)
* [Google Chrome](https://www.google.com/chrome/)

* [Node](https://nodejs.org/es/)
  
* [Docker](https://docs.docker.com/get-docker/)

____
#### Configuración previa de Docker
1. Crear el volumen externo
  ```
  docker volume create --name=mysql-volume
  ```

#### Validar la correcta ejecucion de postgresql dockerizado

1. Ejecutar el contenedor
  ```
  docker-compose up -d
  ```

2. Entrar al contenedor de mysql
  ```
  docker-compose exec mysql bash
  ```

3. Conectarse a mysql:
  ```
  mysql -h nombre_servidor -u nombre_usuario -p nombre_base_datos

  mysql -h localhost -u admin -p todosApp

  docker exec -it TodosApp mysql -uroot -p 

  pass: admin

  Cambiar zona horaria: SET GLOBAL time_zone = ‘-6:00’;
  ```

#### Instalación de dependencias

##### Backend
* Nest JS 
  ```terminal
  npm i -g @nestjs/cli
  ```

* TypeORM 
  ```terminal
  npm i --save @nestjs/typeorm typeorm
  ```
  
* TypeORM Class Validator & Class Transformer
  ```terminal
  npm i @nestjs/config @nestjs/typeorm typeorm pg class-validator class-transformer
  ```

* Mysql
  ```terminal
  npm i mysql
  ```

* Swagger
  ```terminal
  npm install --save @nestjs/swagger swagger-ui-express
  ```

* Verify
  ```terminal
  npm install verify
  ```

#### Frontend

* React
  ```terminal
  npm i -g create-react-app
  ```

____

#### Ejecucion 

1. Directorio raíz:  
  ```
  docker-compose up -d
  ```

2. Directorio backend 
  ``` 
  npm start
  ```
3. Directorio frontend 
  ```
  npm start
  ```
##### Opcionales

4. Prueba de la documentación con Swagger
[Swagger | API Documentación](http://localhost:3000/api)

