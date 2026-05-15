# ⚡ Advanced Todo API Documentation

Welcome to the official API documentation for the Todo Management Server. This API provides robust endpoints to manage, filter, create, update, and delete tasks with support for priorities, tags, and dynamic queries.

---

## 🧭 API Endpoint Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| <kbd> GET </kbd> | `/todos` | Fetch all todos (Supports JSON & Tabular views) |
| <kbd> GET </kbd> | `/todos/search?id={val}` | Filter specific todo by unique ID |
| <kbd> GET </kbd> | `/todos/search?priority={val}` | Filter todos by priority level (`high`, `medium`, `low`) |
| <kbd> GET </kbd> | `/todos/search?tag={val}` | Filter todos by category tags |
| <kbd>POST </kbd> | `/todos` | Create a new task |
| <kbd>PUT  </kbd> | `/todos/:id` | Update an existing task partially or fully |
| <kbd>DELETE</kbd> | `/todos/:id` | Remove a task from the system by ID |

---

## 🟢 Get All Todos

Retreive a complete list of all active tasks currently stored in the database.

* **Method:** `GET`
* **URL:** `http://localhost:3000/todos`

### 👁️ JSON Preview
<img width="1257" height="855" alt="JSON View of all todos" src="https://github.com/user-attachments/assets/2beffbfd-45a7-4c67-9edc-6ca346c22951" />

### 📊 Tabular Preview
<img width="1277" height="836" alt="Tabular view of all todos" src="https://github.com/user-attachments/assets/2230e03d-b9fc-4872-8da2-c00ccae7dde0" />

---

## 🔵 Selective Querying & Filtering

### 1️⃣ Get Todo By ID Query
* **Method:** `GET`
* **URL:** `http://localhost:3000/todos/search?id=1`

<img width="1581" height="845" alt="Filter by ID" src="https://github.com/user-attachments/assets/977fc8eb-7ad0-4e10-8b51-ce67f5857816" />

### 2️⃣ Filtered by Priority
* **Method:** `GET`
* **URL:** `http://localhost:3000/todos/search?priority=high`

<img width="1596" height="843" alt="Filter by Priority" src="https://github.com/user-attachments/assets/6f971070-d6b5-4718-b22b-f083762268d7" />

### 3️⃣ Filtered by Tag
* **Method:** `GET`
* **URL:** `http://localhost:3000/todos/search?tag=work`

<img width="1585" height="883" alt="Filter by Tag" src="https://github.com/user-attachments/assets/62b6edd4-6d4e-49f2-b437-e5b2e199e6e2" />

---

## 🟡 Create Todo

Appends a new task object to the system registry.

* **Method:** `POST`
* **URL:** `http://localhost:3000/todos`
* **Headers:** `Content-Type: application/json`

### 📥 Request Body (raw JSON)
```json
{
  "taskTitle": "Review Database Architecture",
  "dueDate": "2026-05-25T11:00:00",
  "priority": "medium",
  "tags": ["work", "planning"]
}
