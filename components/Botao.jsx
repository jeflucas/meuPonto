import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Botao() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button>Segunda-Feira</Button>
        <Button>Terça-Feira</Button>
        <Button>Quarta-Feria</Button>
        <Button>Quinta-Feria</Button>
        <Button>Sexta-Feria</Button>
      </ButtonGroup>
    </div>
  );
}
