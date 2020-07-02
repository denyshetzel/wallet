import { PrimaryGeneratedColumn, Column, BaseEntity, Entity, ManyToOne } from "typeorm";

@Entity()
export class Launch extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    /*@ManyToOne(type => Category)
    category: Category*/

}
