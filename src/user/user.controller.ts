import { Controller, Get, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-auth.guard';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';

@Controller('user')
export class UserController {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    @Get('getAll')
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    getAll () {
        return this.userRepository.find({relations: {posts: true}})
    }
}
