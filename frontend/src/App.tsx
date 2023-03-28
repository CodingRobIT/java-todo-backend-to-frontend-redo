import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import TodoGallery from "./TodoGallery";
import useTodos from "./useTodos";


function App() {

 const {todos, loadAllTodos} = useTodos()

  return (
    <div className="App">
      <Header/>
        <TodoGallery todos={todos}/>
    </div>
  );
}


export default App;
