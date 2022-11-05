import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { styled } from '@mui/material/styles';
import {Container, Typography,} from '@mui/material';
import story1 from '@mui/material/my_images/story1.png';
import story2 from '@mui/material/my_images/story2.png';

const StyledProductImg = styled('img')({
  // top: 0,
  width: '90%',
  // height: '20%',
  // objectFit: 'cover',
  position: 'relative',
  // left:'50%'
});

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

  return (
    <>
      <Helmet>
        <title> Storyboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          Storyboard
        </Typography>

        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <Typography variant="h4" sx={{ mb: 5 }}>
            story1
          </Typography>
          <StyledProductImg src={story1} />
          <br/><br/><br/>
          <Typography variant="h4" sx={{ mb: 5 }}>
            story2
          </Typography>
            <StyledProductImg src={story2} />
          {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </>
  );
}