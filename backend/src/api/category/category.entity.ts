import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Category extends BaseEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    // after make subCategory
    // subCategory: Category;
}
