// Name: Zhanibek Kapen
// StudentID: 100861891
// Date: 2024-03-20

// Blog Page

$(document).ready(async function(){
    try{
        // Fetch Blog detials (titele and body)
        let blogDetails = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let blog = await blogDetails.json();

        // Fetch Image
        var API_KEY = '43007964-82946e39c0d7e18d466717d13';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('buildings');

        let response = await fetch(URL);
        let images = await response.json();
        
        let blogHTML = "";
        let imageSource = "";
        /**
         * This is for loop that generates 20 posts. It uses fetched API data created above, and takes text and images from them.
         */
        for (let i = 0; i < 20; i++){
            // Get images source
            if (parseInt(images.totalHits) > 0 ){
                imageSource = images.hits[i].webformatURL; 
            }
            else{
                console.log("No images found :(((");
            }

            // Create card for each post, also add fetched text data and image
            let post = blog[i];
            blogHTML += `<div class="card border-light text-white bg-dark mb-3" style="width: 60rem; height: 33rem; margin-left: 25px;">
            <div class="card-header">Post ${i+1}</div>
            <div class="card-body ">
                <h5 class="card-title" style ="margin-bottom: 15px;">${post.title}</h5>
                <img class="card-img-top" src="${imageSource}" alt="image" style = "width: 400px; height: 350px;">
                <p class="card-text" style ="margin-top: 15px;">${post.body}</p>
            </div>
            </div>`
        };
        document.getElementById("blog-details").innerHTML = blogHTML;
    }
    catch(error){
        document.getElementById("blog-details").innerHTML = "Super unexpected error occured. Please try again :(";
    }
})