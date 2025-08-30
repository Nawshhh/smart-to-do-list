# Smart To-Do List

Smart To-Do List is an AI-powered task generation web application designed to help users efficiently manage their tasks with features like priority sorting, status tracking, and batch deletion.

## Features

- **AI Task Generation:** Generate tasks using Hugging Face AI models.
- **Task Management:** Add, view, update, and delete tasks.
- **Status Columns:** Tasks are organized into "To-Do", "Doing", and "Done" columns.
- **Priority Sorting:** Tasks are sorted by priority (High, Medium, Low).
- **Batch Delete:** Select multiple tasks and delete them at once.
- **Interactive UI:** Easily change task status and priority.
- **Loading Indicators:** Visual feedback during data fetching.


## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express (API endpoints)
- **HTTP Client:** Axios
- **AI Integration:** Hugging Face (for task generation)

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend server running on `localhost:5000`

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/smart-to-do-list.git
    cd smart-to-do-list
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend:
    ```bash
    npm start
    ```
4. Make sure your backend server is running.

## Folder Structure

```
smart-to-do-list/
├── smartlist/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── utilities/
│   └── ...
├── README.md
└── ...
```

## Usage

- Add new tasks and assign priority.
- Change task status by clicking on status columns.
- Select tasks for batch deletion in the Delete Task page.
- View and update task details.
- Generate tasks using AI (powered by Hugging Face).