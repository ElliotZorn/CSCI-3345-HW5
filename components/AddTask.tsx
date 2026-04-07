'use client';

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface AddTaskProps {
    addTask: (text: string) => void; // callback to parent
}

export function AddTask({ addTask }: AddTaskProps) {
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = () => {
        if (!inputValue.trim()) return;

        // call parent to add task (handles DB + refresh)
        addTask(inputValue);

        setInputValue(""); // clear input
    };

    return (
        <Field className="flex justify-center mt-8 w-1/2 mx-auto">
            <ButtonGroup>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What do you need to do?"
                />

                <Button
                    className="bg-[#94BDFA] text-[#808080]"
                    variant="outline"
                    onClick={handleAddTask}
                >
                    ADD
                </Button>
            </ButtonGroup>
        </Field>
    );
}