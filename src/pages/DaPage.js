import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, CardContent } from '@mui/material';
// import temp from '@mui/material/my_images/kuromi.jpeg'
// components
// import Iconify from '../components/iconify';
// sections
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Data Analysis </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          数据分析
        </Typography>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Visualization of Survey
        </Typography>

        <Grid container spacing={3}>
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
              <CardContent sx={{fontSize:18}}>
              横坐标表示学生年级，纵坐标用不同线条代表影响学生锻炼的重要因素。从图中可以看到天气对不同年级的影响差别不是很大，而心情因素与我们实验前预测的有较大差距，低年级的学生因新环境的变化，受到的影响更大。同时学习压力在低年级学生中显得格外重要，我们猜测可能是内卷时代下学生更加的担忧学习。
              </CardContent>
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
              <CardContent sx={{fontSize:18}}>
              不同颜色块代表不同的压力释放方式，可以看到打游戏与刷视频占比较高，我们猜测可能是我们数据采集集中在计算机学院，受学生团体影响较大，而看书和锻炼身体仍是少部分人的选择。
              </CardContent>
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
              <CardContent sx={{fontSize:18}}>
              纵坐标代表大学生锻炼目的，横坐标表示人数，从图中可以看到提高身体素质与良好的精神状态是重要因素，而少数人是为了运动会拿到好名次以及拥有好身材，可以看出大多数学生喜欢用锻炼身体来缓解情绪。
              </CardContent>
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
              <CardContent sx={{fontSize:18}}>
              六边形顶点分别代表家庭，人际关系，未来前途，经济，恋爱关系，学业等六个因素对学生的心理压力影响重要程度，不同颜色的线条分别代表不同年级。图中可以看到学业，前途因素对各个年级的影响度都最大，低年级学生心理压力还来源于人际交往与恋爱关系，高年级学生则更多受经济，家庭方面的影响。
              </CardContent>
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
                  data: [35, 40, 60, 56, 69, 76],
                },
                {
                  name: '女生',
                  type: 'line',
                  fill: 'solid',
                  data: [50, 60, 56, 70, 59, 64],
                },
              ]}
            />
              <CardContent sx={{fontSize:18}}>
              纵坐标表示心理压力程度，横坐标表示不同年级学生，用不同颜色的线条表示男女，可以观察到在低年级阶段女生心理压力大于男生，而高年级学生中男生的心理压力高于女生，我们猜测可能是受传统观念影响，男生在家庭中要求承担更多一点责任，导致男生压力较大，并且还可以发现男生相对于女生随着时间推移压力变化幅度更大。
              </CardContent>
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ mb: 5 }}>
          Affinity diagram of Interview
        </Typography>

        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
          </Grid>
        </Grid> */}

      </Container>
    </>
  );
}