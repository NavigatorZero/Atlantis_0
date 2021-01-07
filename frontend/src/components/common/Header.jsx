import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsEmpty, Map } from "react-lodash"
import { AppBar, Toolbar, Typography, makeStyles, Button, MenuItem, Link } from "@material-ui/core";
import { Paper } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


const headersData = [
  {
    label: "Контакты",
    href: "/contacts",
    menuPos: "left",
    workspace: "test"
  },
  {
    label: "Консультация",
    href: "/consult",
    menuPos: "left",
    workspace: "test"
  },
  {
    label: "Регистрация",
    href: "/registration",
    style: "leftMenu",
    menuPos: "right",
    workspace: "test"
  },
  {
    label: "Войти",
    href: "/logout",
    style: "leftMenu",
    menuPos: "right",
    workspace: "test"
  },
];

const leftMenu = headersData.filter(menuItem => menuItem.menuPos === "left");
const rightMenu = headersData.filter(menuItem => menuItem.menuPos === "right");

export default function Header() {

  const displayDesktop = () => {
    return (
      <Toolbar className="header">
        <Grid container spacing={3}>
          <Grid item container xs={5} spacing={5} justify="flex-start" alignItems="center" >
            {getMenuButtons(leftMenu)}
          </Grid>
          <Grid item container xs={2}>
            {getLogo()}
          </Grid>
          <Grid item container xs={5} spacing={5} justify="flex-end" alignItems="center">
            {getMenuButtons(rightMenu)}
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const getLogo = () => {
    return ( 
      <Grid item >
          <Link className="header__logo" underline="none" href="/">
        <div className="header__logo__main">
          КАПИТАЛ
      </div>
        <div className="header__logo__sub">
          Бухгалтерская школа
     </div>
     </Link>
      </Grid>
    );
 
  };

  const getMenuButtons = (menuItems) => {
    return menuItems.map(({ label, href }) => {
      return (
        <Grid item key={label}>
          <Button className="header__links" style={{ textTransform: 'none' }}
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
            }}
          >
            {label}
          </Button>
        </Grid>
      );
    });
  };

  return (
      <AppBar className="header" position="sticky">{displayDesktop()}</AppBar>
  );
}