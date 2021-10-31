import classes from '../styles/Signup.module.css';

export default function Form({ className, children, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}
