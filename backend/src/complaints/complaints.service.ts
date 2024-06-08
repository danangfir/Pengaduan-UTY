import { Injectable } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';

@Injectable()
export class ComplaintsService {
    private readonly complaints: CreateComplaintDto[] = [];

    create(createComplaintDto: CreateComplaintDto): string {
        this.complaints.push(createComplaintDto);
        return 'This action adds a new complaint';
    }

    findAll(): CreateComplaintDto[] {
        return this.complaints;
    }

    findOne(id: number): CreateComplaintDto {
        return this.complaints[id];
    }

    update(id: number, updateComplaintDto: UpdateComplaintDto): string {
        this.complaints[id] = { ...this.complaints[id], ...updateComplaintDto };
        return `This action updates a #${id} complaint`;
    }

    remove(id: number): string {
        this.complaints.splice(id, 1);
        return `This action removes a #${id} complaint`;
    }
}
