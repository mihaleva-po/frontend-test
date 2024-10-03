import { cast, t } from 'mobx-state-tree';
import { QuestionModel } from './QuestionModel.ts';


const QuestionStore = t
  .model('QuestionStore', {
    questions: t.array(QuestionModel),
    currentQuestion: t.number,
    result: t.number,
    answerUser: (t.array(t.string)),

    currentValueIndicator: t.number,
  })

  .actions((self) => ({
    goNextQuestion() {
      self.currentQuestion += 1;
      self.currentValueIndicator = self.currentQuestion / self.questions.length * 100;
      localStorage.setItem('currentQuestionIndex', self.currentQuestion.toString());
    },

    setCurrentQuestion(number: number) {
      self.currentQuestion = number;
    },

    skipCurrentQuestion() {
      self.currentQuestion = 0;
      self.result = 0;
      localStorage.removeItem('currentQuestionIndex');
      localStorage.removeItem('result');
    },

    setProgressIndicator(number: number) {
      self.currentValueIndicator = number;
    },

    setResult(number: number) {
      self.result = number;
      localStorage.setItem('result', self.result.toString());
    },

    setAnswerUser(answer?: string[]) {
      if (answer) {
        self.answerUser = cast(answer);
      }
    },

    clearAnswerUser() {
      self.answerUser = cast([]);
      self.currentValueIndicator = 0;
      localStorage.removeItem('result');
    },
  }));


export const questionStore = QuestionStore.create({
  questions: [
    {
      id: 1,
      type: 'radio',
      question: 'Какой атрибут нужно использовать, чтобы сделать кнопку неактивной?',
      answers: ['disabled="true"', 'readonly="true"', 'inactive="true"', 'hidden="true"'],
      correctAnswer: ['disabled="true"'],
    },
    {
      id: 2,
      type: 'checkbox',
      question: 'Какие JavaScript методы можно использовать для обхода массива?',
      answers: ['forEach', 'map', 'filter', 'reduce'],
      correctAnswer: ['forEach', 'map', 'filter', 'reduce'],
    },
    {
      id: 3,
      type: 'input',
      question: 'Как называется концепция в JavaScript, когда внутренняя функция имеет ' +
        'доступ к переменным внешней функции, даже после завершения выполнения этой ' +
        'внешней функции?',
      correctAnswer: ['замыкание'],
    },
    {
      id: 4,
      type: 'area',
      question: 'Объясни, что происходит, когда ты делаешь запрос к серверу и получаешь ответ 404.',
    },
  ],
  currentQuestion: 0,
  result: 0,
  answerUser: [],
  currentValueIndicator: 0,
});
