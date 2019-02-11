
#Instructions#

Please install the following dependencies:
 - Dotnet Core SDK (v2.2.103) from https://dotnet.microsoft.com/download
 - Node.js from (v10.15.1) https://nodejs.org/en/

We also ask that you install "Hyper Model", which will host all the bits and pieces (API's, react-create-app, etc) required to get the environment up and running.

This can be installed by executing the following in a command prompt:

> dotnet tool install GrowingData.HyperModel.App.Local -g --add-source https://www.myget.org/F/hyper-model/auth/7f6e4453-b898-43dd-8e09-9a6d90eb64a6/api/v3/index.json --version 1.0.29-alpha
 
You will then need to clone the task from Gitlab:

> git clone https://gitlab.com/growingdata.hiringtasks/melbourne-property.git

This should create a new directory called "melbourne-property".  If you then execute the following commands, the project should start up, download the source data and host your React App.

cd melbourne-property
hyper_model project run

If this is successful you should see a bunch of console output, and you should be able to visit:
http://localhost:8000/ and see a nice looking dashboard.

This page also contains the further instructions for the dashboard that you are to build, including the key components.

The code that you need to edit / modify is all located within ./melbourne-property/property/web/src which is essentially a slightly modified React Create App based template.

#The task

Create an interactive dashboard for exploring Melbourne Property Data, as per the Kaggle data set available here: https://www.kaggle.com/anthonypino/melbourne-housing-market.

To complete this task, you will need to write Three components:
 - A line chart (showing average sale price by year)
 - A table (showing average sale price by suburb)
 - A bar chart (showing average sale price by number of rooms)
 
Each of these components will provide the ability to filter the data for the rest of the components, so that clicking a dimension from one component should update the other components. There should also be functionality to clear the filters to go back to showing data without that filter applied.  

You may manage the current state of the front end using whatever technology you are most comfortable with.

Stretch goals:
 - The following are some additional goals that you may wish to implement in addition to the core task above:
 - Enable toggling of showing "Average Price" and "Number of Properties sold"
 - Modify the API sql to also include the ability to show "Total Sales Price" (located in ./property/models/api)
 - Include loading animations
 - Create additional components
 - Add
