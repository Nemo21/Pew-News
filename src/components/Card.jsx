import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import './Card.css'


//Props include author-->displayed on top first letter on dot
//image--->news-mage height set to 194
//headline---> h6 variant given pass news headline
//subject---> actual news article
//date------>publishedAt date

export default function RecipeReviewCard(props) {

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props?.author}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={props.author}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="News-img"
      />
      <CardContent>
        <Typography variant='h6'>
            {props.headline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.subject}
        </Typography>
      </CardContent>
    </Card>
  );
}
