import { Helmet } from 'react-helmet-async';
import { Card, Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';

// ----------------------------------------------------------------------

import {
  AppWebsiteVisits,
} from '../sections/@dashboard/app';
// ----------------------------------------------------------------------

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title> Account </title>
      </Helmet>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
          >
          <Card>
            <AppWebsiteVisits
              title="身高变化"
              chartLabels={[
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
              ]}
              chartData={[
                {
                  name: '身高',
                  type: 'column',
                  fill: 'solid',
                  data: [174, 176, 179, 180, 182, 183],
                },
              ]}
            />
            </Card>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
          >
          <Card>
            <AppWebsiteVisits
              title="体重变化"
              chartLabels={[
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
              ]}
              chartData={[
                {
                  name: '体重',
                  type: 'line',
                  fill: 'solid',
                  data: [60, 62, 66, 70, 74, 70],
                },
              ]}
            />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
}
