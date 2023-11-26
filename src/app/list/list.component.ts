import { Component, importProvidersFrom } from '@angular/core';
import { Person } from '../person';
import { PersonLsService } from '../person-ls.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  people: Person[] = [];

  constructor(
    private person_ls_service: PersonLsService,
  ) {
  }

  ngOnInit() {
    this.people = this.person_ls_service.getAll();
  }

  delete(i:number):void{
    if(confirm(
      `are you sure you want to delete\n` +
      `${this.people[i].first_name} `+
      `${this.people[i].last_name} ` +
      `from contacts?`
    )){
      this.person_ls_service.deletePerson(i);
      this.people = this.person_ls_service.getAll();
    }
  }
}