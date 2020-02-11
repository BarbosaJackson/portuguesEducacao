import { Component } from '@angular/core';
import {QuizModel} from "./vitruvianLib/quiz/quiz.model";
import {QuestionModel} from "./vitruvianLib/question/question.model";
import {QuizService} from "./vitruvianLib/quiz/quiz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portuguesEducacao';
  quizzes: QuizModel[] = [
    new QuizModel(1, [
      new QuestionModel('Assinale a frase que contém uma metonímia:', 'Gosto de ler Machado de Assis',
        ['Gosto de ler Machado de Assis', 'Gosto de ler muito', 'Minha prima falou que gosta de romances']),
      new QuestionModel('Assinale a frase que contém uma metonímia:', 'Completou dez primaveras',
        ['Completou dez primaveras', 'É a festa da sua família?', 'Seu irmão gosta de suco de laranja']),
      new QuestionModel('Assinale a frase que contém uma metonímia:', 'Lavou os cristais e as porcelanas para usá-los no jantar.',
        ['Hoje é dia de lavar o carro', 'Lavou bem a louça', 'Lavou os cristais e as porcelanas para usá-los no jantar.'])
    ], 'Metonímia', 'A metonímia é mais uma figura de linguagem que tem a ver com semelhanças. ' +
      'Ela ocorre quando um único nome é citado para representar um todo referente a ele.'),
    new QuizModel(2, [
        new QuestionModel('Assinale a frase que contém uma Hipérbole:',
          'Fiz uma compra pela internet e a encomenda demorou 300 anos pra chegar.',
          ['Fiz uma compra pela internet e a encomenda demorou 300 anos pra chegar.',
          'Fiz uma compra e ela demorou exageradamente para chegar.', 'Ela usou uma frase muito chamativa.'])
    ], 'Hipérbole', 'Serve para exaltar uma ideia, com o objetivo de causar maior impacto e entusiasmo.'),
  ];
  constructor(private quizService: QuizService) {
    this.quizService.quizzes = this.quizzes;
  }
}
