import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { LaunchService } from './launch.service';
import { Launch } from './launch.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('launchs')
@Controller('launchs')
export class LaunchController {

    constructor(private readonly launchService: LaunchService){}

    @Get()
    async getAll(): Promise<any> {
      return this.launchService.findAll();
    }  

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Launch> {
        return this.launchService.findById(id);
    }

    @Post()
    async create(@Body() launch: Launch): Promise<any> {
      return this.launchService.create(launch);
    }  

    @Put(':id')
    async update(@Param('id') id: string, @Body() launch: Launch): Promise<any> {
      return this.launchService.create(launch);
    }  

}
