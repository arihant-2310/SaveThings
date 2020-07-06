import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as config from 'config';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('SaveThings Root');
  const serverConfig = config.get('server');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: '*' });
  }
  app.useStaticAssets(join(__dirname, '../../../public'));
  // global.console.log('environment', process.env.NODE_ENV);
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
