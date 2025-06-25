import { Component } from '@angular/core';
import { Cabecalho } from "./components/cabecalho/cabecalho";
import { Rodape } from "./components/rodape/rodape";
import { Livro } from "./components/livro/livro";

@Component({
  selector: 'app-root',
  imports: [Cabecalho,
    Livro,
    Rodape,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'organo';
}
