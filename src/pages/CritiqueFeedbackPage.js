import { Helmet } from 'react-helmet-async';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardHeader, CardContent } from '@mui/material';

// ----------------------------------------------------------------------

export default function CritiqueFeedbaPage() {
  // const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> CritiqueFeedback </title>
      </Helmet>
 
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          CritiqueFeedback
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Wireframe" sx={{marginLeft:"40%"}} />
              <CardContent>
                <hr/>
                <h2>Overall tone of the critique feedback</h2>
                <p>我们向一些同学提供了设计好的Wireframe框架，模拟用户的使用体验，并收集他们的评价和意见。总体来说，用户对我们设计的网页的Wireframe都比较认可，一致认为实用性较强，界面较为美观。当然，也有一些问题被指出，我们也进行了分析与总结。</p>
                <h2>Positive feedback</h2>
                <p>功能齐全，界面简洁美观，实用性较强</p>
                <h2>Problems & response</h2>
                <ul type="disc">
                    <li>布局类</li>
                    <p>P：训练接话页面布局不是很合适，页面空白部分太多</p>
                    <p>A：我们会重新调整该页面布局，字体大小、位置等，更充分利用页面，及减少空白占比。</p>
                    <p>P：专家咨询页面布局略显混乱，各个功能模块之间字体、配色等要求没有很好的配合，显得整个页面有点杂乱。</p>
                    <p>A：我们会统一调整各个功能模块的字体、配色等设计要素，必要时可以将多个功能模块拆分到多个页面。</p>
                    <li>交互类</li>
                    <p>P：界面中一些交互按钮设计较为平淡，没有很好的引导用户点击。</p>
                    <p>A：修改交互按钮，必要时可以利用MUI等前端框架中的组件进行改进。</p>
                    <li>功能类</li>
                    <p>P：训练记录展示界面中对训练内容的展示不够全面，可视化性不够好，希望能更加直观具体的观察每次训练记录的详细信息。</p>
                    <p>A：下一步我们会参考现有的一些APP（例如Keep，华为运动等）的数据展示方法，改进数据可视化的体验性。</p>
                </ul>
                <h2>Improvements</h2>
                <p>根据上述我们收集到的问题及我们对此的总结与分析，下一步我们将进一步改进我们的设计，主要从界面布局问题、交互问题以及具体功能类问题入手，我们会重新调整页面布局，字体大小、位置等，更充分利用页面，及减少空白占比；统一调整各个功能模块的字体、配色等设计要素，必要时可以将多个功能模块拆分到多个页面。改交互按钮，必要时可以利用MUI等前端框架中的组件进行改进；参考现有的一些APP（例如Keep，华为运动等）的数据展示方法，改进数据可视化的体验性。</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
