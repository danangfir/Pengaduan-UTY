import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI || 'mongodb://localhost:27017/university-complaints'),
    AuthModule,
    ComplaintsModule,
    UsersModule
  ],
  controllers: [AppController],  // Tambahkan AppController di sini
})
export class AppModule {}
