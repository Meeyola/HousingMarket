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
          <Typography variant="h4">INSTRUCTIONS</Typography>
          <p>
            The task here is to create an interactive dashboard for exploring Melbourne Property Data, as per the
        Kaggle data set available here: <a href="https://www.kaggle.com/anthonypino/melbourne-housing-market">https://www.kaggle.com/anthonypino/melbourne-housing-market</a>.
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
          <Typography variant="title">CHARTING LIBRARY</Typography>
          <p>
            We would like you to use the <a href="https://nivo.rocks/about">Nivo chart library</a>, which is build on
            top of d3.
        </p>
          <Typography variant="title">UI LIBRARY</Typography>
          <p>
            This page uses Material UI for layout and basic components.  See documentation at <a href="https://material-ui.com">https://material-ui.com</a>

          </p>

          <Typography variant="title">DATA API</Typography>
          <p>
            You can make HTTP requests to get summary statistics from the local servers API at the following URLs:
          </p>
          <p>
            All yearly sales data (Grouped by Year):<br />
            <a href="http://localhost:8000/app/property/api/sales_by_year/get">http://localhost:8000/app/property/api/sales_by_year/get</a> <br />

            Sales data (Grouped By Suburb):<br />
            <a href="http://localhost:8000/app/property/api/sales_by_suburb/get">http://localhost:8000/app/property/api/sales_by_suburb/get</a> <br />

            Sales data (Grouped By Bedrooms):<br />
            <a href="http://localhost:8000/app/property/api/sales_by_rooms/get">http://localhost:8000/app/property/api/sales_by_rooms/get</a><br />
          </p>
          <p>
            All the endpoints listed above will also accept the following parameters:

          </p>
          <p>
            <b>year</b>: Limit the calculation to sales in the given year<br />
            <b>suburb</b>: limit the calculation of sales to the given suburb<br />
            <b>rooms</b>: limit the calculation of sales to the given number of rooms<br />

            eg:<br />
            <a href="http://localhost:8000/app/property/api/sales_by_suburb/get?year=2017&suburb=Kew">http://localhost:8000/app/property/api/sales_by_suburb/get?year=2017&amp;suburb=Kew</a> <br />
          </p>

        </Paper>

        <div className="dashboard">
          <Grid container spacing={24}>
            <Grid item md={12} className="grid-cell-line-chart">
              <Paper className="instructions bg-paper dashboard-component">
                <Typography variant="title">AVERAGE PRICE BY YEAR</Typography>
                <p className="component-instructions">
                  Create a Line chart showing <b>Average Sales Price  by Year</b>.  Each point ("Year") on the chart
                  should be clickable, filtering the other components to only include properties from that
                  particular year.
              </p>

                <p className="component-instructions">
                  Please ensure that this component is in its own file, with its own styling.
              </p>
              </Paper>
            </Grid>

            <Grid item md={6} className="grid-cell-table">
              <Paper className="bg-paper dashboard-component">
                <Typography variant="title">AVERAGE PRICE BY COUNTRY</Typography>
                <p className="component-instructions">
                  Create a Table here, showing <b>Average sales price</b>.  Each row
                  contain information about the suburb of the sold property, where the name of
                  the Suburb is clickable, and serves as a filter for the other components on the page (e.g. clicking
                  on "Kew" would limit the line chart &amp; bar chart to only include properties from Kew).
              </p>
                <p className="component-instructions">
                  Please ensure that this component is in its own file, with its own styling.
              </p>
              </Paper>
            </Grid>

            <Grid item md={6} className="grid-cell-bar-chart">

              <Paper className="bg-paper dashboard-component">
                <Typography variant="title">AVERAGE PRICE BY ROOMS</Typography>
                <p className="component-instructions">
                  Create a <b>Bar Chart</b> here, showing <b>Average Sales price by Number of Rooms here </b> (e.g. 1, 2, 3, etc).
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
