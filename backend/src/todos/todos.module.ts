import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from './entities/todo.entity';
import { TodoMapper } from './mapper/todos.mapper';
import { TodosRepository } from './repository/todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService,TodosRepository, TodoMapper]
})
export class TodosModule {}
