import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-sizer',
  templateUrl: './sizer.component.html'
})

export class SizerComponent {
  @Input() size: number | string;
  @Output('sizeChange') change = new EventEmitter<number>();

  constructor() {}

  dec() { this.resize(-1); }
  inc() { this.resize(1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.change.emit(this.size);
  }
}