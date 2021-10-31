import '../styles/App.css';
import Layout from './Layout';
import Signup from './pages/Signup';
// import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Signup />
      {/*<Login />*/}
    </Layout>
  );
}

export default App;
