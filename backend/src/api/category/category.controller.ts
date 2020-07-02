import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from './category.entity';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Category
  }
})

@ApiTags('categorys')
@Controller('categorys')
export class CategoryController implements CrudController<Category>{

    constructor(public readonly service: CategoryService){}

    /* @Get()
    getAll(): Promise<Category[]> {
      return this._categoryService.getAll();
    }

    @Get()
    getOne(@Param('id') id:string): Promise<Category> {
      return this._categoryService.getOne(id);
    }
    
    @Post()
    create(category: Category): Promise<Category> {
      return this._categoryService.create(category);
    }

    @Put()
    update(@Param('id') id: string, category: Category): Promise<Category> {
      return this._categoryService.update(id, category);
    }    

    @Delete()
    delete(@Param('id') id: string): Promise<DeleteResult> {
      return this._categoryService.delete(id);
    } */

}
