import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/filters/all-exceptions/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        if (errors.length === 0) {
          return new BadRequestException({
            statusCode: 400,
            message: 'Validation failed',
            error: 'Bad Request',
          });
        }
        const messages = errors.flatMap((err) =>
          err.constraints ? Object.values(err.constraints) : [],
        );
        console.log("=========",messages)
        const firstError = messages[0] || 'Validation error';
        return new BadRequestException({
          statusCode: 400,
          message: firstError, 
          error: 'Bad Request',
        });
      },
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());


  await app.listen(process.env.PORT_NUMBER ?? 3000);
  app.enableShutdownHooks()
}
bootstrap();
