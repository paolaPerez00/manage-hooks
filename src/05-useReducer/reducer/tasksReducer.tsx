interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completedNumber: number;
    pending: number;
}

export type taskAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOOGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };


export const getTaskInitialReduce = (): TaskState => {

    const localStorageState = localStorage.getItem('task-state');
    if (!localStorageState) {
        return {
            todos: [],
            completedNumber: 0,
            pending: 0,
            length: 0
        }
    }

    return JSON.parse(localStorageState);

}

export const taskReducer = (state: TaskState, action: taskAction): TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            };
        }

        case 'DELETE_TODO':
            {
                const currentTodos = state.todos.filter(todo => todo.id !== action.payload);
                return {
                    ...state,
                    todos: currentTodos,
                    length: currentTodos.length,
                    completedNumber: currentTodos.filter(todo => todo.completed === true).length,
                    pending: currentTodos.filter(todo => todo.completed !== true).length
                };
            }
        case 'TOOGLE_TODO':
            {
                const updateTodos = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo;
                })
                return {
                    ...state,
                    todos: updateTodos,
                    completedNumber: updateTodos.filter(todo => todo.completed === true).length,
                    pending: updateTodos.filter(todo => todo.completed !== true).length
                };
            }

        default:
            return state;
    }
}