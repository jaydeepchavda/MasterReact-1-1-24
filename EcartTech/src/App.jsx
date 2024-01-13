import Counter from "./counter";
import Card from "./component/Card";
import SecondCard from "./SecondCard";
import "./App.css";
import LoginTailwind from "./component-tailwind-login/login-tailwind";

function App() {
  return (
    <>
    {/* <h1> First Project in React </h1> */}
    {/* <Counter /> */}

    <h2 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS Learn</h2><br />  
    
    {/* <LoginTailwind /> */}

    {/* <Card /> */}

    <SecondCard username="jaydipWebDev" btnText="click Me"/>
    </>
  );
}

export default App;
