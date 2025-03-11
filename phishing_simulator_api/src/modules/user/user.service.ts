import { PageOptionsDto } from './../common/dtoes/page-options.dto';
import { Role } from './../../constants/role.enum';
import { RegistrationDto } from './../auth/dtoes/registration.dto';
import { MailService } from './../../shared/services/mail.service';
import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { UpdateUserDto } from './dtoes/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    public readonly mailService: MailService
  ) {}

  async create(data: RegistrationDto & { role: Role }): Promise<User> {
    try {
      const user = new this.userModel(data);

      return await user.save();
    } catch (error) {
      throw new BadRequestException('Error while creating user');
    }
  }

  async getEntityByEmail(email: string): Promise<User | null> {
    const entity = await this.userModel.findOne({ email }).exec();
    if (!entity) {
      throw new Error('User not found');
    }
    return entity;
  }

  async getEntityById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async getUserById(id: string, user: any): Promise<User> {
    const entity = await this.userModel.findById(id).exec();
    if (user.role === Role.SUPER_ADMIN) {
      return entity
    }
    return entity
  }

  async updateUser(id: string, user: any, updateUserDto: UpdateUserDto): Promise<User> {
    if (user.role !== Role.SUPER_ADMIN && id !== user.id) {
      throw new ForbiddenException('You do not have permission to update this user');
    }

    const userEntity = await this.getEntityById(id);
    if (Object.keys(updateUserDto).length) {
      await this.userModel.updateOne({ _id: id }, updateUserDto).exec();
    }
    return this.getEntityById(id);
  }

  async getAllUsers(pageOptionsDto: PageOptionsDto): Promise<User[]> {
    return this.userModel
      .find()
      .skip((pageOptionsDto.page - 1) * pageOptionsDto.take)
      .limit(pageOptionsDto.take)
      .exec();
  }

  async deleteUser(id: string): Promise<void> {
    const userEntity = await this.getEntityById(id);
    if (!userEntity) {
      throw new BadRequestException('User not found');
    }
    await this.userModel.deleteOne({ _id: id }).exec();
  }
}
