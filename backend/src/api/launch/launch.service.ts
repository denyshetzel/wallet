import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Launch } from './launch.entity';

@Injectable()
export class LaunchService{

    constructor(@InjectRepository(Launch) private readonly launchRepository: Repository<Launch>){
    }

    async findById(id: string): Promise<Launch> {
        return await this.launchRepository.findOne(id);
    }

    async findAll(): Promise<Launch[]> {
        return await this.launchRepository.find();
    }

    async create(launch: Launch): Promise<Launch> {
        return await this.launchRepository.save(launch);
    }

    async update(launch: Launch): Promise<UpdateResult> {
        return await this.launchRepository.update(launch.id, launch);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.launchRepository.delete(id);
    }

}
