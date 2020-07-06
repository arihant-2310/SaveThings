import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('SaveThings Root');
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Save Now And Use Later')
    .setDescription('APIS')
    .setVersion('1.0')
    .addTag('SaveThings')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(5009);
  logger.log(`Application Listening on Port 5009 `);
  logger.log(`Api documentation avaliable at "/api/`);
}
bootstrap();
