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
```

### 👁️ JSON Preview
<img width="1578" height="836" alt="image" src="https://github.com/user-attachments/assets/58e10cbb-efe7-4ba8-8b7e-fea25e308abd" />

### 📊 Tabular Preview
<img width="1587" height="873" alt="image" src="https://github.com/user-attachments/assets/0a1abaf9-3a63-47b8-90b2-96d40c9d2c3f" />


---

## 🟠 Update Todo
Modifies parameters of an existing records targetted by URL parameters.

* **Method:** `PUT`
* **URL:** `http://localhost:3000/todos/3`
* **Headers:** `Content-Type: application/json`

### 📥 Request Body (raw JSON)
```json
{
  "taskTitle": "Fix Critical Production Bug",
  "priority": "high",
  "tags": ["work", "hotfix", "backend"]
}
```

### 👁️ JSON Preview
<img width="1594" height="883" alt="image" src="https://github.com/user-attachments/assets/dfaf5a61-7a7c-4739-be6d-347fa4034af5" />

---

## 🔴 Delete Todo
Permanently purges a task from the dataset.

* **Method:** `DELETE`
* **URL:** `http://localhost:3000/todos/2`
* **Headers:** `Content-Type: application/json`

### 👁️ Preview
<img width="1580" height="877" alt="image" src="https://github.com/user-attachments/assets/8de0c3c5-41ce-479b-81d0-d78187f73511" />

#### 💡 Response Status: 204 No Content (Task ID - 2 has been successfully unlinked)

### 🔄 Database State Post-Deletion
<img width="1578" height="847" alt="image" src="https://github.com/user-attachments/assets/08f26334-3630-4fd0-8fba-af13b378fb71" />
The snippet below shows the data array with ID: 2 fully extracted.
