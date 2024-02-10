// Name: Zhanibek Kapen
// StudentID: 100861891
// Date: 2024-02-07

// Home Page
// Image
if (document.getElementById("helloImage") && document.getElementById("hello")) {
    var img = document.createElement("img");
    img.src = "./images/hello.gif";
    var containerImage = document.getElementById("helloImage");
    containerImage.appendChild(img);

    // Greetings Text
    var hello = document.createElement("div");
    hello.textContent="Welcome to my Home Page!!!";
    var container = document.getElementById("hello");
    container.appendChild(hello);
}
if (document.getElementById("productImage1") && document.getElementById("productText1")) {

    // Products Page
    // Image
    var img2 = document.createElement("img");
    img2.src = "./images/twelve_monkeys.jpeg";
    var container2 = document.getElementById("productImage1");
    container2.appendChild(img2);

    // Text
    var product1 = document.createElement("div");
    product1.textContent="I'm not a movie guy at all, but this one is one of my favourites. Twelve Monkeys is definietly specific and unique movie that is not similar to any others. It's old school movie with mind blowing plot twist. If you enjoy nonregular sci-fi, even kind of arthouse movies, you will definietly like this one. (By the way, young Brad Pitt also appeared there, I just thought it is worth mentioning..) ";
    var container3 = document.getElementById("productText1");
    container3.appendChild(product1);

    // Image
    var img3 = document.createElement("img");
    img3.src = "./images/drive.jpg";
    var container3 = document.getElementById("productImage2");
    container3.appendChild(img3);

    // Text
    var product2 = document.createElement("div");
    product2.textContent="I believe this movie doesn't need any introductions, since Drive is extremely popular and iconic movie(or at least I think so). However, in this case, I want to talk not about movie itself, but about its soundtrack. This movie has one of the best soundtracks ever. It has super chill and ambitient music. Best ones are 'Under Your Spell', 'A Real Hero', 'Nightcall'. You should definietly listen to them. Also, the movie also not bad. ";
    var container4 = document.getElementById("productText2");
    container4.appendChild(product2);

    // Image
    var img4 = document.createElement("img");
    img4.src = "./images/marcelo.jpg";
    var container4 = document.getElementById("productImage3");
    container4.appendChild(img4);

    // Text
    var product3 = document.createElement("div");
    product3.textContent=" Marcelo is my favourite soccer player of all time. I like his positive and optimistic energy, and the way he plays as a defender. He is invaluable part of the attack and has crazy dribbling skills while playing as a left back. I believe the duo of Marcelo and Ronaldo is one of the best ones in soccer. He also has interesting hairsyle ;)";
    var container5 = document.getElementById("productText3");
    container5.appendChild(product3);
}

if (document.getElementById("resumePDF")) {
    /**
     * Function to embed a pdf file in the web page.
     *
     * @param {string} pdfSrc - File directory source of the pdf file.
     * @param {string} containerId - The id of the container for pdf.
     */
    function embedPDF(pdfSrc, containerId) {
        var container = document.getElementById(containerId);
        var iframe = document.createElement('iframe');
        iframe.src = pdfSrc;
        container.appendChild(iframe);
    }
    // Declare needed variable and call the function.
    var containerId = 'resumePDF';
    pdfSrc ="./resume/resume.pdf";

    embedPDF(pdfSrc, containerId);
}
if (document.getElementById("aboutImage") && document.getElementById("aboutText")) {
        // Image
        var img5 = document.createElement("img");
        img5.src = "./images/me.jpg";
        var container6 = document.getElementById("aboutImage");
        container6.appendChild(img5);
    
        // Text
        var about = document.createElement("div");
        about.textContent="My name is Zhanibek Kapen, and I'm from Kazakstan. I currently study Computer Programming at Durham College. I'm interested in Web Development, that's why I'm keen on learning Javascript and its frameworks like Angular and etc. My hobbies usually watching some TV shows, playing video games such as Fifa with my friends, and listening to music. That was pretty briefly, but, anyways, nice to meet you!";
        var container7 = document.getElementById("aboutText");
        container7.appendChild(about);
}

document.addEventListener("DOMContentLoaded", function() {
    var productsLink = document.getElementById("product-navbar");
    if (productsLink) {
        productsLink.textContent = "Interests";
        
        var icon = document.createElement("i");
        icon.classList.add("fas","fa-eye");
        productsLink.appendChild(icon);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var newListItem = document.createElement("li");
    newListItem.classList.add("nav-item"); 


    var newLink = document.createElement("a");
    newLink.href = "#";
    newLink.textContent = "Human Resources";
    newLink.classList.add("nav-link"); 
    
    var icon = document.createElement("i");
    icon.classList.add("fas", "fa-user"); 
    
    newLink.appendChild(icon);
    
    newListItem.appendChild(newLink);
    
    var referenceListItem = document.querySelector("nav ul li:nth-child(5)"); 
    
    referenceListItem.parentNode.insertBefore(newListItem, referenceListItem);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var inputName = document.getElementById("nameInput").value;
        var inputEmail = document.getElementById("emailInput").value;
        var inputMessage = document.getElementById("messageInput").value;

        console.log("User's Name: "+ inputName + " User's Email:" + inputEmail + " User's Message: " + inputMessage);
        setTimeout(function() {window.location.href = "index.html";}, 3000); 
    })
})