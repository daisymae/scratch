import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return 'hi there!';
    }
}

// module must wrap controllers
@Module({
    controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
    // create nest application
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();
