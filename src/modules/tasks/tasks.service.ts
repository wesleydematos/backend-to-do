import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/@libs/prisma';
import { UpdateTaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(userId: number, title: string) {
    return this.prisma.task.create({
      data: {
        title,
        user: { connect: { id: userId } },
      },
    });
  }

  async findAllTasks(userId: number, completed?: boolean) {
    const whereCondition: any = { userId };

    if (completed !== undefined) {
      whereCondition.completed = completed;
    }

    return this.prisma.task.findMany({
      where: whereCondition,
    });
  }

  async updateTask(id: number, userId: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== userId) {
      throw new NotFoundException('Task não encontrada.');
    }
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async deleteTask(id: number, userId: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== userId) {
      throw new NotFoundException('Task não encontrada.');
    }
    return this.prisma.task.delete({ where: { id } });
  }
}
