const tasks = [
    {
        id: 1,
        title: "Task 1",
        status: "pending",
        subTasks: [
            { id: 1.1, title: "Subtask 1.1", status: "completed" },
            { id: 1.2, title: "Subtask 1.2", status: "pending" }
        ]
    },
    {
        id: 2,
        title: "Task 2",
        status: "completed",
        subTasks: [
            { id: 2.1, title: "Subtask 2.1", status: "completed" },
            { id: 2.2, title: "Subtask 2.2", status: "completed" }
        ]
    },
    {
        id: 3,
        title: "Task 3",
        status: "in-progress",
        subTasks: [
            { id: 3.1, title: "Subtask 3.1", status: "in-progress" },
            { id: 3.2, title: "Subtask 3.2", status: "pending" }
        ]
    }
];

module.exports = tasks;