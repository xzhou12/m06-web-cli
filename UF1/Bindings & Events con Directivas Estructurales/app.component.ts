import { Component } from '@angular/core';

interface Character {
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
  life: number;
  editable?: boolean;
  isShown?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverCharacters: Character[] = [];
  personaje: string = '';

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"name": "Jugger", "strength": 18, "agility": 12, "intelligence": 6, "life": 30, "editable": false, "isShown": false},
      {"name": "Pelegrin", "strength": 20, "agility": 8, "intelligence": 6, "life": 40, "editable": false, "isShown": false},
      {"name": "Dorthak", "strength": 12, "agility": 18, "intelligence": 10, "life": 16, "editable": false, "isShown": false},
      {"name": "Kharak", "strength": 8, "agility": 20, "intelligence": 12, "life": 14, "editable": false, "isShown": false},
      {"name": "Perz", "strength": 10, "agility": 6, "intelligence": 20, "life": 10, "editable": false, "isShown": false}
    ]`;

    // Parseamos la información y la convertimos directamente en un array de "Character"
    this.serverCharacters = JSON.parse(serverJson);
  }

  // Cambia la variable de editable, pasa a ser editable
  public cambiarEditable(character: Character): void {
    character.editable = !character.editable;

    // Printa el personaje
    this.printarPersonaje(character);
  }

  // Muestra los demás campos del personaje
  public mostrarPersonaje(character: Character): void {
    character.isShown = !character.isShown;

    // Printa el personaje
    this.printarPersonaje(character);
  }

  // Printa el personaje
  public printarPersonaje(character: Character): void {
  
    // Copia el objeto sin referenciarse
    const characterClean = JSON.parse(JSON.stringify(character));
    // Y elimina la variable editable para printar
    delete characterClean.editable;

    // Otra forma de hacerlo
    //const { editable, ...characterClean } = character;

    this.personaje = JSON.stringify(characterClean);
  }

}