const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
const DATA_FILE = './data.json';

const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

app.get('/todos', (req, res) => {
    res.json(readData());
});

app.get('/todos/search', (req, res) => {
    const todos = readData();
    const { id, priority, tag } = req.query;

    if (id) {
        const todo = todos.find(t => t.id === parseInt(id));
        return todo ? res.json(todo) : res.status(404).json({ error: "Todo not found" });
    }

    let filteredTodos = todos;
    if (priority) {
        filteredTodos = filteredTodos.filter(t => t.priority.toLowerCase() === priority.toLowerCase());
    }
    if (tag) {
        filteredTodos = filteredTodos.filter(t => t.tags.map(v => v.toLowerCase()).includes(tag.toLowerCase()));
    }

    res.json(filteredTodos);
});

app.post('/todos', (req, res) => {
    const todos = readData();
    const { taskTitle, dueDate, priority, tags } = req.body;

    if (!taskTitle || !priority) {
        return res.status(400).json({ error: "Task Title and Priority are required." });
    }

    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        taskTitle,
        dueDate: dueDate || null, 
        priority: priority.toLowerCase(), 
        tags: Array.isArray(tags) ? tags : []
    };

    todos.push(newTodo);
    writeData(todos);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    let todos = readData();
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));

    if (index !== -1) {
        todos[index] = { ...todos[index], ...req.body };
        writeData(todos);
        res.json(todos[index]);
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

app.delete('/todos/:id', (req, res) => {
    let todos = readData();
    const filteredTodos = todos.filter(t => t.id !== parseInt(req.params.id));

    if (todos.length !== filteredTodos.length) {
        writeData(filteredTodos);
        res.status(204).send();
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
