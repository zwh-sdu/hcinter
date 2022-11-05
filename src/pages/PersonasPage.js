import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { styled } from '@mui/material/styles';
import {Container, Typography,} from '@mui/material';
import zw from '@mui/material/my_images/p_zw.png';
import zgxl from '@mui/material/my_images/p_zgxl.png';

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
        <title> Personas </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          Personas
        </Typography>

        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <Typography variant="h4" sx={{ mb: 5 }}>
            张伟
          </Typography>
          <StyledProductImg src={zw} />
          <br/><br/><br/>
          <Typography variant="h4" sx={{ mb: 5 }}>
            诸葛小丽
          </Typography>
            <StyledProductImg src={zgxl} />
          {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </>
  );
}