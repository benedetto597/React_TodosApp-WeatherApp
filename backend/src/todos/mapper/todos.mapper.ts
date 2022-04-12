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

    /*
    dtoToCreateEntity(todoDTO: TodoDto): Todo {
        return new Todo(todoDTO.id, todoDTO.title, todoDTO.description, todoDTO.completed, todoDTO.createdAt, todoDTO.updatedAt);
    }

    entityCreateToDto(todoEntity: Todo): CreateTodoDto {
        return new CreateTodoDto(todoEntity.id, todoEntity.title, todoEntity.description, todoEntity.completed);
    }

    dtoToUpdateEntity(todoDTO: TodoDto): Todo {
        return new Todo(todoDTO.id, todoDTO.title, todoDTO.description, todoDTO.completed, todoDTO.createdAt, todoDTO.updatedAt);
    }

    entityToUpdateDto(todoEntity: Todo): UpdateTodoDto {
        return new UpdateTodoDto(todoEntity.id, todoEntity.title, todoEntity.description, todoEntity.completed);
    }

    dtoToRemoveEntity(todoDTO: RemoveTodoDto): Todo {
        return new Todo(todoDTO.id, todoDTO.title, todoDTO.description, todoDTO.completed);
    }

    entityToRemoveDto(todoEntity: Todo): RemoveTodoDto {
        return new RemoveTodoDto(todoEntity.id, todoEntity.title, todoEntity.description, todoEntity.completed);
    }
    */
}