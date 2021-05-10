import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { CountryService } from 'src/app/services/country.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  imgCarta = "https://image.tmdb.org/t/p/w500";
  imgBack = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvbxyu7NqpD1XDZ1YI3QZfivw67KPtMAd0oBGMR_mKmxp_VW8uA4LeMiRxMY&s";

  ///MENSAJE
  public mensaje: string = null;
  colorMensaje: string = '#000000';

  ///Dentro del juego
  private dadasVueltas: number = 0;
  animando: boolean = false;
  aRevisar = [];
  inicio: boolean = false;
  dificultad: string = null;
  termino: boolean = false;

  ///Obtener fotos
  contador = 0;
  infoPeliculas: any;
  cartas = [];

  btnEmpezar = "Empezar";

  //prueba
  segundos = 0;
  minutos = 0;
  intervalo = null;
  tiempo = "";

  ///MODAL
  juegoterminado = true;

  //Score
  score: Score = new Score();

  constructor(
    private countryService: CountryService,
    private scoreService: ScoreService
  ) { }

  ngOnInit(): void {
    //set values of the new score
    this.score.user = localStorage.getItem('email');
    this.score.game = 'memotest';

    //Get information about countryies: I need the picture of flag
    this.countryService.getAll().subscribe(data => {
      this.infoPeliculas = data;
    });
  }

  seleccionaDificultad(dificultad: string = null) {
    this.btnEmpezar = "Empezar";
    this.mensaje = '';
    this.dificultad = dificultad;
    this.cartas = [];
    switch (dificultad) {
      case 'medio':
        this.cartas.push(
          { id: 6, path: this.infoPeliculas[5].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 6, path: this.infoPeliculas[5].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 5, path: this.infoPeliculas[4].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 5, path: this.infoPeliculas[4].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false }
        );
      case 'facil':
        this.cartas.push(
          { id: 4, path: this.infoPeliculas[3].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 4, path: this.infoPeliculas[3].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 3, path: this.infoPeliculas[2].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 3, path: this.infoPeliculas[2].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 2, path: this.infoPeliculas[1].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 2, path: this.infoPeliculas[1].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 1, path: this.infoPeliculas[0].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
          { id: 1, path: this.infoPeliculas[0].flag, atras: this.imgBack, mostrar: false, clase: 'carta', animado: false, correcta: false, volteada: false },
        );
        break;
      default:
        this.cartas = []
        break;
    }
    this.cartas = this.mezclar(this.cartas);

  }

  revisar() {
    if (this.cartas[this.aRevisar[0]].id == this.cartas[this.aRevisar[1]].id) {
      this.cartas[this.aRevisar[0]].correcta = true;
      this.cartas[this.aRevisar[1]].correcta = true;
    } else {
      this.cartas[this.aRevisar[0]].volteada = false;
      this.cartas[this.aRevisar[1]].volteada = false;
      this.animar(this.aRevisar[0]);
      this.animar(this.aRevisar[1]);
    }
    let gano = true;
    for (let i = 0; i < this.cartas.length; i++) {
      if (!this.cartas[i].correcta) {
        gano = false;
        break;
      }
    }
    this.dadasVueltas = 0;
    this.aRevisar = [];
    if (gano) {
      this.victoria();
      this.score.score += 15;
      this.score.wons++;
      this.scoreService.add(this.score , 'scores-memotest');
    }
  }

  victoria() {
    this.mensaje = "Ganaste!! Tu tiempo: " + this.tiempo;
    this.colorMensaje = "#FFF";
    this.inicio = false;
    this.btnEmpezar = "Reiniciar";
    //SCORE
    //this.agregarTiempo();

    this.resetTimer();
  }


  async voltear(index) {
    if (this.dadasVueltas < 2 && !this.animando) {
      if (!this.cartas[index].volteada) {


        this.aRevisar.push(index);
        this.animar(index);
        setTimeout(() => { this.animando = false }, 1000)
        this.cartas[index].volteada = true;
        this.dadasVueltas++;
        if (this.dadasVueltas == 2) {
          setTimeout(() => {
            this.revisar();
          }, 1000);
        }
      }
    }
  }


  animar(index) {
    if (this.inicio && !this.cartas[index].animado) {
      this.cartas[index].clase = "carta-animada";
      this.cartas[index].animado = true;
      setTimeout(() => {
        this.cartas[index].mostrar = !this.cartas[index].mostrar;
      }, 400);
      setTimeout(() => {
        this.cartas[index].clase = "carta";
        this.cartas[index].animado = false;
      }, 1000);
    }
  }


  empezarJuego() {
    this.mensaje = null;
    this.inicio = true;
    this.reiniciarImagenes();
    this.empezarTimer();
  }

  reiniciarImagenes() {
    for (let i = 0; i < this.cartas.length; i++) {
      this.cartas[i].mostrar = false;
      this.cartas[i].animado = false;
      this.cartas[i].correcta = false;
      this.cartas[i].volteada = false;
      //this.animar(i);
    }
  }

  empezarTimer() {
    this.intervalo = setInterval(() => {
      this.segundos++;
      this.tiempo = "0" + this.minutos + ":" + this.segundos
      if (this.segundos === 60) {
        this.minutos++;
        this.segundos = 0;
      }
    }, 1000)
  }

  resetTimer() {
    this.minutos = 0;
    this.segundos = 0;
    clearInterval(this.intervalo);
  }

  mostrarOcultarCartas() {
    for (let i = 0; i < this.cartas.length; i++) {
      this.animar(i);
    }
  }

  cambiarDificultad() {
    this.dificultad = null;
    this.inicio = false;
  }


  mezclar(cartas: Array<any>) {
    let b: Array<string> = [];
    cartas.forEach((elem) => {
      b.push(elem);
    });
    let j;
    let x;
    let i;
    for (i = b.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = b[i];
      b[i] = b[j];
      b[j] = x;
    }
    return b;
  }
}