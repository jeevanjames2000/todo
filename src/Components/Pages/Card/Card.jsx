import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";

import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Icon,
  InputAdornment,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cards = () => {
  const data = [
    {
      id: 1,
      title: "Task 1",
      status: true,
    },
    { id: 2, title: "Task 2", status: false },
    { id: 3, title: "Task 3", status: false },
    { id: 4, title: "Task 4", status: false },
    { id: 5, title: "Task 5", status: false },
  ];
  const [todos, setTodos] = useState(data);
  const [add, setAdd] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleToggle = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, status: !todo.completed } : todo
      )
    );
  };

  const handleOpen = () => {
    setAdd(true);
  };

  const handleClose = () => {
    setAdd(false);
  };

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: new Date().getTime(),
        title: newTask,
        status: false,
      };

      setTodos((prevTodos) => [...prevTodos, task]);

      setNewTask("");
      setAdd(false);
    }
  };

  const [query, setQuery] = useState("");

  const handleFilter = (event) => {
    const searchText = event.target.value;
    setQuery(searchText);
    const filteredTodos = data.filter((todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setTodos(filteredTodos);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Grid container justifyContent={"center"} sx={{ marginTop: "5rem" }}>
        <Grid item xs={6} justifyContent={"center"}>
          <Card>
            <CardHeader
              title={
                <Grid container>
                  <Grid item>
                    <TextField
                      fullWidth
                      size="small"
                      value={query}
                      onChange={handleFilter}
                      placeholder="Search for Todo..."
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: 2,
                          width: "15rem",
                          color: "black",
                          backgroundColor: "transparent",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon icon="mdi:magnify" fontSize="1.25rem" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item sx={{ marginLeft: "1rem" }}>
                    <Button variant="outlined" onClick={handleOpen}>
                      Add Task
                    </Button>
                  </Grid>
                </Grid>
              }
            />
            <CardContent sx={{ alignItems: "center" }}>
              {todos.map((item, index) => {
                return (
                  <Box
                    key={item.title}
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",

                      mb: index !== data.length - 1 ? 6.5 : undefined,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          label={
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                color: "text.primary",
                                alignItems: "center",
                                textDecoration: item?.status
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {item?.title}
                            </Typography>
                          }
                          control={
                            <Checkbox
                              checked={item?.status}
                              onClick={() => handleToggle(item?.id)}
                            />
                          }
                        />
                      </FormGroup>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex-end", marginLeft: "2rem" }}>
                        <DeleteIcon onClick={() => handleDelete(item?.id)} />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Modal open={add} onClose={handleClose} title="hii">
        <Box sx={style}>
          <Grid container>
            <Grid item container justifyContent={"center"}>
              <Grid item style={{ marginBottom: "1rem" }}>
                <Typography variant="h5">Add The Task</Typography>
              </Grid>
              <Grid item>
                <TextField
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  size="medium"
                  style={{ width: "25rem", marginBottom: "1rem" }}
                />
              </Grid>
            </Grid>
            <Grid item container justifyContent={"center"}>
              <Grid item style={{ marginRight: "1rem" }}>
                <Button size="small" variant="outlined" onClick={handleAdd}>
                  Add
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" variant="outlined" onClick={handleClose}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Cards;
