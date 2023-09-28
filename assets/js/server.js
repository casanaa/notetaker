const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default, or an environment variable if set

// Middleware to parse JSON data
app.use(express.json());

// Define an array to store notes
const notes = [];

// Create a new note
app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Both title and content are required' });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    content,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
