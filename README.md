# FAN-OOP-LAB1
LAB1 JavaScript2
1. Create a single HTML page using the editor of your choice. Name this page using the following
template: your first name followed by an underscore and then “Lab1”. For example, “Oscar_Lab1.html”.
2. Use the following template as a starting point for your page:
<html>
<head>
<title>Page Title Here</title>
<script language="JavaScript" type="text/JavaScript">
</script>
</head>
<body>
</body>
</html>
3. Code a JavaScript constructor function called VideoType that will handle the following set of properties:
title (string)
category (string)
cast (array)
price (number)
qty (number)
length (number)
4. Include a JavaScript method called changeQtyBy which takes one parameter; a value which is a single
integer (either positive or negative) and this integer value updates the current object “qty” property by
either adding or subtracting units based on whether the value of the parameter passed over to the
method is positive or negative. 
5. Add a second method called getCast which takes no parameters but returns an array of all cast
members for the current video.
6. Create an “onload” event handler which will call a JavaScript function named “StartMeUp” and within
“StartMeUp” create an empty array called videos. Do all the rest of the steps from within “StartMeUp”
7. Using the sample data listed below and your constructor function, create 2 new video objects as the
first 2 elements in the array (videos[0] and videos[1]).
8. Add 2 more objects to the array using data of your own choice.
9. Add more JavaScript code to the end of the “StartMeUp” function to add 5 units to the qty property for
all videos. You must use a for loop to do this.
10. Finally, use document.write to print out all the properties for all the video objects in the videos array.
You must use a for loop to do this.
11. Submit your zipped HTML page solution to the Lab 1 folder. 