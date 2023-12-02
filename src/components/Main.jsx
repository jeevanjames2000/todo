import { Alert, Box, Button, Card, CardContent, CardHeader, Grid, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Main = () => {



  const [tasks, setTasks] = useState([
    {
      id: 1,
      task_name: 'Finish reading the book on the bedside table',
      completed: false,
    },
    {
      id: 2,
      task_name: 'Complete the weekly assignments for school',
      completed: true,
    }, {
      id: 3,
      task_name: 'Call a friend or family member to catch up..',
      completed: false,
    },
  ])

  const [newTaskSnackbarOpen, setNewTaskSnackbarOpen] = useState(false);

  const handleAddTask = (e) => {
    if (e.key === 'Enter') {
      const newTaskName = e.target.value;
      if (newTaskName.trim() !== '') {
        const newTask = {
          id: tasks.length + 1,
          task_name: newTaskName,
          completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        e.target.value = '';
        setNewTaskSnackbarOpen(true);
      }
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const handleCloseSnackbar = () => {
    setNewTaskSnackbarOpen(false);
  };
  return (
    <Grid container>
      <Grid item container xs={12} justifyContent={'center'}>
        <Card sx={{ backgroundColor: 'black' }}>
          <Box display={'flex'} justifyContent={'center'} sx={{ fontSize: '1rem', color: 'white' }}>
            <Typography variant='h4'>TODOS</Typography>
          </Box>
          <CardContent>
            <Box display={'flex'} justifyContent={'center'} sx={{ marginBottom: '1rem' }}>
              <Typography variant='h5' sx={{ color: 'white' }}>
                Pending Tasks
              </Typography>
            </Box>
            {tasks.map((task) => (
              <Box
                key={task.id}
                display={'flex'}
                justifyContent={'center'}
                sx={{
                  border: '2px solid black',
                  borderRadius: '5px',
                  padding: '5px',
                  marginBottom: '1rem',
                  color: 'white',
                  borderColor: 'white',
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                <Box display={'flex'} justifyContent={'start'}>

                  <Typography variant='h6' sx={{ marginRight: '2rem', color: 'white' }}>
                    {task.task_name}
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'end'}>
                  <Button
                    size="small"
                    variant='outlined'
                    sx={{ marginRight: '10px' }}
                    onClick={() => handleCompleteTask(task.id)}
                  >
                    Complete
                  </Button>
                  <DeleteForeverIcon onClick={() => handleDeleteTask(task.id)} />
                </Box>
              </Box>
            ))}
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{ marginTop: '2rem', color: 'white' }}
            >
              <TextField
                size='small'
                placeholder='Enter Task to Add'

                onKeyPress={handleAddTask}
                sx={{ backgroundColor: 'white', color: 'white', borderRadius: '5px' }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={newTaskSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}

      >
        <Alert severity="success">This is a success message!</Alert>
      </Snackbar>
    </Grid>
  )
}

export default Main