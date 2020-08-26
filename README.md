# Search Google Books App | Lab 11 - 14 | Code Fellows 301

**Author**: Tif Taylor  
**Version**: 1.6.0  
**Heroku URL**: [https://tiftaylor-booklist.herokuapp.com/](https://tiftaylor-booklist.herokuapp.com/)


## Overview
For Code Fellows 301 Week 3, we are creating a mobile first, full-stack application that searches Google's books API. It includes the ability to search the Google Books API, add books to a database, and render the books from a PostgreSQL database to the client. It will also have the ability to update details of a book or remove it from a collection.

## Getting Started
- Create your own GitHub Repo and build out the base files seen in this repo such as the .env, .gitignore, etc.
- Create the server
- Deploy the site somewhere, like Heroku
- Use the Google Books API: [Getting Started](https://developers.google.com/books/docs/v1/getting_started)


## Architecture
HTML > CSS > JavaScript > Express > Node.js > Superagent pkg > EJS pkg > Google Books API

**schema.sql** | Table name: books
  - id - serial primary key
  - author - author name
  - title - title of the book
  - isbn - the ISBN number associated with the title
  - image_url - an image of the book cover
  - description - a summary of what the book is about


## Change Log
08-25-2020 ??pm - ?? 
08-24-2020 11:30pm - Added CSS & index.ejs is homepage via "/"  
08-24-2020 9:20pm - Added catch for error of app  
08-24-2020 7:20pm - Sucessfully render search results from API    
08-24-2020 4:30pm - Set up form for search page  
08-24-2020 4:00pm - Connected to server, set up index and base css, installed pkgs, set up Heroku  
08-24-2020 3:00pm - GitHub Repo Established and base files scaffolded     

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
- For solving the http to https I used this [StackOverflow Post](https://stackoverflow.com/questions/5491196/rewriting-http-url-to-https-using-regular-expression-and-javascript/5491311)
- To help understand sticky footer, I used this persons [notes](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/) on github


## User Acceptence Time Estimate Tests
>Number and Name of Feature: #1 Lab 11 | Set up server and create base html    
>Estimated time to complete: 45 minutes       
>Start time: 3:30 PM | End time: 4:00 PM        
>Actual time needed to complete: 30 minutes     

>Number and Name of Feature: #2 Lab 11 | Search the API    
>Estimated time to complete: 1 hour      
>Start time: 4:00 PM | End time: 4:30 PM      
>Actual time needed to complete: 30 minutes   

>Number and Name of Feature: #3 Lab 11 | Browse search results      
>Estimated time to complete: 1 hour        
>Start time: 4:30PM | End time: 7:20 PM        
>Actual time needed to complete: 3 hours and 20 minutes   

>Number and Name of Feature: #4 Lab 11 | Error messages 
>Estimated time to complete: 15 minutes    
>Start time: 9:00 PM | End time: 9:20 PM    
>Actual time needed to complete: 20 minutes

>Number and Name of Feature: #5 Lab 11 | Clean up UI  
>Estimated time to complete: 1 hour       
>Start time: 9:20 PM | End time: 11:30 PM        
>Actual time needed to complete:  2 hours  

>Number and Name of Feature: #6 Lab 11 | Create index.ejs Homepage   
>Estimated time to complete: 5 minutes         
>Start time: 11:30 PM | End time: 11:35 PM          
>Actual time needed to complete: 5 minutes    

>Number and Name of Feature: #1 Lab 12 | ??  
>Estimated time to complete: 45 minutes         
>Start time: ?? PM | End time: ?? PM          
>Actual time needed to complete: 