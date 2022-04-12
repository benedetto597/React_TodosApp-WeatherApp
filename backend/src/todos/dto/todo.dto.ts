import { ApiProperty } from "@nestjs/swagger";
import { MinLength, IsBoolean, IsString, IsDate, IsOptional } from "class-validator";

export class TodoDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly id?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(4)
    readonly title?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(4)
    readonly description?: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    readonly completed?: boolean;
    
    @ApiProperty()
    @IsDate()
    @IsOptional()
    readonly createdAt?: Date;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    readonly updatedAt?: Date;

    constructor(id: string, title: string, description: string, completed: boolean, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}
