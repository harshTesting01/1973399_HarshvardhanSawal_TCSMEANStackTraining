import { Component, OnInit, Output } from '@angular/core';
import { QuizQuestion } from '../QuizQuestions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  //@Output()
  // question: QuizQuestion;

  selectedAnswer?: string;
  totalQuestions?: number;
  correctAnswersCount = 0;

  // constructor() {
  //   this.question = this.getQuestion;
  //  }

  ngOnInit(): void {
  this.totalQuestions = this.allQuestions.length;
  }

  answeredValues = [
    {questionId: 1, selectedValue: '', isCorrect: false},
    {questionId: 2, selectedValue: '', isCorrect: false},
    {questionId: 3, selectedValue: '', isCorrect: false},
    {questionId: 4, selectedValue: '', isCorrect: false},
    // {questionId: 5, selectedValue: ""},
    // {questionId: 6, selectedValue: ""},
    // {questionId: 7, selectedValue: ""},
    // {questionId: 8, selectedValue: ""},
    // {questionId: 9, selectedValue: ""},
    // {questionId: 10, selectedValue: ""},
  ];

  allQuestions: QuizQuestion[] = [
    {
      questionId: 1,
      questionText: 'What is the objective of dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Pass the service to the client.' },
        { optionValue: '2', optionText: 'Allow the client to find service.' },
        { optionValue: '3', optionText: 'Allow the client to build service.' },
        { optionValue: '4', optionText: 'Give the client part service.' }
      ],
      answer: '1',
      explanation: 'a service gets passed to the client during DI',
      selectedOption: ''
    },
    {
      questionId: 2,
      questionText: 'Which of the following benefit from dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Programming' },
        { optionValue: '2', optionText: 'Testability' },
        { optionValue: '3', optionText: 'Software design' },
        { optionValue: '4', optionText: 'All of the above.' },
      ],
      answer: '4',
      explanation: 'DI simplifies both programming and testing as well as being a popular design pattern',
      selectedOption: ''
    },
    {
      questionId: 3,
      questionText: 'Which of the following is the first step in setting up dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Require in the component.' },
        { optionValue: '2', optionText: 'Provide in the module.' },
        { optionValue: '3', optionText: 'Mark dependency as @Injectable().' },
        { optionValue: '4', optionText: 'Declare an object.' }
      ],
      answer: '3',
      explanation: 'the first step is marking the class as @Injectable()',
      selectedOption: ''
    },
    {
      questionId: 4,
      questionText: 'In which of the following does dependency injection occur?',
      options: [
        { optionValue: '1', optionText: '@Injectable()' },
        { optionValue: '2', optionText: 'constructor' },
        { optionValue: '3', optionText: 'function' },
        { optionValue: '4', optionText: 'NgModule' },
      ],
      answer: '2',
      explanation: 'object instantiations are taken care of by the constructor in Angular',
      selectedOption: ''
    }
  ];

  onSubmit(){
    this.correctAnswersCount = 0;
    console.log("Reached here!");
    // var obj = this.allQuestions;
    // var objString = JSON.stringify(obj);
    // var objJson = JSON.parse(objString);
    //var i = 0;
    for(var i = 0; i<this.allQuestions.length;i++){
      if(this.allQuestions[i].answer == this.answeredValues[i].selectedValue){
        this.correctAnswersCount++;
        this.answeredValues[i].isCorrect = true;
      }
    }
    console.log(this.correctAnswersCount);
  }

  getSelectedItem(){

  }
  onItemChange(question: any, option: any){
    //this.getSelectedItem();
    
    this.answeredValues.forEach(element => {
      if(element.questionId == question){
        element.selectedValue = option;
        console.log(element);
      }
    });
    //console.log(question, option);
  }

  // getBackgroundColor(questionId: any){
  //   if(this.)
  // }

}
