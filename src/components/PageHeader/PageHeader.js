import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const PageHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" noWrap>
        Production Planner
      </Typography>
    </Toolbar>
  </AppBar>
);

export default PageHeader;
