# Search Google Books App | Lab 11 - 14 | Code Fellows 301

**Author**: Tif Taylor  
**Version**: 3.2.0  
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
08-26-2020 5:22pm - Ability to delete a book from the details view     
08-26-2020 4:45pm - Ability to update book details to user preference  
08-25-2020 10:00pm - Added CSS, including hamburger and final touches  
08-25-2020 8:15pm - Cleaned up code and added Partials via Layout dir  
08-25-2020 8:00pm - Ability to save a book to their local db   
08-25-2020 7:00pm - View Details functionaity, path and render    
08-25-2020 6:20pm - Saved Books Query & Render   
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
- To grab the newest ID to load the result saved from the database, I used this [documentation](https://www.postgresql.org/docs/9.6/dml-returning.html) about RETURNING   
- Bulk of Hamburger specific CSS credit: [Erik Terwan](https://codepen.io/erikterwan/pen/EVzeRP). However, I did a lot of manual adjusting for my app use like removing his animation, adjusting positioning to suit my app, etc. 
- Button transition animation I used [this SO post](https://stackoverflow.com/questions/9670075/css-transition-shorthand-with-multiple-properties)  
- To recall how to remove a class using vanilla JS I used this [SO Post](https://stackoverflow.com/questions/51992229/how-can-i-add-remove-class-on-a-second-element-with-vanilla-js)


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

>Number and Name of Feature: #1 Lab 12 | Saved Books Query & Render  
>Estimated time to complete: 45 minutes           
>Start time: 5:20 PM | End time: 6:20 PM            
>Actual time needed to complete: 1 hour  

>Number and Name of Feature: #2 Lab 12 | View Details Functionality    
>Estimated time to complete: 2 hours               
>Start time: 6:30 PM | End time: 7:00 PM                
>Actual time needed to complete: 30 minutes    

>Number and Name of Feature: #3 Lab 12 | View Details Functionality        
>Estimated time to complete: 1 hour                   
>Start time: 7:00 PM | End time: 8:00 PM                    
>Actual time needed to complete: 1 hour   

>Number and Name of Feature: #4 Lab 12 | Cleanup & Layout          
>Estimated time to complete: 30 minutes                     
>Start time: 8:00 PM | End time: 8:15 PM                      
>Actual time needed to complete: 15 minutes   

>Number and Name of Feature: #5 Lab 12 | Cleanup & Layout            
>Estimated time to complete: 30 minutes                       
>Start time: 8:15 PM | End time: 10:15 PM                          
>Actual time needed to complete: 2 hours   

>Number and Name of Feature: #1 Lab 13 | Update Details            
>Estimated time to complete: 1.5 hours                       
>Start time: 1:45 PM | End time: 4:45 PM                          
>Actual time needed to complete: 3 hours

>Number and Name of Feature: #2 Lab 13 | Delete Book            
>Estimated time to complete: 1 hours                        
>Start time: 5:00 PM | End time: 5:22 PM                            
>Actual time needed to complete: 22 minutes   