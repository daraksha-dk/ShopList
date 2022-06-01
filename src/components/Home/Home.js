import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../../actions/posts";
import Grow from "@mui/material/Grow";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import "./Home.scss";
const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          className="home"
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
