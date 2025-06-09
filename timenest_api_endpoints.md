# TimeNest – API Endpoints

## Register User

**Method:** `POST`
**URL:** `/api/auth/register`
**Description:** Create a new user account
**Request Example:**
```json
{
  "name": "Thiago",
  "email": "thiago@email.com",
  "password": "123456"
}
```
**Response Example:**
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "<USER_ID>",
    "name": "Thiago",
    "email": "thiago@email.com"
  }
}
```

## Login User

**Method:** `POST`
**URL:** `/api/auth/login`
**Description:** Authenticate user and return token
**Request Example:**
```json
{
  "email": "thiago@email.com",
  "password": "123456"
}
```
**Response Example:**
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "<USER_ID>",
    "name": "Thiago",
    "email": "thiago@email.com"
  }
}
```

## Create Task

**Method:** `POST`
**URL:** `/api/tasks`
**Description:** Create a new task for the logged-in user
**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>`
**Request Example:**
```json
{
  "title": "Fazer mockup da dashboard",
  "category": "Design",
  "weight": 25,
  "dueDate": "2025-06-11T00:00:00Z"
}
```
**Response Example:**
```json
{
  "_id": "<TASK_ID>",
  "title": "Fazer mockup da dashboard",
  "category": "Design",
  "weight": 25,
  "status": "pending",
  "dueDate": "2025-06-11T00:00:00.000Z",
  "userId": "<USER_ID>"
}
```

## Get Tasks

**Method:** `GET`
**URL:** `/api/tasks`
**Description:** List all tasks for the logged-in user
**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>`
**Request Example:**
```json
{}
```
**Response Example:**
```json
[
  {
    "_id": "<TASK_ID>",
    "title": "Fazer mockup da dashboard",
    "category": "Design",
    "weight": 25,
    "status": "pending",
    "dueDate": "2025-06-11T00:00:00.000Z",
    "userId": "<USER_ID>"
  }
]
```

## Update Task

**Method:** `PUT`
**URL:** `/api/tasks/:id`
**Description:** Update a specific task by ID
**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>`
**Request Example:**
```json
{
  "status": "completed"
}
```
**Response Example:**
```json
{
  "_id": "<TASK_ID>",
  "status": "completed"
}
```

## Delete Task

**Method:** `DELETE`
**URL:** `/api/tasks/:id`
**Description:** Delete a specific task by ID
**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>`
**Request Example:**
```json
{}
```
**Response Example:**
```json
{
  "message": "Task deleted successfully"
}
```
