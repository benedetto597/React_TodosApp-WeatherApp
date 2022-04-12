import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('todos')

export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'varchar', length: 50 })
    title: string;
    
    @Column({ type: 'varchar', length: 255 })
    description: string;
    
    @Column({default: false})
    completed: boolean;
    
    @Column({type: 'datetime', default: () => 'NOW()',})
    createdAt: Date;
    
    @Column({default: () => 'NOW()', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    constructor(id: string,title: string, description: string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
