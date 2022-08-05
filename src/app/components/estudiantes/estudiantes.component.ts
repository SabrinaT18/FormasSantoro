import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
    variableNota= 7  ;
    hoy = Date.now();
    
    alumnos = [
    {nombre: 'Juan'  ,
    apellido: 'Perez'  ,
    email: 'juan@mail.com',
    fechaNacimiento:'25/12/1991' ,
    nota: 9,
    },
    {nombre: 'Candela'  ,
    apellido: 'Benitez'  ,
    email: 'candela@mail.com',
    fechaNacimiento:'05/09/1988' ,
    nota: 10,
    },
    {nombre: 'Marcos'  ,
    apellido: 'García'  ,
    email: 'marcos@mail.com',
    fechaNacimiento:'12/02/1983' ,
    nota: 4,
    },
    {nombre: 'Alejo'  ,
    apellido: 'Nuñez'  ,
    email: 'alejo@mail.com',
    fechaNacimiento:'18/05/1984' ,
    nota: 6,
    },
    {nombre: 'Guadalupe'  ,
    apellido: 'Suarez'  ,
    email: 'guadalupe@mail.com',
    fechaNacimiento:'21/08/1994' ,
    nota: 2,
    },
    {nombre: 'Victoria'  ,
    apellido: 'Lopez'  ,
    email: 'victoria@mail.com',
    fechaNacimiento:'16/04/1985' ,
    nota: 8,
    },
    
    ]
    
    
      constructor() { }
    
      ngOnInit(): void {
      }
      
      cambiarNota(){
        this.variableNota = Math.round (Math.random()*10)
      }
    
    }


