import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { styled } from '@mui/material/styles';
import {Container, Typography,} from '@mui/material';
import lf1 from '@mui/material/my_images/low-fi/lf1.jpg';
import lf2 from '@mui/material/my_images/low-fi/lf2.jpg';
import lf3 from '@mui/material/my_images/low-fi/lf3.jpg';
import lf4 from '@mui/material/my_images/low-fi/lf4.jpg';
import lf5 from '@mui/material/my_images/low-fi/lf5.jpg';
import lf6 from '@mui/material/my_images/low-fi/lf6.jpg';

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
        <title> Low-fi prototyping </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
        Low-fi prototyping
        </Typography>
        <Typography variant="h4" sx={{ mb: 5 }}>
            1
          </Typography>
        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <StyledProductImg src={lf1} />
          <br/><br/>
          <Typography variant="h5" sx={{ mb: 5 }}>
          首先，是我们的产品的首页，上面分别有我们数据库中用户信息的一个基本展示，包括用户的平均BMI值，平均周跑量，平均健身市场，用户分布，以及前期我们进行对收集的数据的分析及可视化展示。这里帮助用户对整体平均水平进行简单的了解，便于对自己的状况进行对比评估。
          </Typography>
          <br/><br/><br/>

          <Typography variant="h4" sx={{ mb: 5 }}>
            2
          </Typography>
        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <StyledProductImg src={lf2} />
          <br/><br/>
          <Typography variant="h5" sx={{ mb: 5 }}>
          此界面为简单的社交界面，每个用户有自己的同学/好友列表，帮助用户互相激励相互监督共同努力，可以看到好友分享的自律动态，给与自己激励，还可以再好友列表中交互点击同学，可以看到同学的跑步锻炼数据，防止同学偷偷锻炼超过自己，同时起到激励自己的作用。
          </Typography>
          <br/><br/><br/>

          <Typography variant="h4" sx={{ mb: 5 }}>
            3
          </Typography>
        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <StyledProductImg src={lf3} />
          <br/><br/>
          <Typography variant="h5" sx={{ mb: 5 }}>
          用户首页，用户可以实时录入自己的身高体重等信息，我们会记录用户的历史输入，可视化数据的变化，帮助用户调整自己的训练计划，看到自己的成果，看到自己的进步，这种正反馈能够帮助用户长期坚持下去。
          </Typography>
          <br/><br/><br/>

          <Typography variant="h4" sx={{ mb: 5 }}>
            4
          </Typography>
        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <StyledProductImg src={lf4} />
          <br/><br/>
          <Typography variant="h5" sx={{ mb: 5 }}>
          此界面是跑步健身的数据界面，可以看到当前月份/年份每次跑步的距离、时长、配速、心率、状态等信息，自动计算周跑量、月跑量等数据。健身方面记录每天的锻炼时长，这些数据帮助用户调整自己的跑步和健身计划。
          </Typography>
          <br/><br/><br/>


          <Typography variant="h4" sx={{ mb: 5 }}>
            5
          </Typography>
        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <StyledProductImg src={lf5} />
          <br/><br/>
          <Typography variant="h5" sx={{ mb: 5 }}>
          该界面是训练计划界面，包括了跑步计划和健身计划，跑步计划中，用户可以自己设置一个长期的计划，例如半马提升计划等，计划通常持续几个周，每天都有固定的训练和休息。健身计划主要是每天按照不同的部位进行训练。用户完成每天的训练后要进行打卡，这也激励了用户坚持下去，尽可能产生懈怠和偷懒的情绪。
          </Typography>
          <br/><br/><br/>

          <Typography variant="h4" sx={{ mb: 5 }}>
            6
          </Typography>
        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
          <StyledProductImg src={lf6} />
          <br/><br/>
          <Typography variant="h5" sx={{ mb: 5 }}>
          最后一个界面主要关注用户的心理健康问题，首先用户可以通过第三方设备（手环等）或者手动输入录入每天的睡眠信息，然后专家会根据这些信息给出建议，例如睡眠时间过晚，要适当休息等。同时用户也可以通过第三方设备（手环等）或者手动输入录入每天的压力检测信息。系统对这些数据进行可视化展示，便于用户和专家进行分析。
          </Typography>
          <br/><br/><br/>

          {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </>
  );
}