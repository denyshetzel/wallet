import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';

import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category>{
   
    constructor(@InjectRepository(Category) protected readonly usersRepository: Repository<Category>){
      super(usersRepository);
    }

    /* public getAll(): Promise<Category[]>{
        return Category.find();
    }

    public getOne(id: string): Promise<Category>{
        return Category.findOne(id);
    }

    public create(category: Category): Promise<Category>{
        return category.save();
    }

    public update(id:string, category: Category): Promise<Category>{
        Category.findOne(id);
        return category.save();
    }

    public delete(id: string): Promise<DeleteResult>{
        return Category.delete(id);
    } */

}
