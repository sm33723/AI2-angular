import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonLsService } from '../person-ls.service';
import { Person } from "../person";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  person_id? : number;
  person?    : Person;

  constructor (
    private route: ActivatedRoute,
    private person_ls_service: PersonLsService,
  ){

  }

  ngOnInit(){
    this.route.params.subscribe( (params)=>{
      this.person_id = params["id"];
    
      if(this.person_id != null){
        this.person = this
          .person_ls_service
          .getPerson(
            this.person_id
          )
      }
    })
  }
}
