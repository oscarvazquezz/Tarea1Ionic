import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout3',
  templateUrl: './abaout3.page.html',
  styleUrls: ['./abaout3.page.scss'],
})
export class Abaout3Page implements OnInit {

  constructor(private router:Router) { }

  data = [];
  dataJson:any;

  ngOnInit() {
    this.guardar();
  }

  guardar(){
    this.data=[
     {
       nombre:'¿que es anime?',
       contenidos:'Es animación de origen japonés que se caracteriza por un grafismo crudo y argumentos que frecuentemente tratan temas fantásticos o futuristas',
     },{
        nombre:'sistema abs en los autos',
        contenidos:'Es un sistema que evita que las ruedas se bloqueen en una frenada de emergencia para así poder controlar el coche y evitar una pérdida de estabilidad y un posible accidente',
      }, {
        nombre:'¿que es nanotecnologia?',
        contenidos:'Es un tecnología que se dedica al diseño y manipulación de la materia a nivel de átomos o moléculas, con fines industriales o médicos, entre otros.',
      }
    ];
    this.dataJson = JSON.parse(JSON.stringify(this.data));
  }

  irHome(){
    this.router.navigate(['/home']);
  }
}
