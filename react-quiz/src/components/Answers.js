import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';
export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          text={option.title}
          onChange={(e) => handleChange(e, index)}
          checked={option.checked}
          value={index}
        />
      ))}
    </div>
  );
}
