import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Components/LoginPage/LoginPage"
import RegisterPage from "./Components/RegisterPage/RegisterPage"
import HabitsPage from "./Components/Habits/HabitsPage"
import TodayPage from "./Components/Today/TodayPage"
import HistoricPage from "./Components/Historic/HistoricPage"
import { useState } from "react"

function App() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/cadastro" element={<RegisterPage email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>} />
      <Route path="/habitos" element={<HabitsPage image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>}/>
      <Route path="/hoje" element={<TodayPage image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>}/> 
      <Route path="/historico" element={<HistoricPage image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>}/>
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
