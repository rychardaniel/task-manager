import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "estudar",
            description: "estudar para a prova",
            isCompleted: false,
        },
        {
            id: 2,
            title: "ler",
            description: "ler um livro",
            isCompleted: false,
        },
        {
            id: 3,
            title: "correr",
            description: "correr na praça",
            isCompleted: false,
        },
    ]);

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
            id: tasks.length + 1,
            title,
            description,
            isCompleted: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1
                    className="text-3xl text-slate-100 font-bold text-center"
                    onDoubleClick={() => (location.href = location.href)}
                >
                    Gerenciador de Tarefas
                </h1>
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
