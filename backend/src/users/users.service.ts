import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private readonly users: CreateUserDto[] = []; // Tambahkan anotasi tipe di sini

    create(createUserDto: CreateUserDto): string {
        this.users.push(createUserDto);
        return 'This action adds a new user';
    }

    findAll(): CreateUserDto[] {
        return this.users;
    }

    findOne(id: number): CreateUserDto {
        return this.users[id];
    }

    update(id: number, updateUserDto: UpdateUserDto): string {
        this.users[id] = updateUserDto;
        return `This action updates a #${id} user`;
    }

    remove(id: number): string {
        this.users.splice(id, 1);
        return `This action removes a #${id} user`;
    }
}
