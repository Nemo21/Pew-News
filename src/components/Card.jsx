import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import cardData from '../apiDummyData.json'

import './Card.css'


//Props include author-->displayed on top first letter on dot
//image--->news-mage height set to 194
//headline---> h6 variant given pass news headline
//subject---> actual news article
//date------>publishedAt date

export default function RecipeReviewCard() {

  const [data, setData] = useState(cardData.articles);

  return (
    <div className="card__container">
      {
        data && data.map((item) => (

        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {item.author !== null ? item.author[0] : " "}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={item.author !== null ? item.author : " "}
            subheader={item.publishedAt}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.urlToImage}
            alt="News-img"
          />
          <CardContent>
            <Typography variant='h6'>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
        ))
      }
    </div>
  );
}
