import { Fragment } from 'react';
import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers({ input, options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className={classes.answer}
              text={option.title}
              onChange={(e) => handleChange(e, index)}
              checked={option.checked}
              value={index}
            />
          ) : (
            <Checkbox
              key={index}
              className={` ${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
