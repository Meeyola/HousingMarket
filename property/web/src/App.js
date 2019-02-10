import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Paper className="header-instructions instructions">
          <Typography variant="h3">INSTRUCTIONS</Typography>
          <p>
            The task here is to create an interactive dashboard for exploring Wine Reviews data, as per the
        Kaggle data set available here: <a href="https://www.kaggle.com/zynicide/wine-reviews">https://www.kaggle.com/zynicide/wine-reviews</a>.
        </p>

          <p>
            To complete this task, you will need to write Three components:
        </p>
          <ol>
            <li>A line chart</li>
            <li>A table</li>
            <li>A bar chart</li>
          </ol>
          <p>
            Each of these components will provide the ability to filter the data for the rest of the components,
            so that clicking a dimension from one component should update the other components.  There should also
            be functionality to clear the filters to go back to showing data without that filter applied.
        </p>
          <p>
            We would like you to use the <a href="https://nivo.rocks/about">Nivo chart library</a>, which is build on
            top of d3.
        </p>
          <p>
            This page uses Material UI for layout and basic components.  See documentation at <a href="https://material-ui.com">https://material-ui.com</a>

          </p>

          <p>
            The CSV data file containing the wine reviews is located here:
              <pre>wine\public\data\winemag-data_first150k.csv</pre>
          </p>
          <p>
            You will need to build basic functionality to query this file, either in middleware (E.g. NodeJS)
            or on the front end.
          </p>

        </Paper>

        <div className="dashboard">
          <Grid container spacing={24}>
            <Grid item md={12} className="grid-cell-line-chart">
              <Paper className="instructions bg-paper dashboard-component">
                <Typography variant="title">AVERAGE RATING BY YEAR</Typography>
                <p className="component-instructions">
                  Create a Line chart showing <b>Average rating by Year</b>.  Each point ("Year") on the chart
                  should be clickable, filtering the other components to only include wine reviews from that
                  particular year.
              </p>

                <p className="component-instructions">
                  Please ensure that this component is in its own file, with its own styling.
              </p>
              </Paper>
            </Grid>

            <Grid item md={6} className="grid-cell-table">
              <Paper className="bg-paper dashboard-component">
                <Typography variant="title">AVERAGE RATING BY COUNTRY</Typography>
                <p className="component-instructions">
                  Create a Table here, showing <b>Average rating by Country Here </b>.  Each row
                  contain information about the country that produced the wine, where the name of
                  the Country is clickable, and serves as a filter for the other components on the page.
              </p>
                <p className="component-instructions">
                  Please ensure that this component is in its own file, with its own styling.
              </p>
              </Paper>
            </Grid>

            <Grid item md={6} className="grid-cell-bar-chart">

              <Paper className="bg-paper dashboard-component">
                <Typography variant="title">AVERAGE RATING BY VARIETY</Typography>
                <p className="component-instructions">
                  Create a <b>Bar Chart</b> here, showing <b>Average rating by Variety here </b> (e.g. "Cabernet Sauvignon", "Pinot Noir", "Chardonay", etc).
              Each bar should also be clickable, which filters the other components on the screen</p>
                <p className="component-instructions">
                  Please ensure that this component is in its own file, with its own styling.
              </p>
              </Paper>
            </Grid>
          </Grid>




        </div>
      </div>
    );
  }
}

export default App;
