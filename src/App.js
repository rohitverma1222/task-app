import './App.css';
import Card from './Component/Card';
import Logo from './Component/Logo';
import Error from './Component/Error';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route
          exact path="/"
          element={ <Card status="Please Login to get Started" input1="email" input2="password" LoginMethod={true} btnValue="Login" NewUser={true} OtherLoginOption={true} />}
        />
        {/* The next line is very important for the Navigate component to work */}
        <Route
          path="/forget-password"
          element={ <Card status="Recover password with Email" input1="Email" input2="" LoginMethod={false} btnValue="Email Link" NewUser={false} OtherLoginOption={true} />
          }
        />
        <Route
          path="/password-reset"
          element={<Card status="Create New Password" input1="password" input2="confirm password" LoginMethod={false} btnValue="Confirm Password Reset" NewUser={false} OtherLoginOption={true}/>}
        />
      <Route
          path="/Login"
          element={<Card status="Please Login to get Started" input1="email" input2="password" LoginMethod={true} btnValue="Login" NewUser={true} OtherLoginOption={false} />}
        />
         <Route
         path="*"
          element={<Error/>}
        />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
