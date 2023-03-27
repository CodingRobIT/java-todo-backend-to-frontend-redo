import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import {Todo} from "./Todo";
import axios from "axios";
import TodoGallery from "./TodoGallery";


function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadAllTodos()
    },[])

    function loadAllTodos() {
        axios.get("/api/todo")
            .then((getAllTodosResponse) => {setTodos(getAllTodosResponse.data)})
            .catch((error) => {console.error(error)})
    }




  return (
    <div className="App">
      <Header/>
        <TodoGallery todos={todos}/>


    </div>
  );
}

export default App;
