import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() deleteHero = new EventEmitter<Hero>();

  delete(hero: Hero): void {
    this.deleteHero.emit(hero);
  }
}