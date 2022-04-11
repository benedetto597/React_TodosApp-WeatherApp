<div align="center">

<img src="https://miro.medium.com/max/500/1*GGy6YD5EJoWIzT22YWNp1Q.png" style="width:150px; height:150px"> </img>

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
#### Instalaciones necesarias (ejecucion local)
* [Google Chrome](https://www.google.com/chrome/)

* [Node](https://nodejs.org/es/)
  
* [Docker](https://docs.docker.com/get-docker/)

* [React]()
React
TypeORM
Nest

____
#### Configuración previa de Docker
1. Crear el volumen externo
  ```
  docker volume create --name=postgresql-volume
  ```

#### Validar la correcta ejecucion de postgresql dockerizado
1. Verificar que el contenedor este corriendo
  ```
  docker-compose ps
  ```

2. Entrar al contenedor de postgresql
  ```
  docker-compose exec database bash
  ```

3. Conectarse a postgesql:
  ```
  psql -h localhost -d todosApp -U bene
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


#### Frontend

____

#### Ejecucion 

1. Directorio raíz:  
  ```
  docker-compose up -d database
  ```

2. Directorio backend 
  ``` 
  npm start
  ```
3. Directorio frontend 
  ```
  npm start
  ```

