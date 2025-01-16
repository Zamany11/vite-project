import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../assets/data/todos";

export default function useTodos() {
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : dummyData;
      });
    
      useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos])
      
      const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) => {
          return prevTodos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed }
            }
            return todo
          })
        })
      }
    
            function addTodo (title: string) {
              setTodos((prevTodos) => [
                {
                  id: Date.now(), 
                  title,
                  completed: false
                },
                ...prevTodos,
          ]);
            }
    
            function deleteTodo (id: number) {
              setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
            }
    
            function clearCompleted () {
              setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
            }

            return { todos, addTodo, setTodoCompleted, deleteTodo, clearCompleted }
}