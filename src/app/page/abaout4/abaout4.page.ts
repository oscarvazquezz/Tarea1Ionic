import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout4',
  templateUrl: './abaout4.page.html',
  styleUrls: ['./abaout4.page.scss'],
})
export class Abaout4Page implements OnInit {

  constructor(private router:Router) { }

  data = [];
  dataJson:any;

  ngOnInit() {
    this.guardar();
  }

  guardar(){
    this.data=[
     {
       nombre:'piguina',
       contenidos:'https://i.pinimg.com/564x/9e/28/92/9e2892269e085f93ba89dd754a28d739.jpg',
     },{
       nombre:'UmU',
       contenidos:'https://i.pinimg.com/564x/67/ba/4d/67ba4d36bdf404880dc3a9b1ca7536c2.jpg',
     },{
        nombre:'rayos',
        contenidos:'https://i.pinimg.com/564x/a6/97/cd/a697cd8065e1f05dadaacee56b4ba28c.jpg',
      }, {
        nombre:'loca',
        contenidos:'https://i.pinimg.com/564x/5d/e2/c3/5de2c3aa04e78d32209688ea853f28f4.jpg',
      }
    ];
    this.dataJson = JSON.parse(JSON.stringify(this.data));
  }

  irHome(){
    this.router.navigate(['/home']);
  }

}
