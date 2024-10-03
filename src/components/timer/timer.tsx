import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

interface PropsTimer {
  expiryTimestamp: Date;
}

export function MyTimer({ expiryTimestamp }: PropsTimer) {

  const navigate = useNavigate();

  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => navigate('/results') });

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{minutes.toString().length < 2 ? `0${minutes}` : minutes}</span>:
        <span>{seconds.toString().length < 2 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}
