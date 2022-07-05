import React from 'react';
import Container from "@mui/material/Container";
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Posts from '../../Components/Posts/Posts';
import Form from '../../Components/Form/Form';

const News = () => {
  return (
    <>
    <Container maxWidth="lg" >
      <Grow in >
        <Container >
          <Grid className="mainContainer" >
            <Grid className="postsContainer"item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid className="formContainer"item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </>
  )
}

export default News