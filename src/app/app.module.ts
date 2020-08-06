import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import * as Hammer from 'hammerjs';


import { AppComponent } from './app.component';
import { SymbolComponent } from './symbol/symbol.component';


export class HammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SymbolComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HammerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
