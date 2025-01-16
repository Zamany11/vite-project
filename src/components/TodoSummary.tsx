import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    onClearCompleted: () => void;
}

export default function TodoSummary({
    todos,
    onClearCompleted
}: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed);
    return (
        <div className="flex flex-col justify-center items-center text-gray-400 text-sm font-medium">
            <p>{completedTodos.length} of {todos.length} todos completed</p>
            {completedTodos.length > 0 && (
                <button
                className="text-sm text-gray-400 hover:bg-red-700 hover:text-white border rounded-md p-1 mt-2"
                onClick={onClearCompleted}
            >
                Clear Completed Todos
            </button>
            )}
            
        </div>
    );
}