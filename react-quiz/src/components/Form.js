import classes from '../styles/Form.module.css';
export default function Form({ children }) {
  return (
    <form className="signup form" action="#">
      {children}
    </form>
  );
}
