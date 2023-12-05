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

  const pendingTasks = tasks.filter((item)=>{
    return item.completed === false
  })
  const pendingTAsksCount = pendingTasks.length
  console.log("pendingTasks: ", pendingTAsksCount);
  return (
    <Grid container>
      <Grid item container xs={12} justifyContent={'center'}>
        <Card sx={{ backgroundColor: '#242320' }}>
          <Box display={'flex'} justifyContent={'center'} sx={{ fontSize: '1rem', color: 'white' }}>
            <Typography variant='h4'>TODOS</Typography>
          </Box>
          <CardContent>
            <Box display={'flex'} justifyContent={'center'} sx={{ marginBottom: '1rem' }}>
              <Typography variant='h5' sx={{ color: 'white' }}>
                Pending Tasks({pendingTAsksCount})
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
                  borderColor: '#A35709',
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                <Box display={'flex'} justifyContent={'start'}>

                  <Typography variant='h6' sx={{ marginRight: '2rem', color: '#FFF' }}>
                    {task.task_name}
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'end'} alignItems={'center'}>
                  <Button
                    size="small"
                    variant='outlined'
                    sx={{ marginRight: '10px',  borderColor: '#A35709', color: 'white', }}
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
              sx={{ marginTop: '2rem', }}
            >
              <TextField
                size='small'
                placeholder='Enter Task to Add'
                onKeyPress={handleAddTask}
                sx={{  color: 'white',backgroundColor: 'white', borderRadius: '5px', }}
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
        <Alert severity="success">New Task Added</Alert>
      </Snackbar>
    </Grid>
  )
}

export default Main