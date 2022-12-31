import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import run from '@mui/material/my_images/run.jpg';

export default function ActionAreaCardR() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={run}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" align="center">
            平均跑量
          </Typography>
          <Typography gutterBottom variant="h4" component="div" align="center">
            23.37k/周
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
