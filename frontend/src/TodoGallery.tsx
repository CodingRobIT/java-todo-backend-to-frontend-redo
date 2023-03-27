import {Todo} from "./Todo";
import TodoCard from "./TodoCard";
import './TodoGallery.css'


type Props = {
    todos: Todo[]
}
export default function TodoGallery(props: Props) {

    const openTodos: Todo[] = props.todos.filter((todo) => todo.status === "OPEN")
    const inProgressTodos: Todo[] = props.todos.filter((todo) => todo.status === "IN_PROGRESS")
    const doneTodos: Todo[] = props.todos.filter((todo) => todo.status === "DONE")

    return (
        <div className='todo-gallery'>
            <div className='todo-gallery-column'>
                <h2>Todo</h2>
                {
                    openTodos.map((todo) => <TodoCard key={todo.id} todo={todo}/>)
                }
            </div>
            <div className='todo-gallery-column'>
                <h2>Doing</h2>
                {
                    inProgressTodos.map((todo) => <TodoCard key={todo.id}
                                                            todo={todo}/>)
                }
            </div>
            <div className='todo-gallery-column'>
                <h2>Done...NEVER!!!</h2>
                {
                    doneTodos.map((todo) => <TodoCard key={todo.id}
                                                      todo={todo}/>)
                }
            </div>
        </div>

    )


}