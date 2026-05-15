## 🟢 Get All Todos
##  Method: GET
    URL: http://localhost:3000/todos
<img width="1257" height="855" alt="image" src="https://github.com/user-attachments/assets/2beffbfd-45a7-4c67-9edc-6ca346c22951" />
JSON Preview

<img width="1277" height="836" alt="image" src="https://github.com/user-attachments/assets/2230e03d-b9fc-4872-8da2-c00ccae7dde0" />
Tabuler Preview

## 🔵 Get Selective Todo (By ID Query)
## Method: GET
    URL: http://localhost:3000/todos/search?id=1

<img width="1581" height="845" alt="image" src="https://github.com/user-attachments/assets/977fc8eb-7ad0-4e10-8b51-ce67f5857816" />
JSON Preview

## 🔵 Get Selective Todo (Filtered by Priority)
## Method: GET
    URL: http://localhost:3000/todos/search?priority=high

<img width="1596" height="843" alt="image" src="https://github.com/user-attachments/assets/6f971070-d6b5-4718-b22b-f083762268d7" />
JSON Preview

## 🔵 Get Selective Todo (Filtered by Tag)
## Method: GET
    URL: http://localhost:3000/todos/search?tag=work

<img width="1585" height="883" alt="image" src="https://github.com/user-attachments/assets/62b6edd4-6d4e-49f2-b437-e5b2e199e6e2" />
JSON Preview

## 🟡 Create Todo
## Method: POST
    URL: http://localhost:3000/todos
## Headers: Content-Type: application/json
## Body (raw JSON):
    {
    "taskTitle": "Review Database Architecture",
    "dueDate": "2026-05-25T11:00:00",
    "priority": "medium",
    "tags": ["work", "planning"]
    }

<img width="1578" height="836" alt="image" src="https://github.com/user-attachments/assets/58e10cbb-efe7-4ba8-8b7e-fea25e308abd" />
JSON Preview

<img width="1587" height="873" alt="image" src="https://github.com/user-attachments/assets/0a1abaf9-3a63-47b8-90b2-96d40c9d2c3f" />
Tabuler Preview

## 🟠 Update Todo
## Method: PUT
    URL: http://localhost:3000/todos/3
## Headers: Content-Type: application/json
## Body (raw JSON):
    {
    "taskTitle": "Fix Critical Production Bug",
    "priority": "high",
    "tags": ["work", "hotfix", "backend"]
    }

<img width="1594" height="883" alt="image" src="https://github.com/user-attachments/assets/dfaf5a61-7a7c-4739-be6d-347fa4034af5" />
JSON Preview

## 🔴 Delete Todo
## Method: DELETE
    URL: http://localhost:3000/todos/2

<img width="1580" height="877" alt="image" src="https://github.com/user-attachments/assets/8de0c3c5-41ce-479b-81d0-d78187f73511" />
Status = 204 [Deleted Task ID - 2]

After Delation of Task ID - 2, the all Todos are->
<img width="1578" height="847" alt="image" src="https://github.com/user-attachments/assets/08f26334-3630-4fd0-8fba-af13b378fb71" />
