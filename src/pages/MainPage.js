import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { useTheme,styled } from '@mui/material/styles';
import { Grid, Container} from '@mui/material';



// components
// import Iconify from '../components/iconify';
// sections
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { ActionAreaCardBMI,ActionAreaCardR,ActionAreaCardK } from '../sections/@dashboard/my';

// const StyledProductImg = styled('img')({
//   // top: 0,
//   width: '70%',
//   // height: '20%',
//   // objectFit: 'cover',
//   position: 'relative',
//   // left:'50%'
// });

// ----------------------------------------------------------------------

export default function MainPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> 主页 </title>
      </Helmet>
      <Container maxWidth="xl">


        <Grid container spacing={3}>

        <Grid item xs={12} md={6} lg={4}>
        <ActionAreaCardBMI/>
          
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <ActionAreaCardR/>

          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <ActionAreaCardK/>

          </Grid>

          <Grid item xs={12} md={6} lg={8}>

            <AppWebsiteVisits
              title="影响学生锻炼的因素"
              subheader="纵坐标数值越大表示影响越大"
              chartLabels={[
                '大一',
                '大二',
                '大三',
                '大四',
                '研究生',
                '博士',
              ]}
              chartData={[
                {
                  name: '天气',
                  type: 'column',
                  fill: 'solid',
                  data: [10, 11, 5, 10, 7, 4],
                },
                {
                  name: '心情',
                  type: 'area',
                  fill: 'gradient',
                  data: [30, 39, 15, 57, 22, 15],
                },
                {
                  name: '学习压力',
                  type: 'line',
                  fill: 'solid',
                  data: [60, 50, 80, 33, 71, 71],
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="释放压力方式"
              chartData={[
                { label: '打游戏', value: 34 },
                { label: '体育锻炼', value: 16 },
                { label: '刷视频', value: 31 },
                { label: '跟朋友进行娱乐活动', value: 19 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="锻炼目的"
              // subheader="(+43%) than last year"
              chartData={[
                { label: '拥有好身材', value: 43 },
                { label: '在运动中感到快乐', value: 50 },
                { label: '提高身体素质', value: 87 },
                { label: '参加运动会拿到好名次', value: 17 },
                { label: '保持良好的精神状态', value: 104 },
                { label: '无聊，找点事干', value: 54 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="心理压力来源"
              chartLabels={['经济问题', '恋爱问题', '学业问题', '家庭问题', '人际交往问题', '前途问题']}
              chartData={[
                { name: '低年级', data: [29, 94, 60, 40, 105, 43] },
                { name: '中年级', data: [42, 73, 89, 44, 88, 66] },
                { name: '高年级', data: [55, 64, 78, 23, 51, 112] },
              ]}
              chartColors={[...Array(3)].map(() => theme.palette.text.secondary)}
            />
          </Grid>


        <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="心理压力程度"
              subheader="纵坐标数值越大表示压力越大"
              chartLabels={[
                '大一',
                '大二',
                '大三',
                '大四',
                '研究生',
                '博士',
              ]}
              chartData={[
                {
                  name: '男生',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 42, 60, 56, 69, 66],
                },
                {
                  name: '女生',
                  type: 'line',
                  fill: 'solid',
                  data: [50, 47, 56, 60, 59, 52],
                },
              ]}
            />
          </Grid>
        </Grid>

      </Container>
    </>
  );
}