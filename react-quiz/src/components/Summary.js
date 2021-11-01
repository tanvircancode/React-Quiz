import image from '../assets/images/success.png';
import classes from '../styles/Summary.module.css';
export default function Summary() {
  return (
    <div classname={classes.summary}>
      <div classname={classes.point}>
        <p classname={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div classname={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}
