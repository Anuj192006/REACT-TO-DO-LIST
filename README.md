this how my code functions for each operation user performs

Add Task:
  ├── User clicks "Add" button.
  ├── add() function is called.
  │   ├── Check if input is not empty.
  │   ├── If not empty:
  │   │   ├── Add new to-do to state.
  │   │   └── Clear input field.
  └── Component re-renders with the new to-do.

Toggle Completion:
  ├── User clicks checkbox icon.
  ├── toggleComplete() function is called.
  │   ├── Create a copy of todos list.
  │   ├── Toggle completion state.
  │   └── Update state with new todos list.
  └── Component re-renders with the updated completion state.

Delete Task:
  ├── User clicks delete icon.
  ├── deleteTodo() function is called.
  │   ├── Remove to-do from todos using filter().
  │   └── Update state with the filtered todos list.
  └── Component re-renders with the remaining to-dos.
