import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { longStories, shortStories } from "../redux/postSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleLongStoriesChange = (e, val) => {
    e.preventDefault();
    dispatch(longStories(val));
    console.log(val);
  };

  const handleShortStoriesChange = (e, val) => {
    e.preventDefault();
    dispatch(shortStories(val));
    console.log(val);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#444444" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ padding: 4 }}>
            Blog
          </Typography>
          <Button style={{ color: "red" }} sx={{ padding: 4 }}>
            Delete All
          </Button>
          <Typography sx={{ padding: 4 }}>Long Stories</Typography>
          <Switch onChange={handleLongStoriesChange} />

          <Typography sx={{ padding: 4 }}>Short Stories</Typography>
          <Switch onChange={handleShortStoriesChange} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
