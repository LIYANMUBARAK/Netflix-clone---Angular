import { Component ,OnInit,Input} from '@angular/core';
import {MovieApiServiceService} from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() movies:any
  @Input() category!:String

  constructor(private service:MovieApiServiceService){}

  ngOnInit(): void {
    
  }

  
 
}


