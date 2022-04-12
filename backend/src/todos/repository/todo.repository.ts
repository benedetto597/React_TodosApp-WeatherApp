import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { TodoDto } from '../dto/todo.dto';
import { Todo } from '../entities/todo.entity';
import { TodoMapper } from '../mapper/todos.mapper';

@Injectable()
export class TodosRepository {

    constructor(
        @InjectRepository(Todo) 
        private todosRepository: Repository<Todo>,
        private mapper: TodoMapper){}

    getAllTodos(): Promise<Todo[]> {
        return this.todosRepository.find();
    }

    newTodo(todoDTO: TodoDto): Promise<Todo> {
        const newTodo = this.mapper.dtoToEntity(todoDTO);
        return this.todosRepository.save(newTodo);
    }

    async updateTodo(todoDTO: TodoDto): Promise<Todo> {
        const updateTodo = this.mapper.dtoToEntity(todoDTO);
        await this.todosRepository.update(updateTodo.id, updateTodo);
        return this.todosRepository.findOne(updateTodo.id);
    }

    deleteTodo(todoDTO: TodoDto): Promise<DeleteResult> {
        const deleteTodo = this.mapper.dtoToEntity(todoDTO);
        return this.todosRepository.delete(deleteTodo.id);
    }
}