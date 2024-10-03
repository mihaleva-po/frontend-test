import { observer } from 'mobx-react-lite';
import { questionStore } from '../../models/QuestionStore.ts';
import styled from 'styled-components';
import RadioBlock from '@components/answers/radioBlock/radioBlock.tsx';
import React, { useEffect } from 'react';
import CheckBoxBlock from '@components/answers/checkBox/checkBoxBlock.tsx';
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Container } from '@components/startTest/startTest.tsx';
import { useNavigate } from 'react-router-dom';
import {
  ProgressIndication,
} from '@components/progressIndicator/progressIndicator.tsx';
import { MyTimer } from '@components/timer/timer.tsx';
import StyledButton from '@components/ui-components/button/button.tsx';


const Question = styled.p`
  font-weight: bold;
  font-size: 30px;
  font-family: "Times New Roman", sans-serif;
`;

const QuestionPage = observer(() => { // Используем observer
  const currentQuestionIndex = questionStore.currentQuestion; // Указываем индекс текущего вопроса
  const currentQuestion = questionStore.questions[currentQuestionIndex]; // Получаем текущий вопрос

  const navigate = useNavigate();

  useEffect(() => {
    const savedQuestionIndex = localStorage.getItem('currentQuestionIndex');
    const savedResult = localStorage.getItem('result');

    if (savedQuestionIndex) {
      questionStore.setCurrentQuestion(Number(savedQuestionIndex));
      questionStore.setProgressIndicator(questionStore.currentQuestion / questionStore.questions.length * 100);
    }
    if (savedResult) {
      questionStore.setResult(Number(savedResult));
    }
  }, []);

  const handleClick = () => {
    const answerUser = questionStore.answerUser;
    const correctAnswer = currentQuestion.correctAnswer;
    let count = 0;

    if (correctAnswer) {
      for (const answer of correctAnswer) {
        for (let i = 0; i < answerUser.length; i++) {
          if (answer === answerUser[i]) {
            count++;
          }
        }
      }
    }

    questionStore.clearAnswerUser();
    questionStore.setResult(questionStore.result + count);

    if (currentQuestionIndex === questionStore.questions.length - 1) {
      navigate('/results');
    } else {
      questionStore.goNextQuestion();
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    questionStore.setAnswerUser([e.target.value]);
  };

  const onChangeArea = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    questionStore.setAnswerUser([e.target.value]);
  };

  let Answers: React.ReactNode;

  switch (currentQuestion.type) {
    case ('radio'):
      Answers = <RadioBlock answers={currentQuestion.answers} />;
      break;

    case ('checkbox'):
      Answers = <CheckBoxBlock answers={currentQuestion.answers} />;
      break;

    case ('input'):
      Answers = <Input style={{ width: '300px', height: '50px' }} onChange={onChangeInput} placeholder='Bаш ответ' />;
      break;

    case ('area'):
      Answers =
        <TextArea style={{ width: '400px', height: '150px' }} onChange={onChangeArea} rows={6} placeholder='Ваш ответ'
                  maxLength={100} />;
      break;
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 100);

  return (
    <Container>
      <ProgressIndication percent={questionStore.currentValueIndicator} />
      <MyTimer expiryTimestamp={time} />
      {
        currentQuestion && <>
          <Question>{currentQuestion.question}</Question>
          <section style={{ marginBottom: '40px' }}>{Answers}</section>
          <StyledButton text={'Ответить'} handleClick={handleClick} />
        </>
      }
    </Container>
  );
});

export default QuestionPage;
