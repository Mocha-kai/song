import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
const CardMui = ({ title, text, img }: { title: string; text: string; img: string }) => {
  return (
    <Card sx={{ height: "400px", width: { xs: "400px", sm: "600px", md: "800px" } }}>
      <CardMedia sx={{ height: "240px", xs: { display: "none" } }} image={img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
export default CardMui;

const CardSx = {
  height: "400px",
  maxWidth: "800px",
};
