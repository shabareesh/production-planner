import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const PageHeader = () => (
    <div className="page-header">
        <AppBar position="static">
            <Typography variant="h6" noWrap>
                Production Planner
            </Typography>
        </AppBar>
    </div>
);

export default PageHeader;
