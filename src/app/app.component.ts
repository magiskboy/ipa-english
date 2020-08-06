import { Component } from '@angular/core';
import { IPASymbol } from './symbol.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  symbols: IPASymbol[];

  constructor(
    private appService: AppService,
  ) {
    appService.symbols.subscribe(symbols => {
      this.symbols = symbols;
    })
  }
}
