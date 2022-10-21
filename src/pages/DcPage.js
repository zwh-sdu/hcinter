import { Helmet } from 'react-helmet-async';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardHeader, CardContent } from '@mui/material';

// ----------------------------------------------------------------------

export default function DcPage() {
  // const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Project </title>
      </Helmet>
 
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }}>
          数据收集
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Interview" sx={{marginLeft:"40%"}} />
              <CardContent>
                <hr/>
                <h2>Intro</h2>
                <p>你好，我们正在为一个关于学生健康问题(Student Health)的研究项目收集数据采集信息，请问您有时间接受一段采访并允许我们将您的采访内容纳入我们的项目研究中吗，我们会保护您的隐私。如果在采访过程中您感觉我们的问题涉及到您太过隐私的问题，请及时与我们沟通。</p>
                <h2>Warm up</h2>
                <p>Q：请问你平时课业压力大吗，这个学期要上多少节课？</p>
                <p>A：_________________________________________</p>
                <h2>Main Body</h2>
                <ul type="disc">
                    <li>Topic1: 健康隐患</li>
                    <ul type="circle">
                        <li>Q1：你认为当今社会学生的健康总体水平如何。</li>
                        A1：_________________________________________
                        <li>Q2：你认为如今对学生健康影响最大的因素是什么。</li>
                        A2：_________________________________________
                        <li>Q3：你认为自己当前存在什么健康隐患吗。</li>
                        A3：_________________________________________<br/>
                        Following-up
                        <ul type="square">
                            <li>如果有，这个健康隐患认为主要是由什么原因造成的。</li>
                            <li>如果没有，你是通过什么方法保持健康的，包括身体和心理健康。</li>
                        </ul>
                        <li>Q4：你的学校是否采取了什么措施来帮助学生保持身心健康。</li>
                        A4：_________________________________________
                        <li>Q5：在课余时间，除了学习之外，你通常做什么。</li>
                        A5：_________________________________________
                    </ul>
                    <li>Topic2：身体健康</li>
                    <ul type="circle">
                        <li>Q6：平时有坚持运动的习惯吗。</li>
                        A6：_________________________________________<br/>
                        Following-up
                        <ul type="square">
                            <li>如果有的话，是什么原因使你能够坚持下来，最喜欢的运动是什么。</li>
                            <li>如果没有，是学习压力太大还是别的原因比如想把时间花在其他更有意思的事上。有想要坚持下去但是由于种种原因没有成功的运动吗。</li>
                        </ul>
                        <li>Q7：你的学校是否会通过举办各种运动会等活动鼓励学生积极参与体育锻炼保持身体健康，以及学校是否有足够的设施和条件来进行运动锻炼，你认为这必要吗。</li>
                        A7：_________________________________________
                        <li>Q8：你会使用一些app来记录你身体的健康情况吗，体重变化，饮食管理等。</li>
                        A8：_________________________________________<br/>
                        <li>Q9：我记得我大一的辅导员老师说过，大一是大家大学四年里身体素质最好的时候，说明大学里学生身体素质下滑是一个比较普遍的现象，你认同这个观点吗，你认为原因是什么。</li>
                        A9：_________________________________________
                        <li>Q10：对自己的身体状况满意吗（体重，身材等）</li>
                        A10：_________________________________________
                        <li>Q11：平时是否会可以控制饮食，是尽量保持规律，计算各种营养物质的摄入量，还是想吃就吃，比如经常吃夜宵等。</li>
                        A11：_________________________________________
                    </ul>
                    <li>Topic3：心理健康</li>
                    <ul type="circle">
                        <li>Q12：你认为自己的心理健康状况如何，会经常感到焦虑和孤独吗。</li>
                        A12：_________________________________________
                        <li>Q13：你的学校会开展心理健康测评等活动，开设心理咨询室，关注学生心理健康吗。</li>
                        A13：_________________________________________
                        <li>Q14：你曾因为心理问题看过医生或者进行过心理咨询吗。</li>
                        A14：_________________________________________<br/>
                        Following-up
                        <ul type="square">
                            <li>如果有的话，当时遇到了什么心理问题，心理咨询对你的帮助大吗。</li>
                            <li>如果没有的话，你认为心理咨询的重要性如何，或者你曾考虑过去心理咨询吗。</li>
                        </ul>
                        <li>Q15：你对当前的大学生活满意吗，有没有什么遗憾或者不满意的地方，比如同学太卷了导致压力很大，或者找不到心仪的对象等</li>
                        A15：_________________________________________
                        <li>Q16：你一般如何面对重大打击、压力或烦心事。</li>
                        A16：_________________________________________
                        <li>Q17：你日常生活中会去医院做身体和心理健康检测吗？频率如何呢？</li>
                        A17：_________________________________________
                        <li>Q18：你有使用某一款APP应用去日常监控身体和心理健康吗？</li>
                        A18：_________________________________________
                    </ul>
                </ul>
                <h2>Closing</h2>
                <p>你还有什么关于student health想要问我们或者要补充的观点吗?</p><br/>
                <p>非常感谢你的参与。</p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardHeader title="Survey" sx={{marginLeft:"40%"}} />
              <CardContent>
                <hr/>
                <ul type="disc">
                    <li>Q1：你是大几的学生</li>
                    <ul type="circle">
                        <li>大一</li>
                        <li>大二</li>
                        <li>大三</li>
                        <li>大四</li>
                        <li>研究生</li>
                        <li>博士</li>
                    </ul>
                    <li>Q2：你是男生还是女生</li>
                    <ul type="circle">
                        <li>男生</li>
                        <li>女生</li>
                    </ul>
                    <li>Q3：你认为你自己身体健康状态如何</li>
                    <ul type="circle">
                        <li>非常好</li>
                        <li>还行</li>
                        <li>比较糟糕</li>
                    </ul>
                    <li>Q4：你平时会怎样打发时间（多选）</li>
                    <ul type="circle">
                        <li>体育锻炼</li>
                        <li>打游戏</li>
                        <li>跟朋友进行娱乐活动</li>
                        <li>看书</li>
                        <li>刷视频</li>
                        <li>睡觉</li>
                    </ul>
                    <li>Q5：你每周进行体育锻炼的次数</li>
                    <ul type="circle">
                        <li>每周1~2次</li>
                        <li>每周3~4次</li>
                        <li>每周五次以上</li>
                        <li>几乎不锻炼</li>
                    </ul>
                    <li>Q6：你进行体育锻炼的目的有哪些（多选）</li>
                    <ul type="circle">
                        <li>拥有好身材</li>
                        <li>在运动中可以感到快乐</li>
                        <li>提高身体素质</li>
                        <li>参加运动会拿到更好的名次</li>
                        <li>保持良好的精神状态</li>
                        <li>课余生活比较无聊，找点事干</li>
                    </ul>
                    <li>Q7：哪些因素会影响到你的锻炼（多选）</li>
                    <ul type="circle">
                        <li>天气</li>
                        <li>心情</li>
                        <li>学习压力</li>
                        <li>场地条件</li>
                    </ul>
                    <li>Q8：你认为大学生进行体育锻炼重要吗</li>
                    <ul type="circle">
                        <li>很重要</li>
                        <li>重要</li>
                        <li>一般</li>
                        <li>不重要</li>
                    </ul>
                    <li>Q9：与之前相比，你的运动量</li>
                    <ul type="circle">
                        <li>有所增加</li>
                        <li>差不多</li>
                        <li>大不如前</li>
                    </ul>
                    <li>Q10：你在学校里的身份是（可多选）</li>
                    <ul type="circle">
                        <li>学生组织干部</li>
                        <li>社团干部或成员</li>
                        <li>班干部</li>
                        <li>普通学生</li>
                    </ul>
                    <li>Q11：在与他人交往中，你认为自己的自信程度</li>
                    <ul type="circle">
                        <li>非常自信</li>
                        <li>比较自信</li>
                        <li>不大自信</li>
                        <li>自卑</li>
                    </ul>
                    <li>Q12：你会感到孤独或者缺乏关心吗</li>
                    <ul type="circle">
                        <li>经常</li>
                        <li>有时（网抑云时间）</li>
                        <li>几乎没有</li>
                    </ul>
                    <li>Q13：请将一下选项内容带给你的心理压力从大到小进行排序</li>
                    <ul type="circle">
                        <li>经济问题</li>
                        <li>恋爱问题</li>
                        <li>学业问题</li>
                        <li>家庭问题</li>
                        <li>人际交往问题</li>
                        <li>前途问题</li>
                    </ul>
                    <li>Q14：您是否会将积攒的压力在一定阶段后释放出来？如果有释放方式是什么？</li>
                    <ul type="circle">
                        <li>压力基本不会逐渐积累，一般会自然消散</li>
                        <li>会通过打游戏放松内心</li>
                        <li>会通过邀请朋友一同远足或者游玩，逛街释放压力</li>
                        <li>会通过参加一些社团活动，尽情挥洒汗水，高歌</li>
                        <li>会找朋友倾诉，同时也会倾听来自朋友的倾诉</li>
                    </ul>
                </ul>
              </CardContent>
            </Card>
          </Grid>


        </Grid>
      </Container>
    </>
  );
}
