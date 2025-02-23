# Task Manager Application

## Project Description:

Develop a JavaScript program that functions as a Task Manager. The application will be able to add, remove, and update the status of tasks. Tasks can also have nested sub-tasks, and the program should support listing and sorting these tasks by status.

## Objectives:

- Use functions to manage tasks: add, remove, and update status.
- Implement recursion to list nested sub-tasks.
- Use loops to iterate over tasks
- Implement algorithms to find and sort tasks

## Requirements:

### 1. Task Data Structure:

- Create a data structure to store tasks, with each task having a unique ID, title, status (e.g., 'pending', 'in progress', 'completed'), and an array of sub-tasks.

```javascript
const tasks = [
  {
    id: 1,
    title: 'Task 1',
    status: 'pending',
    subTasks: [
      {
        id: 2,
        title: 'Sub-task 1.1',
        status: 'in progress',
        subTasks: []
      }
    ]
  },
  {
    id: 3,
    title: 'Task 2',
    status: 'completed',
    subTasks: []
  }
]
```

### 2. Functions:

- Add Task: Write a function to add a new task to the task list.
- Remove Task: Write a function to remove a task from the task list using its ID.
- Update Task Status: Write a function to update the status of a task using its ID.

```javascript
function addTask(/** ur params  */) {
  /** ur code  */
}
function removeTask(/** ur params  */) {
  /** ur code  */
}
function updateTaskStatus(/** ur params \*/) {
  /** ur code \*/
}

// example :

addTask(tasks, { id: 4, title: 'Task 3', status: 'pending', subTasks: [] })
removeTask(tasks, 3)
updateTaskStatus(tasks, 1, 'completed')
```

### 3. Recursion:

- Write a recursive function to list all tasks and their sub-tasks.

```javascript
function listTasks(/** ur params  */) {
  /** ur code  */
}

// example :
listTasks(tasks)
```

### 4. Algorithms:

- Write a function to sort tasks by their status. Consider 'pending', 'in progress', and 'completed' as the order of statuses.

```javascript
function sortTasksByStatus(/** ur params  */) {
  /** ur code  */
}

// example :
sortTasksByStatus(tasks)
listTasks(tasks)
```

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd number_analyzer
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To run the number analyzer, use the following command:

```sh
npm run dev
```
