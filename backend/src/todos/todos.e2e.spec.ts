import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TodoDto } from './dto/todo.dto';
import { AppModule } from '../app.module';
import { TodosModule } from './todos.module';

describe('TodosController (e2e)', () => {
    let app: INestApplication;
  
    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule, TodosModule],
      }).compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
    });
  
    it('todos CRUD', async () => {
  
      const server = request(app.getHttpServer());
  
      const currentGetAllRequest = await server.get('/todos').expect(200);
      const currentSize = currentGetAllRequest.body.length;
  
      const newTodo: TodoDto = {
        title:'Primero',
        description: 'Primer todo'    
      }

      const newTodoRequest = await server.post('/todos').type('form')
      .send(newTodo).expect(201);
      expect(newTodoRequest.body.title).toBe(newTodo.title);
      expect(newTodoRequest.body.description).toBe(newTodo.description);
      const postNewRequest = await server.get('/todos').expect(200);
      const postNewSize = postNewRequest.body.length;
      expect(postNewSize).toBe(currentSize + 1);
  
      const id = newTodoRequest.body.id;
  
      const updateTodo: TodoDto = {
        id: newTodoRequest.body.id,
        title:'Segundo',
        description: 'Segundo todo', 
        completed: false
      }
      const updateTodoRequest = await server.patch(`/todos`)
      .expect(200).type('form').send(updateTodo);
      expect(updateTodoRequest.body.title).toEqual(updateTodo.title);
      expect(updateTodoRequest.body.description).toEqual(updateTodo.description);
      expect(updateTodoRequest.body.completed).toEqual(updateTodo.completed);
      
      const removeTodo: TodoDto = {
        id: newTodoRequest.body.id
      }
      await server.delete(`/todos/${removeTodo.id}`).expect(200).type('form').send(removeTodo);
      const postDeleteGetAllRequest = await server.get('/todos')
      .expect(200);
      const postDeleteSize = postDeleteGetAllRequest.body.length;
      expect(postDeleteSize).toBe(currentSize);
  
    });

    afterAll(async () => {
      await app.close();
    });
  });


