import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { GetOneTodoDto } from './dto/getone-todo.dto';
import { RemoveTodoDto } from './dto/remove-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  
  // CRUD
  @Post()
  create(@Body() todo: CreateTodoDto) {
    return this.todosService.create(todo);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get()
  findOne(@Body() {id}: GetOneTodoDto) {
    return this.todosService.findOne(id);
  }

  @Patch()
  update(@Body() todo: UpdateTodoDto) {
    return this.todosService.update(todo);
  }

  @Delete()
  remove(@Body() {id}: RemoveTodoDto) {
    return this.todosService.remove(id);
  }
}
