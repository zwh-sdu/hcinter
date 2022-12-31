import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography} from '@mui/material';
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
        <title> 训练计划 </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          训练计划
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <AppOrderTimeline
              title="健身周计划"
              list={[...Array(7)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '胸+三头',
                  '背+二头',
                  '肩+腹部',
                  '腿',
                  '休息',
                  '胸+三头',
                  '背+二头',
                ][index],
                type: `order${index + 1}`,
                time: 
                  (index === 0 && "周一") ||
                  (index === 1 && "周二") ||
                  (index === 2 && "周三") ||
                  (index === 3 && "周四") ||
                  (index === 4 && "周五") ||
                  (index === 5 && "周六") ||
                  (index === 6 && "周日")
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppTasks
              title="跑步计划"
              list={[
                { id: '1', label: '轻松跑：10k'},
                { id: '2', label: '间歇跑：800mX8组' },
                { id: '3', label: '轻松跑：6k' },
                { id: '4', label: '节奏跑：15k' },
                { id: '5', label: '轻松跑：8k' },
                { id: '6', label: '轻松跑：5k' },
                { id: '7', label: '长距离：30k' },
                { id: '8', label: '跑休'},
              ]}
            />
          </Grid>

        </Grid>


      </Container>
    </>
  );
}
