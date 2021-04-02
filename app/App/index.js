import React from 'react';

import styles from './styles.css';

import useTodos from './useTodos';
import useTodoFilter from './useTodoFilter';

import TodoFilters from './TodoFilters';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default () => {
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();
  const { todoFilter, setTodoFilter } = useTodoFilter();

  return (
    <div className={styles['todo-app']}>
      <h1>A Todo App in React & Hooks</h1>
      <div className={styles.todos}>
        <TodoInput addTodo={addTodo} />
        <TodoFilters
          todoFilter={todoFilter}
          setTodoFilter={setTodoFilter}
        />
        <TodoList
          todos={todos}
          todoFilter={todoFilter}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};
