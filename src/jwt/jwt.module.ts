import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtConstants } from 'src/jwt/jwt.constants';

export interface JwtModuleOptions {
  privateKey: string;
}

@Module({
  imports: [PrismaModule],
})
@Global()
export class JwtModule {
  static forRoot(options: JwtModuleOptions): DynamicModule {
    return {
      module: JwtModule,
      providers: [
        {
          provide: JwtConstants.CONFIG_OPTIONS,
          useValue: options,
        },
        JwtService,
      ],
      exports: [JwtService],
    };
  }
}
