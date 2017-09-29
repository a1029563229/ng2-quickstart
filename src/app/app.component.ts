import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  public title: string;
  public myHero: Hero;
  public heroes: Hero[];
  public fontSizePx: number = 12;

  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;

  public currentClasses: Object;
  public currentStyles: Object;

  constructor() {
    this.title = 'hero';
    this.heroes = [
      new Hero(1, 'jack', 'happy'),
      new Hero(2, 'rose', 'bad'),
      new Hero(3, 'alex', 'confused'),
      new Hero(4, 'mackol', 'default')
    ];
    this.myHero = this.heroes[0];

    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    }

    this.currentStyles = {
      'font-size': this.canSave ? '80px' : '40px',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-style': this.isSpecial ? 'italic' : 'normal'
    }
  }

  public getVal(hero: Hero): number {
    return hero.id;
  }

  public deleteHero(hero: Hero): void {
    console.log(hero);
  }

  public getUpperCase(name: string): string {
    return name.toLocaleUpperCase();
  }

  public takeParams(last: any, even: any, odd: any) {
    console.log({ last });
    console.log({ even });
    console.log({ odd });
  }

  public trackByHeroes(i: number, hero: Hero): number {
    return hero.id;
  }

  public takeInput(dom: any): void {
    console.log(dom);
  }
}
