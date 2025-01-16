import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const{todos, addTodo, setTodoCompleted, deleteTodo, clearCompleted} = useTodos()

  return (
    <main className="h-screen py-10 bg-black space-y-5 overflow-y-auto">
      <h1 
      className="text-center text-3xl text-white font-bold" 
      >Your Todo</h1>
      <div className="max-w-lg mx-auto md:border border-x-cyan-950 rounded-md p-5 space-y-6">
      <AddTodoForm onSubmit={addTodo}/>
        <TodoList 
        todos={todos} 
        onCompletedChange={setTodoCompleted}
        onDelete={deleteTodo}
        />
      </div>
      <TodoSummary 
      todos={todos}
      onClearCompleted={clearCompleted}
      />
    </main>
  )
}


export default App
