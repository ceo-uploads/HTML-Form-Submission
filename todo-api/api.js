const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'todos.json');

// ---------- Helper Functions ----------
async function readTodos() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writeTodos(todos) {
    await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2));
}

// ---------- Routes ----------

// GET all todos (with filters)
app.get('/todos', async (req, res) => {
    const todos = await readTodos();
    const { startId, endId, completed, search } = req.query;

    let filtered = [...todos];

    if (startId || endId) {
        const start = parseInt(startId) || 1;
        const end = parseInt(endId) || Number.MAX_SAFE_INTEGER;
        filtered = filtered.filter(t => t.id >= start && t.id <= end);
    }

    if (completed !== undefined) {
        const status = completed === 'true';
        filtered = filtered.filter(t => t.completed === status);
    }

    if (search) {
        filtered = filtered.filter(t =>
            t.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.json({ count: filtered.length, todos: filtered });
});

// GET single todo
app.get('/todos/:id', async (req, res) => {
    const todos = await readTodos();
    const todo = todos.find(t => t.id == req.params.id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(todo);
});

// CREATE todo
app.post('/todos', async (req, res) => {
    const { title, description = '' } = req.body;

    if (!title || title.trim().length < 3) {
        return res.status(400).json({
            error: 'Title must be at least 3 characters long'
        });
    }

    const todos = await readTodos();
    const newTodo = {
        id: Date.now(), // Unique ID
        title: title.trim(),
        description,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);
    await writeTodos(todos);

    res.status(201).json(newTodo);
});

// UPDATE todo
app.patch('/todos/:id', async (req, res) => {
    const todos = await readTodos();
    const index = todos.findIndex(t => t.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const updatedTodo = {
        ...todos[index],
        ...req.body,
        updatedAt: new Date().toISOString()
    };

    todos[index] = updatedTodo;
    await writeTodos(todos);

    res.json(updatedTodo);
});

// DELETE todo
app.delete('/todos/:id', async (req, res) => {
    const todos = await readTodos();
    const newList = todos.filter(t => t.id != req.params.id);

    if (newList.length === todos.length) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    await writeTodos(newList);
    res.json({ message: 'Todo deleted successfully' });
});

// Root
app.get('/', (req, res) => {
    res.send(' Custom Todo API is running...');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});