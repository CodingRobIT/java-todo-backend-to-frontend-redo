import {useEffect, useState} from "react";
import {Todo} from "./Todo";
import axios from "axios";



export default function useTodos() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadAllTodos()
    },[])

    function loadAllTodos() {
        axios.get("/api/todo")
            .then((getAllTodosResponse) => {setTodos(getAllTodosResponse.data)})
            .catch((error) => {console.error(error)})
    }

    return {todos, loadAllTodos}

}