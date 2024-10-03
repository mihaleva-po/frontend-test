import { Button } from 'antd';

interface PropsBtn {
  text: string,
  handleClick: () => void
}

const StyledButton = ({ text, handleClick }: PropsBtn) => {
  return (
    <div>
      <Button style={{ width: '200px', height: '50px' }} color='default' variant='solid' onClick={handleClick}>
        {text}
      </Button>
    </div>
  );
};

export default StyledButton;
