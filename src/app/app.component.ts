import { Component, OnInit } from '@angular/core';
import { Coin } from './models/Coin.interface';
import { CoinsService } from './services/coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  coins: Coin[] = [];
  toles: string[] = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

  constructor(private coinService: CoinsService) { }

  ngOnInit() {
    this.coinService.getCoinsRequest()
      .subscribe(res => {
        this.coins = res;
      })
  }

}
