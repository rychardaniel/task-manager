import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tasks = ({ tasks, onTaskClick, deleteTask }) => {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);

        navigate(`/task?${query.toString()}`);
    }
    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button
                            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
                                task.isCompleted && "line-through"
                            }`}
                            onClick={() => onTaskClick(task.id)}
                        >
                            {task.title}
                        </button>
                        <button
                            className="bg-slate-400 rounded-md text-white p-2"
                            onClick={() => onSeeDetailsClick(task)}
                        >
                            <ChevronRightIcon />
                        </button>
                        <button
                            className="bg-slate-400 rounded-md text-white p-2"
                            onClick={() => deleteTask(task.id)}
                        >
                            <Trash2 />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
