import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {
  const percentage = 66;
  return (
    <>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </>
  )
}

export default ProgressBar;
