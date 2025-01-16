import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }


  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-700 border border-gray-400 text-white rounded-s-md p-2 grow" 
        placeholder="What needs to be done?" />
        <button 
        className="bg-cyan-600 text-white font-bold rounded-e-md w-16 p-2 hover:bg-cyan-700"
        type="submit"
        >Add Todo</button>
      </form>
    </div>
  )
}