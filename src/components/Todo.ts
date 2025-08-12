import { Button, Div, Span } from 'gemkit/elements';
import { type Todo } from './TodoList.ts';
import { withState } from 'gemkit/hooks';

type Props = {
    todo: Todo;
    i: number;
    deleteTodo: (todos: Todo[]) => void;
};

export default function Todo({ todo, i, deleteTodo }: Props) {

    function formatTime(time: Date): string {
        const padZero = (num: number): string => num < 10 ? `0${num}` : num.toString();
        return `${
                padZero(time.getHours())
            }:${
                padZero(time.getMinutes())
            }:${
                padZero(time.getSeconds())
            }`;
    }

    return Div({
        className: `px-4 py-2 w-[350px] flex justify-between ${i !== 0 ? 'border-t-1' : 'border-t-0'}`,
        children: [
            Span({
                className: 'w-1/3 font-medium',
                children: [todo.content]
            }),
            Span({
                children: [formatTime(todo.createdAt)]
            }),
            Button({
                className: 'px-2 py-1 bg-red-600 hover:bg-red-300 text-white cursor-pointer rounded-lg transition-colors duration-200',
                children: ['Delete'],
                onClick: deleteTodo
            })
        ]
    });
}