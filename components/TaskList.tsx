import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Task } from "@/components/Task"
import type { TaskProps } from "@/components/Task"
import { ListX } from "lucide-react"

interface TaskListProps {
    tasks: TaskProps[]
    toggleTask: (id: number) => void
    deleteTask: (id: number) => void
    clearCompleted: () => void
}

export function TaskList({ tasks, toggleTask, deleteTask, clearCompleted }: TaskListProps) {
    return (
        <div className="flex justify-center mt-10 w-3/4 mx-auto">
            <Card className="w-full flex bg-[#FFF3E7]">
                <CardContent>
                    <div className="flex flex-col gap-6">
                        {tasks.length === 0 ? (
                            <p className="text-center text-gray-500">No tasks yet. Add a task to get started!</p>
                        ) : null}
                        {tasks.map(task => (
                            <div key={task.id} className="flex items-center gap-2">
                                <Task
                                    id={task.id}
                                    text={task.text}
                                    checked={task.checked}
                                    onToggle={() => toggleTask(task.id)}
                                    onDelete={() => deleteTask(task.id)}
                                />
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button
                        variant="outline"
                        className="bg-transparent text-[#D67447] hover:bg-[#D67447]/10 focus-visible:ring-[#D67447]/50 border-none shadow-none outline-none"
                        onClick={clearCompleted}
                    >
                        <ListX className="mr-2" />
                        Clear Completed
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}