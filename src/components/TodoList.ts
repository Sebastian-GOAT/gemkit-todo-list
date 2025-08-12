import { Button, Div, H1, H3, Input, List } from 'gemkit/elements';
import { withState, withRef } from 'gemkit/hooks';
import Todo from './Todo.ts';

export type Todo = {
    content: string;
    createdAt: Date;
};

export default function TodoList() {

    const inputRef = withRef<HTMLInputElement>();

    const [todos, setTodos] = withState<Todo[]>('todos', [
        {
            content: 'Do the dishes',
            createdAt: new Date()
        },
        {
            content: 'Walk the dog',
            createdAt: new Date()
        }
    ]);

    function addTodo(content: Todo['content']): void {
        if (content)
            setTodos([{ content, createdAt: new Date() }, ...todos]);
    }

    return Div({
        className: 'py-16 w-full h-screen flex flex-col items-center gap-8',
        children: [
            Div({
                className: 'p-8 w-[500px] border-1 flex flex-col items-center',
                children: [
                    H1({
                        className: 'mb-4 text-2xl font-semibold',
                        children: ['Todo-list']
                    }),
                    todos.length
                        ? List({
                            list: todos,
                            fn: (todo: Todo, i: number) => Todo({
                                todo,
                                i,
                                deleteTodo: () => setTodos(todos.filter((_, index) => index !== i))
                            })
                        })
                        : H3({
                            className: 'font-medium',
                            children: ['No todos yet.']
                        })
                ]
            }),
            Div({
                className: 'flex items-center gap-4',
                children: [
                    Input({
                        type: 'text',
                        placeholder: 'Enter todo...',
                        className: 'p-2 border-1 rounded-lg',
                        ref: inputRef
                    }),
                    Button({
                        className: 'px-2 py-1 bg-green-600 hover:bg-green-300 text-white cursor-pointer rounded-lg transition-colors duration-200',
                        children: ['Add'],
                        onClick: () => addTodo(inputRef.current?.value ?? '')
                    })
                ]
            })
        ]
    });
}