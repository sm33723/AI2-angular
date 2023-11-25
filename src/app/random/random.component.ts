import { Component, Input } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  random_number : number = 0;

  @Input() max : number = 10;

  constructor(
    private random_service : RandomService
  ){

  }

  ngOnInit():void{
    this.random_number = this.random_service.randomNumber(this.max);
  }

  btnClick():void{
    this.random_number = this.random_service.randomNumber(this.max);
  }

  isSmallerThanHalf():boolean{
    return this.random_number <= this.max/2;
  }
}
