import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    // Servidor estático
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    // Connect to Mongoose
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    // Normal modules
    PokemonModule,
    CommonModule,
  ],
})
export class AppModule {}
