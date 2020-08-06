import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPASymbol } from './symbol.model';
import { Word } from './word.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  _symbols: BehaviorSubject<IPASymbol[]>;
  
  constructor(
    private http: HttpClient
  ) {
    this._symbols = new BehaviorSubject<IPASymbol[]>([]);
    http.get('assets/data.json').subscribe((data: any) => {
      let dataSymbols: any[] = data.symbols;
      let symbols: IPASymbol[] = [];

      dataSymbols.forEach((symbolData: any) => {
        let examples: Word[] = [];
        symbolData.examples.forEach(example => {
          examples.push(new Word(example.text, example.sound, example.transcript));
        });
        let newSymbol = new IPASymbol(
          symbolData.character,
          symbolData.sound,
          examples
        );
        symbols.push(newSymbol);
      })

      this._symbols.next(symbols);
    });
  }

  get symbols(): Observable<IPASymbol[]> {
    return this._symbols.asObservable();
  }

  loadData(): IPASymbol[] {
    return [];
  }
}
