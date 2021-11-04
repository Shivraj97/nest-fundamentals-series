import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entitiy';
import { COFFEE_BRANDS } from './coffees.constants';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    //do something
    return ['buddy brew', 'nescafe'];
  }
}
@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
