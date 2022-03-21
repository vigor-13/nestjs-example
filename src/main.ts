import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  await app.listen(PORT, () => {
    logger.log(`Server is runnign on ${PORT}port.`);
  });
}
bootstrap();
