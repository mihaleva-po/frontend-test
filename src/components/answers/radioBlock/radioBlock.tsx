import { Radio, RadioChangeEvent } from 'antd';
import { questionStore } from '../../../models/QuestionStore.ts';

interface RadioBlockProps {
  answers?: string[],
}


const RadioBlock = ({ answers }: RadioBlockProps) => {

  const onChange = (e: RadioChangeEvent) => {
    questionStore.setAnswerUser([e.target.value]);
  };

  return (
    <Radio.Group onChange={onChange} style={{ display: 'flex', gap: '20px' }}>
      {
        answers &&
        new Array(answers.length).fill(0).map((_, i) => (
          <Radio style={{ fontSize: '20px' }}
                 value={answers[i]} key={i}>{answers[i]}</Radio>))
      }
    </Radio.Group>
  );
};

export default RadioBlock;
