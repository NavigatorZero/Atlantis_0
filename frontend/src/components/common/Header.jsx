import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsEmpty, Map } from "react-lodash"
import { AppBar, Toolbar, Typography, makeStyles, Button, MenuItem, Link } from "@material-ui/core";
import { Paper } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { MainActions } from '../../actions/MainActions';

const headersData = [
  {
    label: "Контакты",
    href: "/contacts",
    menuPos: "left",
    workspace: "contacts"
  },
  {
    label: "Консультация",
    href: "/consult",
    menuPos: "left",
    workspace: "consult"
  },
  {
    label: "Регистрация",
    href: "/regestration",
    style: "leftMenu",
    menuPos: "right",
    workspace: "regestration"
  },
  {
    label: "Войти",
    href: "/logout",
    style: "leftMenu",
    menuPos: "right",
    workspace: "logout"
  },
];

const leftMenu = headersData.filter(menuItem => menuItem.menuPos === "left");
const rightMenu = headersData.filter(menuItem => menuItem.menuPos === "right");

export default function Header() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.mainPage);

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
    return menuItems.map((item ) => {
      return (
        <Grid item key={item.label}>
          <Button className="header__links" style={{ textTransform: 'none' }}
            {...{
              key: item.label,
              color: "inherit",
              component: RouterLink,
              onClick: () =>dispatch(MainActions.checkMainPage(item.workspace))
            }}
          >
            {item.label}
          </Button>
        </Grid>
      );
    });
  };

  return (
      <AppBar className="header" position="sticky">{displayDesktop()}</AppBar>
  );
}