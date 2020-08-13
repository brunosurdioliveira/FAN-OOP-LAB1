// Constructor
function VideoType(title, category, cast, price, qty, length) {
    this.title = title;          // String
    this.category = category;    // String
    this.cast = cast;            // Array
    this.price = price;          // Number
    this.qty = qty;              // Number
    this.length = length;        // Number

    // Methods
    // Add or Subtract "number" depending of the number's signal to the qty
    this.changeQtyBy = function (number) {
        return this.qty += number;
    }

    // This method will return the cast array of the current video
    this.getCast = function () {
        return this.cast;
    }
}

// Empty array
var videos = [];

// Beggining of StartMeUp function
function StartMeUp() {
    // Adding data required to videos array (videos[0] and videos[1])
    videos.push(new VideoType("Rogue One", "SciFi", ["Felicity Jones", "Mads Mikkelsen", "Riz Ahmed"], 28.95, 17, 133));
    videos.push(new VideoType("Arrival", "SciFi", ["Amy Adams", "Jeremy Renner"], 27.95, 6, 118));

    // Adding data of my own choice to the videos array
    videos.push(new VideoType("Twilight", "Drama", ["Kristen Stewart", "Robert Pattinson"], 9.99, 20, 122));
    videos.push(new VideoType("Avengers: Endgame", "Action", ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"], 19.94, 10, 181));

    // Add 5 more units to the quantity property for all videos - using .forEach loop
    videos.forEach(function (video) {
        return video.changeQtyBy(5);
    });

    // Adding the videos to the dynamic table (using .forEach() loop)
    videos.forEach(function (video) {
        // Create the table row for the table data
        var trBody = document.createElement("tr");

        // Create table data for each of the properties 
        var tdTitle = document.createElement("td");
        var tdCategory = document.createElement("td");
        var tdCast = document.createElement("td");
        var tdPrice = document.createElement("td");
        var tdQty = document.createElement("td");
        var tdLength = document.createElement("td");

        // Adding the Object data to the table
        tdTitle.textContent = video.title;
        tdCategory.textContent = video.category;
        tdCast.height = "50px"; // Ajusting the height of this collumn 
        tdCast.innerHTML = video.getCast().join('<br>'); // using array.join('<br>') property to break line after each element
        // Changed .textcontent to .innerHTML in order to recognize the tag '<br>'
        tdPrice.textContent = "$" + video.price;
        tdQty.textContent = video.qty;
        tdLength.textContent = video.length;

        // Appending td to the tr
        trBody.appendChild(tdTitle);
        trBody.appendChild(tdCategory);
        trBody.appendChild(tdCast);
        trBody.appendChild(tdPrice);
        trBody.appendChild(tdQty);
        trBody.appendChild(tdLength);

        // Selecting tbody of the html code
        var tbody = document.querySelector("tbody");
        // Appending trbody to tbody 
        tbody.appendChild(trBody);
    })
} // End of the Function