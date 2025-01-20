import { useEffect, useState } from "react";
import { v4 } from "uuid";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });

        setTasks(newTasks);
    }

    function deleteTask(taskId) {
        const newTasks = tasks.filter((task) => {
            return task.id != taskId;
        });
        setTasks(newTasks);
    }

    function onAddTaskSubmit(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <Title>Gerenciador de Tarefas</Title>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
                <Tasks
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
};

export default App;
