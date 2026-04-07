import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Trash2, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface TaskProps {
    id: number
    text: string
    checked: boolean
    onToggle: () => void
    onDelete: () => void
}

export function Task({ id, text, checked, onToggle, onDelete }: TaskProps) {

    return (
        <FieldGroup className="mx-auto w-3/4 border-b-2 border-[#94BDFA] w-full pl-4">
            <Field orientation="horizontal" className="">
                <Checkbox
                    id={`task-checkbox-${id}`}
                    name={`task-checkbox-${id}`}
                    className="rounded-full border-2 border-primary text-[#D67447] data-[state=checked]:bg-[#D67447] data-[state=checked]:border-[#D67447] focus-visible:ring-[#D67447]/50"
                    onCheckedChange={onToggle}
                />
                <FieldLabel htmlFor={`task-checkbox-${id}`} className={`text-lg ${checked ? "line-through text-gray-500" : ""}`}>
                    {text}
                </FieldLabel>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onDelete}
                >
                    <Trash2 className="size-4 text-[#D67447]" />
                </Button>
            </Field>
        </FieldGroup>
    )
}