import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'
import { UserModule } from './users/user.module';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb+srv://gmt:1234@cluster0.mztodt4.mongodb.net/?retryWrites=true&w=majority'),
    ConfigModule.forRoot(),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
