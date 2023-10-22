import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Icon, InputAdornment, TextField } from "@mui/material";
import TodoApp from "../Card/TodoApp";
import Cards from "../Card/Card";

const Layout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container xs={12}>
              <Grid item container xs={6} justifyContent={"space-between"}>
               
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
          
              </Grid>
                <Grid item container xs={6} display={'flex'} justifyContent={"center"}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ToDo
                  </Typography>
                </Grid>
     
          
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <TodoApp /> */}
      <Cards />
    </>
  );
};

export default Layout;
