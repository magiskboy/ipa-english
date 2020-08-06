import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { IPASymbol } from '../symbol.model';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.less'],
  animations: [
    trigger('flip', [
      state('flipped', style({ transform: 'rotateY(0)' })),
      state('unflipped', style({ transform: 'rotateY(360deg)' })),
      transition('* => *', animate('400ms ease-in-out'))
    ])  
  ]
})
export class SymbolComponent implements OnInit {
  @Input() symbol: IPASymbol;
  showIPA: boolean = true;
  isPlaying: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSwipe(event): void {
    const dir: string = this.getDirectionSwipe(event);
    if (dir == 'left' || dir == 'right') this.toggleShowIPA();
  }

  toggleShowIPA() {
    this.showIPA = !this.showIPA;
  }

  getDirectionSwipe(event): string {
    const x = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'right' : 'left'):'';
    const y = Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? 'down' : 'up') : '';
    return `${x} ${y}`.trim();
  }

  playSound(name: string) {
    if (!this.isPlaying) {
      let audio = new Audio(`assets/sounds/${name}.mp3`);
      audio.load();
      audio.play().then(() => this.isPlaying = true);
      audio.addEventListener('ended', event => this.isPlaying = false);
    }
  }
}
