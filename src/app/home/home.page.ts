import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  data = [];

  constructor(private router:Router) {}

  ngOnInit(){
    this.initializaIntems();
  }

  initializaIntems(){
    for(var i=0;i<6;i++){
      var id = 1+i;
      this.data.push(id);
    }
  }

  guardar(id){
    console.log("ff ",id);
    this.router.navigate(['/abaout'+id]);
  }

}
