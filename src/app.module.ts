import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Post } from './Entities/post.entity';
import { User } from './Entities/user.entity';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'rating',
      entities: [User, Post],
      synchronize: true,
      logging: true
  }),
  AuthModule, UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
