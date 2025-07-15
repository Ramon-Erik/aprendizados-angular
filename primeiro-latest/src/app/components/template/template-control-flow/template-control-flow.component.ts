import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public mostrarAulas = false;
  public changeCondition() {
    this.mostrarAulas = !this.mostrarAulas;
  }
  public addNewTitle (titulo: string) {
    this.books.push({
      id: 1,
      titulo,
      autor: "Unknown",
      ano: 0,
      descricao: "Unknown",
      categoria: "Unknown"
    })
  }
  public books = [
  {
    id: 1,
    titulo: "Confissões",
    autor: "Santo Agostinho",
    ano: 397,
    descricao: "Autobiografia espiritual que narra a conversão de Agostinho ao Cristianismo.",
    categoria: "Espiritualidade"
  },
  {
    id: 2,
    titulo: "Suma Teológica",
    autor: "São Tomás de Aquino",
    ano: 1274,
    descricao: "Tratado teológico que sintetiza o pensamento católico medieval.",
    categoria: "Teologia"
  },
  {
    id: 3,
    autor: "Santa Teresa de Ávila",
    titulo: "O Castelo Interior",
    ano: 1577,
    descricao: "Obra mística que descreve a jornada da alma em sete moradas.",
    categoria: "Mística"
  },
  {
    id: 4,
    titulo: "Imitação de Cristo",
    autor: "Tomás de Kempis",
    ano: 1418,
    descricao: "Clássico da espiritualidade cristã sobre a vida interior.",
    categoria: "Espiritualidade"
  },
  {
    id: 5,
    titulo: "Introdução à Vida Devota",
    autor: "São Francisco de Sales",
    ano: 1609,
    descricao: "Guia prático para viver a santidade no mundo cotidiano.",
    categoria: "Espiritualidade"
  },
  {
    id: 6,
    titulo: "Diário: Misericórdia Divina em Minha Alma",
    autor: "Santa Faustina Kowalska",
    ano: 1938,
    descricao: "Registro das experiências místicas da santa polonesa.",
    categoria: "Mística"
  },
  {
    id: 7,
    titulo: "Catecismo da Igreja Católica",
    autor: "Igreja Católica",
    ano: 1992,
    descricao: "Compêndio oficial da doutrina católica.",
    categoria: "Doutrina"
  },
  {
    id: 8,
    titulo: "Cartas de um Diabo a seu Aprendiz",
    autor: "C.S. Lewis",
    ano: 1942,
    descricao: "Sátira teológica sobre as tentações humanas.",
    categoria: "Teologia"
  },
  {
    id: 9,
    titulo: "O Grande Divisor",
    autor: "G.K. Chesterton",
    ano: 1925,
    descricao: "Defesa do cristianismo contra filosofias modernas.",
    categoria: "Apologética"
  },
  {
    id: 10,
    titulo: "Deus existe?",
    autor: "Padre Léo",
    ano: 2000,
    descricao: "Respostas às principais dúvidas sobre fé e razão.",
    categoria: "Apologética"
  }
];
  // cria um observable que emite, depois de 1 segundo um array
  public loadingData$: Observable<string[]> = of([
    'Confissões',
    'Ortodoxia',
    'Cartas de um aprendiz ao seu diabo',
  ]).pipe(delay(1000));
}
