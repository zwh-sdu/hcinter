import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardHeader, CardContent } from '@mui/material';
// components

// sections
import {
  AppTasks,
  AppOrderTimeline,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function ProjectPage() {
  // const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Project </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          Hi, Welcome
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardHeader title="团队名称" sx={{marginLeft:"40%"}} />
              <CardContent sx={{fontSize:20,marginLeft:"40%"}}>
                成群结队
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardHeader title="项目描述" />
              <CardContent sx={{fontSize:20}}>
              我们主要关注大学生健康问题（Student Health），了解大学生对健康问题的意见和看法以及调研大学生健康状况，我们将大学生的健康问题主要分为了身体健康和心理健康，分别进行调查研究，对数据进行收集，监测学生身体和心理健康，并提供改进意见。
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(11)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Problem statement',
                  'Review of existing systems',
                  'Data collection design',
                  'Data collection & analysis',
                  'Solution proposal',
                  'Wireframe',
                  'Critique Feedback',
                  'Hi-fi prototype',
                  'Evaluation: Heuristic evaluation',
                  'Final project presentation',
                  'Final project report & video submission'
                ][index],
                type: `order${index + 1}`,
                time: 
                  (index === 0 && "2022.9.20") ||
                  (index === 1 && "2022.9.30") ||
                  (index === 2 && "2022.10.9") ||
                  (index === 3 && "2022.10.15") ||
                  (index === 4 && "2022.10.25") ||
                  (index === 5 && "2022.11.25") ||
                  (index === 6 && "2022.12.3") ||
                  (index === 7 && "2022.12.10") ||
                  (index === 8 && "2022.12.15") ||
                  (index === 9 && "2022.12.23") ||
                  (index === 10 && "2023.1.4"),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Problem statement'},
                { id: '2', label: 'Review of existing systems' },
                { id: '3', label: 'Data collection design' },
                { id: '4', label: 'Data collection & analysis' },
                { id: '5', label: 'Solution proposal' },
                { id: '6', label: 'Wireframe' },
                { id: '7', label: 'Critique Feedback' },
                { id: '8', label: 'Hi-fi prototype'},
                { id: '9', label: 'Evaluation: Heuristic evaluation' },
                { id: '10', label: 'Final project presentation' },
                { id: '11', label: 'Final project report & video submission' },
              ]}
            />
          </Grid>

        </Grid>


      </Container>
    </>
  );
}
