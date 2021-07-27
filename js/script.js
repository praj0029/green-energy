/**
 * ALL VARIABLES
 */

/* Completing data object that store the dynamic content.
Data object has sub-objects. Every sub-object have the following
properties headingContent, bodyText, imgUrl and imgAlt. */
const data = {
    "solution-1": {
        headingContent: 'Tax Credits',
        bodyText: 'Providing tax credits to those who invest in and produce renewable energy sources would generate a willingness to transition to energy efficient resources like solar and wind power.',
        imgUrl: './img/piggy-bank-on-money.jpg',
        imgAlt: 'Piggy Bank on Top of Money'
    },
    "solution-2": {
        headingContent: 'Federal Assistance Funds',
        bodyText: 'Many governments assist lower-income communities and organizations with funds already. Now, they’re investing in renewable energy sources and energy efficient systems to bring lower energy costs and increased public welfare.',
        imgUrl: './img/money-in-hand.jpg',
        imgAlt: 'Money on Hand'
    },
    "solution-3": {
        headingContent: 'Community Solar',
        bodyText: 'A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy costs.',
        imgUrl: './img/solar-panel.jpg',
        imgAlt: 'Solar Panel'
    }
}

// Get all buttons in a NODE LIST of buttons (array like structure)
let buttons = document.getElementsByClassName("solution-btn");

// Get the reference to your HTML-container
// that will be dynamically loaded from the resource-object.
let solutionWrapper = document.getElementById('solution-wrapper');


/**
 * FUNCTIONS
 */

// Load your images on page-load
function preloader() {

    const imagesPaths = [
        "./img/piggy-bank-on-money.jpg",
        "./img/money-in-hand.jpg",
        "./img/solar-panel.jpg"
    ];

    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

function contentInitialLoad() {
    console.log("Load Inital COntent");
    
    // set the id attribute on first button
    buttons[0].setAttribute('id', 'active-btn');

    // set html content by retrieving the data properties of first button
    let intialContent = `<h2>${data['solution-1'].headingContent}</h2>
                    <img src="${data['solution-1'].imgUrl}" alt="${data['solution-1'].imgAlt}">
                    <p>${data['solution-1'].bodyText}</p>`;
    
    // load the html content         
    document.getElementById("solution-content-wrapper").innerHTML = intialContent;
}

/* 
 * HandleSelection is the event-handler function responsible for
 * updating the css style of clicked button and updating the main content based 
 * on the button being clicked 
*/
function handleSelection( ev ){
    // save the clicked button
    let clickedButton = this;

    // Removing the attribute id from the clicked button
    for (let i = 0; i < buttons.length; i++) {

        // Remove "id" attribute if the clicked button had "id" attribute
        if( buttons[i].hasAttribute('id')){
            buttons[i].removeAttribute("id");
        };
        
    }

    // Set the id active-button to the currently clicked button.
    clickedButton.setAttribute('id', 'active-btn');

    // Dataset attribute is used to saved the id of data to easily
    // retrieve the data from the data object
    let dataID = this.dataset.id;
    let contentObj = data[dataID];

    // set html connent by retrieving the data properties
    let htmlContent = `<h2>${contentObj.headingContent}</h2>
                       <img src="${contentObj.imgUrl}" alt="${contentObj.imgAlt}">
                       <p>${contentObj.bodyText}</p>`;

    // set the html content to the new html content
    document.getElementById("solution-content-wrapper").innerHTML = htmlContent;
}

window.onload =  function(){
    preloader();
    contentInitialLoad();
};
 
// Register all the buttons to click event
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection, false);
}
