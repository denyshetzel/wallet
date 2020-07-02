import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
//declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Wallet')
    .setDescription('The Wallet API description')
    .setVersion('1.0')
    //.addTag('categorys')
    //.addTag('launchs')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-doc', app, document);

  await app.listen(3000);

  /*if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }*/
}
bootstrap();
