// Get Slider Items |Array.from [ES6 Feature]
var SliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
var slidesCount = SliderImages.length;

// Set Current slide
var CurrentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// Previous And Next Buttons
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// Handle Click on Previous and next Buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Create the main ul element
var paginationElement = document.createElement("ul");

// Set ID on created ul element
paginationElement.setAttribute("id", "pagination-ul");

// Create list items based on slides count
for (var i = 1; i <= slidesCount; i++) {
    // create the li
    var paginationItem = document.createElement("li");

    // Set custom attribute
    paginationItem.setAttribute("data-index", i);

    // Set item content
    paginationItem.appendChild(document.createTextNode(i));

    // Append items to the main ul list
    paginationElement.appendChild(paginationItem);
}

// Add The created ul elemenet to the page
document.getElementById("indicators").appendChild(paginationElement);

// Get the new created ul
var paginationCreatedUl = document.getElementById("pagination-ul");

// Get pagination Items |Array.from [ES6 Feature]
var paginationsBullets = Array.from(
    document.querySelectorAll("#pagination-ul li")
);


// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function() {
        CurrentSlide = parseInt(this.getAttribute("data-index"));

        theChecker();

    }
}



// trigger the checker function
theChecker();

// Next Slide Function
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {
        // Do Nothing
        return false;

    } else {
        CurrentSlide++;
        theChecker();

    }
}

// Previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        // Do Nothing
        return false;
    } else {
        CurrentSlide--;
        theChecker();
    }
}

// create the checker function
function theChecker() {
    // set the slide number
    slideNumberElement.textContent =
        "Slide #" + CurrentSlide + " Of " + slidesCount;

    // Remove All active classes
    RemoveAllActive();

    // set ctive class on current slide
    SliderImages[CurrentSlide - 1].classList.add("active");

    // set active class on current pagination item
    paginationCreatedUl.children[CurrentSlide - 1].classList.add("active");

    // ckeck if current slide is the first
    if (CurrentSlide == 1) {
        // Add disabled class on previous button
        prevButton.classList.add("disabled");
    } else {
        // Remove disabled class on previous button
        prevButton.classList.remove("disabled");
    }

    // ckeck if current slide is the last
    if (CurrentSlide == slidesCount) {
        // Add disabled class on previous button
        nextButton.classList.add("disabled");
    } else {
        // Remove disabled class on previous button
        nextButton.classList.remove("disabled");
    }
}

// Remove All active classes from images andpagination Bullets
function RemoveAllActive() {
    // loop through images
    SliderImages.forEach(function(img) {
        img.classList.remove("active");
    });

    // loopTrough Pagination Bullets
    paginationsBullets.forEach(function(bullet) {
        bullet.classList.remove("active");
    });

}