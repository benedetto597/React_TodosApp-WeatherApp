import { PartialType } from '@nestjs/mapped-types';
import { GetOneTodoDto } from './getone-todo.dto';

export class RemoveTodoDto extends PartialType(GetOneTodoDto) {}