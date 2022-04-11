@Entity()

export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column()
    completed: boolean;
    
    @Column()
    createdAt: Date;
    
    @Column()
    updatedAt: Date;
}
