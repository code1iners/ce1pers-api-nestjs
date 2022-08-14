import { Injectable } from '@nestjs/common';
import { Member } from '@/members/models/member.model';

@Injectable()
export class MembersService {
  async getAll(): Promise<Member[]> {
    return [];
  }

  async findMemberById(id: number) {
    console.log(id);
    return {
      id: 1,
      email: 'tester01@email.com',
      password: '123123',
      username: 'tester01',
    };
  }
}
