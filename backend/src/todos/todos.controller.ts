import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDto } from './dto/todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  
  /*
  @Post()
  create(@Body() todo: TodoDto) {
    return this.todosService.create(todo);
  }
  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  @Patch()
  update(@Body() todo: UpdateTodoDto) {
    return this.todosService.update(todo);
  }
  @Delete()
  remove(@Body() {id}: RemoveTodoDto) {
    return this.todosService.remove(id);
  }
  */
  @Get()
  async getAllTodos(): Promise<TodoDto[]> {
      return await this.todosService.getAllTodos();
  }
  @Post()
  async newTodo(@Body() todo: TodoDto): Promise<TodoDto> {
      return await this.todosService.newTodo(todo);
  }
  @Patch()
  async updateTodo(@Body() todo: TodoDto): Promise<TodoDto> {
      return await this.todosService.updateTodo(todo);
  }
  @Delete(':id')
  async deleteTodo(@Body() todo: TodoDto): Promise<void> {
      return await this.todosService.deleteTodo(todo);
  }
}
