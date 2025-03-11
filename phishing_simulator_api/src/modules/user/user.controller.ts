import { Controller, Get, HttpCode, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Auth } from '../../decorators/http.decorator';
import { Role } from '../../constants/role.enum';
import { PageOptionsDto } from '../common/dtoes/page-options.dto';
import { AuthUser } from '../../decorators/auth.decorator';
import { User } from './user.schema';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) { }
  
  @Get('')
  @Auth(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  async getAllUsers(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<User[]> {
      return this.userService.getAllUsers(pageOptionsDto);
  }

  @Get(':id')
  @Auth(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  async getUserById(
    @Param('id') id: string,
    @AuthUser() user: User
  ): Promise<User> {
      return this.userService.getUserById(id, user);
  }
}
