import { Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './entities/todo.entity';
import { TodosRepository } from './repository/todo.repository';
import { TodoMapper } from './mapper/todos.mapper';

@Injectable()
export class TodosService {
  /*
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

  update(todo: UpdateTodoDto) {
    return this.todoRepository.save(todo);
  }

  remove(id: string) {
    return this.todoRepository.delete({id});
  }
  */

  constructor(
    private todosRepository: TodosRepository,
    private mapper: TodoMapper
  ){}

  async getAllTodos(): Promise<TodoDto[]> {
      const todos: Todo[] = await this.todosRepository.getAllTodos()
      return todos.map(todo => this.mapper.entityToDto(todo));
  }

  async newTodo(todoDTO: TodoDto): Promise<TodoDto> {
      const newTodo: Todo = await this.todosRepository.newTodo(todoDTO);
      return this.mapper.entityToDto(newTodo);
  }

  async updateTodo(todoDTO: TodoDto): Promise<TodoDto> {
      const updateTodo = await this.todosRepository.updateTodo(todoDTO);
      return this.mapper.entityToDto(updateTodo);
  }

  async deleteTodo(todoDTO: TodoDto): Promise<void> {
      await this.todosRepository.deleteTodo(todoDTO);
  }
}
