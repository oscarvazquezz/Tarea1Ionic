import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout',
  templateUrl: './abaout.page.html',
  styleUrls: ['./abaout.page.scss'],
})
export class AbaoutPage implements OnInit {

  constructor(private router:Router) { }
  data = [];
  dataJson:any;

  ngOnInit() {
    this.guardar();
  }

  guardar(){
    this.data=[
      {
        user :'Silica',
        nombre:'Silica Ayanami',
        foto:'https://i.pinimg.com/564x/cd/f5/2e/cdf52ed12562a12515b07dc5084b7ecf.jpg'
      }, {
        user :'Marie',
        nombre:'Marie Alejandra',
        foto:'https://i.pinimg.com/564x/62/84/8d/62848d45c16dbfdfa7621e3954981b32.jpg'
      }, {
        user :'Mary07',
        nombre:'Mari Illustrious Makinami',
        foto:'https://i.pinimg.com/564x/36/8f/2e/368f2eed03c9cade108a9e219e71aafe.jpg'
      }, {
        user :'Zoe092',
        nombre:'Hanji Zoe',
        foto:'https://i.pinimg.com/564x/b2/69/ea/b269ea1849a791dbeb4560d986611e74.jpg'
      }, {
        user :'homaruFun',
        nombre:'Homura Akemi',
        foto:'https://i.pinimg.com/564x/80/a5/25/80a525b0f94fff8153a9e5b1e8ce0d56.jpg'
      }, {
        user :'bakarina',
        nombre:'Catarina Claes',
        foto:'https://i.pinimg.com/564x/f5/f8/b8/f5f8b802536fb7f0e65a1da370846331.jpg'
      }, {
        user :'lust07',
        nombre:'Gowther',
        foto:'https://i.pinimg.com/564x/4e/88/0a/4e880a4d5406d48cc69762105862b90f.jpg'
      }
    ];
    this.dataJson = JSON.parse(JSON.stringify(this.data));
  }

  irHome(){
    this.router.navigate(['/home']);
  }

}
