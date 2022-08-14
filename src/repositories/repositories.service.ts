import { OnModuleInit } from '@nestjs/common';
import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RepositoriesService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleInit() {
    return this.$connect();
  }
  onModuleDestroy() {
    return this.$disconnect();
  }
}
