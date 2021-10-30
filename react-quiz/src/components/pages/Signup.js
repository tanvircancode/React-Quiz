import classes from '../../styles/Signup.module.css';
import Form from '../Form';
import Illustration from '../Illustration';

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <Form className={`${classes.signup} form`} />
      </div>
    </>
  );
}
