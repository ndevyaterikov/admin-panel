import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatisticModule } from './statistic/statistic.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [      ConfigModule.forRoot(
      {
        isGlobal: true,
        envFilePath:`.${process.env.NODE_ENV}.env`
      }),
    StatisticModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      synchronize: true,
      autoLoadModels:true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
