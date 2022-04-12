import { Injectable } from '@nestjs/common';
import { TodoDto } from '../dto/todo.dto';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoMapper {

    dtoToEntity(todoDTO: TodoDto): Todo {
        return new Todo(todoDTO.id, todoDTO.title, todoDTO.description, todoDTO.completed);
    }

    entityToDto(todoEntity: Todo): TodoDto {
        return new TodoDto(todoEntity.id, todoEntity.title, todoEntity.description, todoEntity.completed, todoEntity.createdAt, todoEntity.updatedAt);
    }

}