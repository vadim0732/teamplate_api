import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://lajxxaigzwzcgxyqxesw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhanh4YWlnend6Y2d4eXF4ZXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzczNDksImV4cCI6MjA2MDM1MzM0OX0.wR6BK-Y2ceYjkdkO9ih3OvTVkKg5ziLeEu88LN-pw5w')


const express = require('express')
const app = express()
const port = 3000

app.get('/Student', async (req, res) => {
  const { data, error } = await supabase
  .from('name')
  .select()

  res.json(data)
})

app.post('/Student', (req, res) => {
  res.send('Добавление студентов')
})

app.delete('/Student/:id', async (req, res) => {
  const { data, error } = await supabase
  .from('name')
  .delete()
  .eq('id', req.params.id)

  res.json('Студент с id=', req.params.id + 'удален!')
})

app.put('/Student', (req, res) => {
  res.send('Изменение студентов')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})