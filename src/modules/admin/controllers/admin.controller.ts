import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Version,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminService } from '../services/admin.service';
import { CreateAdminDto } from '../dtos/create-Admin.dto';

@ApiTags('Admins')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @Version('1')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'create Admin' })
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<string> {
    await this.adminService.createAdmin(createAdminDto);
    return 'Admin created successfully';
  }
}
