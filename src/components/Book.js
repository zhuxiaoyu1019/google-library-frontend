import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import API from "../utils/API";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
    width: "90%",
    maxWidth: "none",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btnGroup: {
    margin: "3px",
  },
}));

export default function Book({
  id,
  title,
  authors,
  description,
  image,
  link,
  displaySavedBooks,
}) {
  const classes = useStyles();
  const location = useLocation();

  const handleBookSave = () => {
    const newBook = {
      title,
      authors,
      description,
      image,
      link,
    };
    API.saveBook(newBook)
      .then(() => displaySavedBooks())
      .catch((err) => console.log(err));
  };

  const handleBookDelete = (id) => {
    API.deleteBook(id)
      .then(() => displaySavedBooks())
      .catch((err) => console.log(err));
  };

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt={title} src={image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container spacing={2}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Written by {authors.join(", ")}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              target="_blank"
              href={link}
              className={classes.btnGroup}
            >
              View
            </Button>
            {location.pathname === "/saved" ? (
              <Button
                variant="contained"
                color="secondary"
                className={classes.btnGroup}
                onClick={() => handleBookDelete(id)}
              >
                Delete
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/saved"
                className={classes.btnGroup}
                onClick={() => handleBookSave()}
              >
                Save
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
