import { questionStore } from '../../models/QuestionStore.ts';
import { Container } from '@components/startTest/startTest.tsx';
import user from '@assets/user.svg';

import { useNavigate } from 'react-router-dom';
import StyledButton from '@components/ui-components/button/button.tsx';
import { observer } from 'mobx-react-lite';


const ResultsPage = observer(() => {

  const handleClickBtn = () => {
    questionStore.skipCurrentQuestion();
    navigate('/');
  };

  const navigate = useNavigate();

  const result = questionStore.result;

  let textResult: string;

  switch (result) {
    case (7):
      textResult = ` Гуру фронтенда! Ты знаешь все мелочи, и
       твои проекты идеально сверстаны и оптимизированы.`;
      break;

    case (5 | 6):
      textResult = ` Опытный разработчик. Ты хорошо разбираешься во фронтенде, 
      но иногда можно углубиться в детали.`;
      break;

    case (3 | 4):
      textResult = ` Начинающий фронтендер. Ты уже знаешь основы, но впереди еще много интересных открытий.`;
      break;
    default:
      textResult = ` Нужно подтянуть знания! Ничего страшного, каждый разработчик начинал с этого этапа. 
      Главное — не останавливаться!`;
      break;
  }

  return (
    <Container>
      <h3 style={{ fontSize: '35px', marginBottom: '0' }}>Подсчёт результатов</h3>
      <p style={{ fontSize: '20px' }}><span style={{ fontSize: '30px', fontWeight: 'bolder' }}>
        {`Баллы: ${result}`}</span>
        <br />
        {textResult}</p>
      <img style={{ width: '35%' }} src={user} alt='изображение человека за ноутбуком' />
      <StyledButton text={'Вернуться к тесту'} handleClick={handleClickBtn} />
    </Container>
  );
});

export default ResultsPage;
