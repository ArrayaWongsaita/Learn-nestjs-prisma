import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './docs/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const corsOrigin = configService.get<string>('CORS_ORIGIN');
  const port = configService.get<number>('PORT') || 3000;

  // Setting up CORS
  app.enableCors({
    origin: corsOrigin === '*' ? true : corsOrigin.split(','),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  });

  // เปิดการกำหนดเวอร์ชัน API
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // สร้างเอกสาร Swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalInterceptors(new LoggingInterceptor());

  await app.listen(port);
}
bootstrap();
