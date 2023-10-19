import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

const TodoCard = ({ todo, onDelete, onToggle, todos }) => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Card>
          <CardHeader />
          <CardContent>
            <Grid item xs={12}>
              <Grid item xs={12} display={"flex"} alignItems={"center"}>
                <FormGroup>
                  <FormControlLabel
                    label={
                      <span
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.title}
                      </span>
                    }
                    control={
                      <Checkbox
                        checked={todos?.completed}
                        onClick={() => onToggle(todo.id)}
                      />
                    }
                  />
                </FormGroup>
                <DeleteIcon onClick={() => onDelete(todo.id)} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TodoCard;
