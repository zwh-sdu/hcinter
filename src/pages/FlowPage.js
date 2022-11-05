import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { styled } from '@mui/material/styles';
import {Container, Typography,} from '@mui/material';
import fm from '@mui/material/my_images/FLow Model.png';

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
        <title> Flow modee & HMW </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          Flow model
        </Typography>

        {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12} md={6}> */}
            <StyledProductImg src={fm} />
          {/* </Grid> */}
        {/* </Grid> */}
        <Typography variant="h3" sx={{ mb: 5 }}>
          HMW questions
        </Typography>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Pov:
        </Typography>
        <Typography variant="p" sx={{ mb: 5 }}>
一个人焦急的走进听诊室，非常忐忑的等待着诊治医生对其做出一些身体健康和心理健康上的询问，医生询问的非常详细和透彻，但综合问题进行分析时又非常的慢，此人还需要忐忑的在旁等候，而门外也有其他人在焦急的等候。
        </Typography>
        <br/><br/>
        <Typography variant="h4" sx={{ mb: 5 }}>
          HMW
        </Typography>
        <Typography variant="p" sx={{ mb: 5 }}>

        <ul type="disc">
          <li>我们如何让刚刚进入听诊室的人不在感到焦急，而是轻松的心情？</li>
          <li>我们如何安排时间让所有人都可以不需要等待？</li>
          <li>我们如何可以让医生询问的方式变得更容易接受和询问的内容方便回答？</li>
          <li>我们如何可以加快医生做出分析的进度？</li>
          <li>我们如何可以让在听诊室的人等待结果时有一些可以放松的活动，资料等？</li>
          <li>我们如何可以让最终的听诊结果变得让人体验轻松和双方彼此能够满意？</li>
        </ul>
        </Typography>

      </Container>
    </>
  );
}