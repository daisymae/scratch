import { Module } from "@nestjs/common";
import { AppController } from './app.controller';

// module must wrap controllers
@Module({
    controllers: [AppController]
})
export class AppModule {}
