import { Query, Resolver } from '@nestjs/graphql';
import { Member } from '@/members/models/member.model';
import {
  FindMemberOutput,
  FindMembersOutput,
} from '@/members/dtos/find-member.dto';

@Resolver(() => Member)
export class MembersResolver {
  @Query(() => [Member])
  async findMembers(): Promise<FindMembersOutput> {
    return {
      ok: true,
      members: [],
    };
  }

  @Query(() => Member)
  async findMember(): Promise<FindMemberOutput> {
    return {
      ok: true,
      member: {
        id: 1,
        email: 'tester01@email.com',
        password: '123123',
        username: 'tester01',
      },
    };
  }
}
