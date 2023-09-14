let myString = "Hello, World!";

    // Function to update the displayed string
    function updateString() {
        const outputElement = document.getElementById("output");
        outputElement.textContent = myString;
        requestUrl = `https://api.unsplash.com/search/photos?query=${myString}&client_id=gAgq5E2UC1ULfBI8V52OS0j85IERbLVk8uIHbTCAd3E`
    }

    // Add a click event listener to the button
    const changeButton = document.getElementById("changeButton");
    changeButton.addEventListener("click", () => {
        // Change the value of the string variable
        myString = inputField.value;
        console.log(myString);

        // Update the displayed string
        updateString();
    });

    let requestUrl = `https://api.unsplash.com/search/photos?query=${myString}&client_id=gAgq5E2UC1ULfBI8V52OS0j85IERbLVk8uIHbTCAd3E`;
    const getImagesButton = document.querySelector('.getImagesButton');
    const imageToDisplay = document.querySelector('.imageToDisplay');

    getImagesButton.addEventListener('click', async () => {
      let randomImage = await getNewImage();
      imageToDisplay.src = randomImage;
    });

    async function getNewImage() {
      let randomNumber = Math.floor(Math.random() * 10);
      return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          let allImages = data.results[randomNumber];
          return allImages.urls.regular;
        });
    }