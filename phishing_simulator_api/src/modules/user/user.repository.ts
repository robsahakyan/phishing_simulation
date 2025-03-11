import { Repository } from 'typeorm';
import { CustomRepository } from '../../db/typeorm-ex.decorator';
import { UserEntity } from './/entities/user.entity';
import { UserNotFoundException } from './exceptions/user-not-found.exception';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async findByEmail(email: string) {
        return this.createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne();
    }

    async findById(id: string) {
        const query = await this.createQueryBuilder('user')
            .where('user.id = :id', { id })
            .leftJoinAndSelect('user.company', 'company')
            .leftJoinAndSelect('user.files', 'files')
            .leftJoinAndSelect('company.users', 'users')
            .getOne();

        if (!query) {
            throw new UserNotFoundException();
        }
        return query;
    }

    async getAllSorted() {
        return this.createQueryBuilder('user')
            .where('user.role != :role', { role: 'SUPER_ADMIN' })
            .leftJoinAndSelect('user.company', 'company')
            .orderBy('user.role', 'DESC')
    }
}
