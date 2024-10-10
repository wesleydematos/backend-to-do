import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateTaskDto } from './tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createTask(@Req() req, @Body() body: { title: string }) {
    const userId = req.user.userId;
    return this.tasksService.createTask(userId, body.title);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllTasks(@Req() req) {
    const userId = req.user.userId;
    return this.tasksService.findAllTasks(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateTask(
    @Req() req,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const userId = req.user.userId;
    return this.tasksService.updateTask(parseInt(id), userId, updateTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteTask(@Req() req, @Param('id') id: string) {
    const userId = req.user.userId;
    return this.tasksService.deleteTask(parseInt(id), userId);
  }
}
