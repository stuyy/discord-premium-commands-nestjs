import 'reflect-metadata';
import * as session from 'express-session';
import * as passport from 'passport';
import { getRepository } from 'typeorm';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Session } from './typeorm/entities/Session';
import { TypeormStore } from 'connect-typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5001;
  const { ENVIRONMENT } = process.env;
  try {
    const sessionRepository = getRepository(Session);
    app.use(
      session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 3600000 * 24,
        },
        store: new TypeormStore().connect(sessionRepository),
      }),
    );
    app.setGlobalPrefix('api');
    app.enableCors({
      origin: ['http://localhost:3000'],
      credentials: true,
    });
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(PORT);
    console.log(`Running on Port ${PORT}`);
    console.log(`Running in ${ENVIRONMENT} mode.`);
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
