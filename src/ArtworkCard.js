import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ArtworkCard() {
  return (
    <Card
      className="card"
      elevation={2}
      sx={{ maxWidth: 345, borderRadius: "2.5rem" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://www.artic.edu/iiif/2/a913e5bf-7f0c-a149-6567-cc491eaf3fbb/full/843,/0/default.jpg"
          alt=""
        />
        <CardContent>
          <Typography
            className="card-title"
            gutterBottom
            variant="h5"
            component="div"
          >
            Autumn River (Qiujiang), 1998
          </Typography>
          <Typography
            className="card-artist"
            variant="body2"
            color="text.secondary"
          >
            Mo Ce
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
