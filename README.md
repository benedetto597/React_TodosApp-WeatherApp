# React_TodosApp_WeatherApp



### Instalaciones necesarias

Docker
Node
React
TypeORM
Nest


### Ejecucion 

cd backend --> npm start
cd frontend --> npm start
docker-compose up -d database
  crear el volumen externo: docker volume create --name=postgresql-volume

Verificar que el contenedor este corriendo:
  docker-compose ps

Entrar al contenedor de ps
  docker-compose exec database bash

### Dependencias

#### Backend dependencies
* TypeORM
  ```terminal
  npm i @nestjs/config @nestjs/typeorm typeorm pg class-validator class-transformer
  ```

#### Frontend dependencies
