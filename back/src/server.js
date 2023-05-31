import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

let todos = [];

app.get('/todos', (req, res) => {
  return res.json(todos);
});

app.post('/todo', (req, res) => {
  const { newTask } = req.body;
  todos.push({ id: uuidv4(), isCompleted: false, taskName: newTask });
  return res.status(200).json(todos);
});

app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter((task) => task.id !== id);
  return res.json(todos)
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
