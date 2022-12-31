import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import keep from '@mui/material/my_images/keep.jpg';

export default function ActionAreaCardK() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={keep}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" align="center">
            平均健身时长
          </Typography>
          <Typography gutterBottom variant="h4" component="div" align="center">
            5.12h/周
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
