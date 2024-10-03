import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import desktop from '@assets/desktop.svg';
import StyledButton from '@components/ui-components/button/button.tsx';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 50px;
`;

const StartTest = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <img style={{ width: '30%' }} src={desktop} alt={'изображение ноутбука'} />
      <h1 style={{ fontSize: '35px', marginBottom: '0' }}>Приветствуем тебя в IT-фронтенд тесте! </h1>
      <p style={{ fontSize: '20px' }}>Твоя цель — не просто пройти тест, а проверить свои знания в программировании.
        <br />
        Мы собрали вопросы, которые помогут тебе понять, насколько ты крут(а) в мире
        фронтенда, от CSS до JavaScript, от багов до верстки — здесь всё, что ты
        любишь и ненавидишь!</p>
      <StyledButton text={'Начать тест'} handleClick={() => navigate('/question')} />
    </Container>
  );
};

export default StartTest;
