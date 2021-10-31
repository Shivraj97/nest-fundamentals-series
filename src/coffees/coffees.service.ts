import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwerk Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Dark Roast',
      brand: 'Uru Brew',
      flavors: ['velvet', 'rose'],
    },
    {
      id: 3,
      name: 'Bangalore Coffee',
      brand: 'Karnataka Brew',
      flavors: ['chocolate', 'rose'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    console.log(id);
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  updateById(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (existingCoffee) {
      this.coffees.splice(coffeeIndex, 0, updateCoffeeDto);
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
