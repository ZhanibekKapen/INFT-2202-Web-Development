$(document).ready(function () {
    console.log("jQuery is running!");
    // Injecting an H1 header into the header HTML element with an id of "header"
    $("#header").html("<h1>Welcome to our Travel Blog!</h1>");
  
    // Create Navigation Bar
    const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
    let navContent = "<ul>";
    $.each(categories, function (index, category) {
      // console.log(index);
      // console.log(category);
      navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
    });
    navContent += "</ul>";
    $("#navbar").html(navContent);
  
    window.loadCategoryContent = function (category) {
      console.log("loadCategoryContent function ran!");
      console.log(category);
      let content = `<h2>${category}</h2>`;
      content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
      $("#content").html(content);
  
      populateCarousel(category.toLowerCase());
    };
  
    const categoryImages = {
      beaches: [
        { alt: "Beach Sunset", src: "" },
        { alt: "Sandy Shore", src: "" },
        { alt: "Marina Resort", src: "" },
      ],
      mountains: [
        { alt: "Mountain Range", src: "" },
        { alt: "Snowy Peak", src: "" },
        { alt: "Hiking Trail", src: "" },
      ],
      cities: [
        { alt: "Parks", src: "./images/city1.jpg" },
        { alt: "Skysraper", src: "./images/city2.jpg" },
        { alt: "Night View", src: "./images/city3.jpg" },
      ],
      forests: [
        { alt: "Lone House in the Forest", src: "./images/forest1.jpg" },
        { alt: "Large Trees", src: "./images/forest2.jpg" },
        { alt: "River in the Forest", src: "./images/forest3.jpg" },
      ],
      deserts: [
        { alt: "Camels as a Transport", src: "./images/desert1.jpg" },
        { alt: "Cactuses in the Desert", src: "./images/desert2.jpg" },
        { alt: "Tent in the Desert", src: "./images/desert3.jpg" },
      ],
    };
    const categoryDescription = {
      cities: [
          "My favourite category of cities is Night View/Night City, since I love night time and it makes every city look so beautiful."
      ],
      forests: [
          "My favourite category is house in the forest, because I always wanted to try to live close to nature and forest."
      ],
      deserts: [
          "My favoutire categroy is tent in the deserts. I believe it shows that people can live and go through obstacles if they are together."
      ],
    };
    function populateCarousel(category) {
      console.log("populate carousel ran!");
      const images = categoryImages[category];
  
      // [].forEach(), [].map() -> 2 Array Iterator Method
      let carouselContent = images.map((image, index) => {
        return `<div class="carousel-item ${index == 0 ? "active" : ""}">
        <div class="image" style="background-image: url('${image.src}')">
        </div>
        <p>${image.alt}</p>
        </div>
        `;
        })
        .join("");
  
      $(`#${category}-carousel`).html(carouselContent);
  
      $(`#${category}-carousel`).append(`
      <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">&lt;</button>
      <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">&gt;</button>
      `);
    const categoryDesc = categoryDescription[category];
    let description = categoryDesc.map((desc) => desc);
    $(`footer`).html(`&copy; 2024 ${description}`);
    }
  
    window.moveCarousel = function (category, direction) {
      // debugger;
      let items = $(`#${category}-carousel .carousel-item`);
  
      let activeIndex = items.index(items.filter(".active"));
  
      let newIndex = activeIndex + direction;
  
      if (newIndex >= items.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = items.length - 1;
      }
      items.removeClass("active");
      items.eq(newIndex).addClass("active");
    };
  });
  
  // ICE 5 Tasks:
  // 1.Populate Cities, Forests & Deserts
  // 2. Add 3 images to the Cities & Deserts (Optionally, you may add images for the rest of the categories)
  // 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.
  
  // DUE Monday February 19th at 11:59 PM