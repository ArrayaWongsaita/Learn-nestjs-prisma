// src/docs/swagger/swagger.config.ts
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API Documentation for Unibijoux')
  .setDescription('Unibijoux')
  .setVersion('1.0')
  .addBearerAuth() // ถ้าใช้ JWT Authentication
  .build();
