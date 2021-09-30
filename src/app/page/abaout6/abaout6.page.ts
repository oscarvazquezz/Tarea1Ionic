import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout6',
  templateUrl: './abaout6.page.html',
  styleUrls: ['./abaout6.page.scss'],
})
export class Abaout6Page implements OnInit {

  constructor(private router:Router) { }

  data = [];
  dataJson:any;

  ngOnInit() {
    this.guardar();
  }

  guardar(){
    this.data=[
     {
       nombre:'app usage time',
       contenidos:'8 hours',
     },{
        nombre:'Friends List',
        contenidos:'7 Friends',
      }, {
        nombre:'Advertising',
        contenidos:'3 contents',
      },{
        nombre:'Photo',
        contenidos:'4 contents',
      },{
        nombre:'Location',
        contenidos:'Tuxtla Gutierrez,Chiapas',
      },{
        nombre:'Application open in',
        contenidos:'huawei p10 lite',
      }
    ];
    this.dataJson = JSON.parse(JSON.stringify(this.data));
  }

  irHome(){
    this.router.navigate(['/home']);
  }

}
