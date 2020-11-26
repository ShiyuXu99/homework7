function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;

    // Your code here.
    if(document.getElementById("location").value != ''){
        location = document.getElementById("location").value;
    }
    else{
        location = "Ann Arbor";
    }
    console.log("Location is : " + location);


    //set default temperature format if one isn't provided
    let format;
    // Your code here.
    format = "imperial";
    if(document.getElementById('fahrenheit').checked) {
        format = "imperial";
    }else if(document.getElementById('celcius').checked) {
        format = "metric";
    }
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.
    console.log(parseInt(location));
    let key = "8ccd6d62d04e20122a6ac7acf61a11b5";
    if(Number.isInteger(parseInt(location))){
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&units=" + format +"&appid=" + key;

    }
    else{
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format +"&appid=" + key;
    }

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json);
        console.log(json.main.temp);

        let imageID = json.weather[0].icon;
        tempImg= "http://openweathermap.org/img/wn/" +imageID + ".png";
        document.getElementById('tempImg').src = tempImg;
        document.getElementById("forecast").style.display = "block";
        document.getElementById("loc").innerHTML = json.name;
        document.getElementById("temp").innerHTML = json.main.temp + " with " + json.weather[0].description;
    });
}
