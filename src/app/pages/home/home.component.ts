import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService){}

  bannerResult:any=[]

  trendingResult:any=[]
  trendingTitle:String="Trending"

  actionMoviesResult:any=[]
  actionTitle:String="Action"

  adventureMoviesResult:any=[]
  adventureTitle:String="Adventure"

  animationMoviesResult:any=[]
  animationTitle:String="Animation"

  comedyMoviesResult:any=[]
  comedyTitle:String="Comedy"

  documentaryMoviesResult:any=[]
  documentaryTitle:String="Documentary"

  scienceFictionMoviesResult:any=[]
  scienceFictionTitle:String="Science Fiction"

  thrillerMoviesResult:any=[]
  thrillerTitle:String="Thriller"

  ngOnInit(): void {
    this.bannerData()
    this.trendingData()
    this.actionMoviesData()
    this.adventureMoviesData()
    this.animationMoviesData()
    this.comedyMoviesData()
    this.documentaryMoviesData()
    this.scienceFictionMoviesData()
  }

  // banerData

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingResult = result.results
    })
  }

  actionMoviesData(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionMoviesresult#');
      this.actionMoviesResult = result.results
    })
  }

  adventureMoviesData(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'adventureMoviesresult#');
      this.adventureMoviesResult = result.results
    })
  }

  animationMoviesData(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationMoviesresult#');
      this.animationMoviesResult = result.results
    })
  }

  comedyMoviesData(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'ComedyMoviesresult#');
      this.comedyMoviesResult = result.results
    })
  }

  documentaryMoviesData(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'documentaryMoviesresult#');
      this.documentaryMoviesResult = result.results
    })
  }

  scienceFictionMoviesData(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      console.log(result,'scienceFictionMoviesresult#');
      this.scienceFictionMoviesResult = result.results
    })
  }

  thrillerMoviesData(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'thrillerMoviesresult#');
      this.thrillerMoviesResult = result.results
    })
  }
}
