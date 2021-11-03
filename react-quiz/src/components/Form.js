
export default function Form({ className, children, ...rest }) {
  return (
    <form className={`${className} `} action="#" {...rest}>
      {children}
    </form>
  );
}
