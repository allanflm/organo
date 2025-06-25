import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class Livro {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito
  }

  livro = {
    titulo: "O Senhor dos Anéis",
    autoria: "J.R.R. Tolkien",
    favorito: false,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/2/26/Asociedadedoanel.jpg"
  }

}
