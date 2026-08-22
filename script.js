* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;

    display: flex;
    justify-content: center;

    padding-top: 60px;
}

.todo-container {
    background: white;

    width: 400px;
    max-width: 90%;

    padding: 25px;

    border-radius: 12px;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.input-area {
    display: flex;
    gap: 10px;
}

#taskInput {
    flex: 1;

    padding: 10px;

    border: 1px solid #ccc;
    border-radius: 6px;

    font-size: 16px;
}

button {
    border: none;
    border-radius: 6px;

    padding: 10px 15px;

    background: #3ecf8e;
    color: white;

    cursor: pointer;

    font-weight: bold;
}

button:hover {
    background: #2fb378;
}

ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    margin-bottom: 10px;

    background: #f7f7f7;

    border-radius: 6px;
}

.task-text {
    cursor: pointer;
    flex: 1;
}

.completed .task-text {
    text-decoration: line-through;
    color: #888;
}

.delete-button {
    background: #e74c3c;
}

.delete-button:hover {
    background: #c0392b;
}

#message {
    text-align: center;
    color: #666;
    min-height: 20px;
}
