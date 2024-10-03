import { Checkbox, GetProp } from 'antd';
import { questionStore } from '../../../models/QuestionStore.ts';

interface PropsCheckbox {
  answers?: string[];
}

const CheckBoxBlock = ({ answers }: PropsCheckbox) => {

  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    questionStore.setAnswerUser(checkedValues as string[]);
  };

  return (
    <Checkbox.Group onChange={onChange} style={{ display: 'flex', gap: '30px' }}>
      {
        answers &&
        new Array(answers.length).fill(0).map((_, i) => (
          <Checkbox style={{ fontSize: '20px' }} key={i}
                    value={answers[i]}>{answers[i]}</Checkbox>))
      }
    </Checkbox.Group>
  );
};

export default CheckBoxBlock;
