# Open Trials Report
Using Open Trials API to generate reports based on user search queries.

I also deployed the app at https://opentrialsreport.com/. You can find a breif tutorial here: https://www.youtube.com/watch?v=fAbm97yQwFM&feature=share.

## Description
This is a client side app thats lets the user search for articles through the Open Trials API. The user can search any query, select the number of items they'd like to see, and view them in a systematic way. There is also the ability to print to PDF each of the reports.

## Instructions
1- $ yarn install
2- $ yarn start

## Assumptions
The site is not currently optimized for mobile, so when viewing on smaller devices, there may be some issues with text and links in particular running past the search result card's boundary. I also assumed that the individual querrying is not interested in saving their session, hence the reason for the print to pdf function. 

## Links
opentrialsreport.com

## Technologies Used
-JS
-React
-JSX
-HTML/CSS
-yarn
-REST API

## Future
I'll definitely work to make the site more mobile friendly, so that users can have a great experience on the go. Additionally, there could be a way to show icons instead of text in some of the fields (e.g. status, target_sample_size), this would make better use of space.

The search functionality can be given more filters, so that specific fields are required (e.g. location === USA, status === active).  

Update 4/18/19
Updated cards to show in grid form instead of list.