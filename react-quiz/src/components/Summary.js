import successImage from '../assets/images/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summary.module.css';
export default function Summary({ score, noq }) {
  const getKeyword = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return 'failed';
    }
  };

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=nature&per_page=1`,
    'GET',
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );
  const image = result ? result?.photos[0].src.medium : successImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}
