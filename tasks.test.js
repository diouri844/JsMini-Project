const { addTask, removeTask, updateTaskStatus, listTasks, sortTasksByStatus } = require('./tasks');
const existingTasks = require('./data/tasks');

describe('Task Management Functions', () => {
    let tasks;

    beforeEach(() => {
        tasks = [...existingTasks];
    });

    test('addTask should add a new task to the list', () => {
        const task = { id: 1, name: 'Test Task', status: 'pending' };
        addTask(tasks, task);
        expect(tasks).toContainEqual(task);
    });

    test('removeTask should remove a task from the list', () => {
        const task = { id: 1, name: 'Test Task', status: 'pending' };
        tasks.push(task);
        removeTask(tasks, task.id);
        expect(tasks).not.toContainEqual(task);
    });

    test('updateTaskStatus should update the status of an existing task', () => {
        const task = { id: 1, name: 'Test Task', status: 'pending' };
        tasks.push(task);
        updateTaskStatus(tasks, task.id, 'completed');
        expect(tasks[0].status).toBe('completed');
    });

    test('listTasks should list all tasks', () => {
        const task1 = { id: 1, name: 'Test Task 1', status: 'pending' };
        const task2 = { id: 2, name: 'Test Task 2', status: 'completed' };
        tasks.push(task1, task2);
        const listedTasks = listTasks(tasks);
        expect(listedTasks).toEqual([task1, task2]);
    });

    test('sortTasksByStatus should sort tasks based on status', () => {
        const task1 = { id: 1, name: 'Test Task 1', status: 'completed' };
        const task2 = { id: 2, name: 'Test Task 2', status: 'pending' };
        tasks.push(task1, task2);
        const sortedTasks = sortTasksByStatus(tasks);
        expect(sortedTasks).toEqual([task2, task1]);
    });
});