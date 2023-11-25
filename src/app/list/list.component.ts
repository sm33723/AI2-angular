import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listed_elements : Array<string> = [
    "Hello World!", "Spam Eggs!"
  ];
  new_element     : string        = "";

  addNewElement(): void{
    this.listed_elements.push(this.new_element);
    this.new_element = "";
  }

  removeByIndex(index:number): void{
    this.listed_elements.splice(index,1);
  }
}
