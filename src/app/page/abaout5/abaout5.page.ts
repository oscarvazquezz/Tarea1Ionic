import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout5',
  templateUrl: './abaout5.page.html',
  styleUrls: ['./abaout5.page.scss'],
})
export class Abaout5Page implements OnInit {

  constructor(private router:Router) { }

  data = [];
  dat = [];
  dataJson:any;
  dataJsons:any;

  ngOnInit() {
    this.guardar();
  }

  guardar(){
    this.data=[
     {
       user:'Alexx',
       foto:'https://i.pinimg.com/564x/9e/28/92/9e2892269e085f93ba89dd754a28d739.jpg',
     }
    ];
    this.dat = [
      {
        nombre:'Alexxander Costa',
        edad:"21",
        fechaCumple: "01/06/2000",
        fechaRegistro:"02/07/2019",
      }
    ]
    this.dataJson = JSON.parse(JSON.stringify(this.data));
    this.dataJsons = JSON.parse(JSON.stringify(this.dat));
  }

  irHome(){
    this.router.navigate(['/home']);
  }
}
