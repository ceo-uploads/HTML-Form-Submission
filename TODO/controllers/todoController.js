const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../todos.json");

// helper function
const getTodos = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const saveTodos = (todos) => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

// CREATE
const createTodo = (req, res) => {
    const todos = getTodos();

    const newTodo = {
        id: Date.now().toString(),
        title: req.body.title,
        completed: false
    };

    todos.push(newTodo);
    saveTodos(todos);

    res.status(201).json(newTodo);
};

// GET ALL
const getAllTodos = (req, res) => {
    const todos = getTodos();

    // query filter support
    const { completed } = req.query;

    if (completed !== undefined) {
        const filtered = todos.filter(t => t.completed === (completed === "true"));
        return res.json(filtered);
    }

    res.json(todos);
};

// GET BY ID
const getTodoById = (req, res) => {
    const todos = getTodos();

    const todo = todos.find(t => t.id === req.params.id);

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
};

// UPDATE
const updateTodo = (req, res) => {
    const todos = getTodos();

    const index = todos.findIndex(t => t.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = {
        ...todos[index],
        ...req.body
    };

    saveTodos(todos);

    res.json(todos[index]);
};

// DELETE
const deleteTodo = (req, res) => {
    let todos = getTodos();

    const filtered = todos.filter(t => t.id !== req.params.id);

    if (filtered.length === todos.length) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todos = filtered;
    saveTodos(todos);

    res.json({ message: "Deleted successfully" });
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};