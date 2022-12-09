import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Button, CardActions } from "@material-ui/core";
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (

          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
            key={id}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
           Rs-{price}
           
            <Typography variant="body2" color="text.secondary">
             {desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button  variant="contained" color="primary">BUY</Button>
            
          </CardActions>
        </Card>
    
    /*
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h5 className="price">Rs{price}</h5>
              </header>
             
              <p className="item-text">{desc}</p>
            </div>
          </article>
          */
        );
      })}
    </div>
  );
};

export default Menu;
