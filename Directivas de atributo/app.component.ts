import { Component } from '@angular/core';

interface DiasFestivos {
  tipo: string;
  color: string;
}

interface Dia {
  numero?: number;
  clase?: string[];
}

interface DiasMes {
  nombre: string;
  dias: Dia[][];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  festividades: DiasFestivos[] = [
    { tipo: 'Festiu Nacional', color: 'lightgreen' },
    { tipo: 'Festiu Regional', color: '#9146FF' },
    { tipo: 'Festiu Local', color: 'deeppink' },
    { tipo: 'Festiu Centre', color: 'yellowgreen' }
  ];

  meses: DiasMes[] = [
    {
      nombre: 'Septiembre',
      dias: [
        [{}, {}, {}, { numero: 1 }, { numero: 2 }, { numero: 3 }, { numero: 4 }],
        [{ numero: 5 }, { numero: 6 }, { numero: 7 }, { numero: 8 }, { numero: 9 }, { numero: 10, clase: ['dia-regional', 'color-circle'] }, {numero: 11}],
        [{ numero: 12 }, { numero: 13 }, { numero: 14 }, { numero: 15 }, { numero: 16 }, { numero: 17 }, { numero: 18 }],
        [{ numero: 19 }, { numero: 20 }, { numero: 21 }, { numero: 22 }, { numero: 23 }, { numero: 24 }, { numero: 25 }],
        [{ numero: 26 }, { numero: 27 }, { numero: 28 }, { numero: 29, clase: ['dia-local', 'color-circle'] }, { numero: 30 }]
      ]
    },
    {
      nombre: 'Octubre',
      dias: [
        [{}, {}, {}, {}, {}, { numero: 1 }, { numero: 2 }],
        [{ numero: 3 }, { numero: 4 }, { numero: 5 }, { numero: 6 }, { numero: 7 }, { numero: 8 }, { numero: 9 }],
        [{ numero: 10 }, { numero: 11 }, { numero: 12, clase: ['dia-nacional', 'color-circle'] }, { numero: 13 }, { numero: 14 }, { numero: 15 }, { numero: 16 }],
        [{ numero: 17 }, { numero: 18 }, { numero: 19 }, { numero: 20 }, { numero: 21 }, { numero: 22 }, { numero: 23 }],
        [{ numero: 24 }, { numero: 25 }, { numero: 26 }, { numero: 27 }, { numero: 28 }, { numero: 29 }, { numero: 30 }],
        [{ numero: 31, clase: ['dia-centre', 'color-circle'] }]
      ]
    }
  ];

}
