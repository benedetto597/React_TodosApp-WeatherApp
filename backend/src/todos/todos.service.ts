import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ){}

  create(todo: CreateTodoDto) {
    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find({});
  }

  findOne(id: string) {
    return this.todoRepository.findOne({id});
  }

  update(todo: UpdateTodoDto) {
    return this.todoRepository.save(todo);
  }

  remove(id: string) {
    return this.todoRepository.delete({id});
  }
}
