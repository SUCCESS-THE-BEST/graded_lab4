let pics = document.getElementById("pics");
let fav = document.getElementById("favorites");
let actions = document.getElementById("actions");

let images = document.querySelectorAll("#pics img");

let count = 0;

images.forEach(function(img, index) {

    img.onclick = function () {

        // IF NOT selected → move to favorites
        if (!img.classList.contains("selected")) {

            fav.appendChild(img);
            img.style.border = "2px solid green";
            img.classList.add("selected");

            count++;

            alert("Image " + (index + 1) + " selected as favorite number " + count);

            let li = document.createElement("li");
            li.textContent = img.getAttribute("src") + " has been added to favorites";
            actions.appendChild(li);

            if (count === images.length) {
                alert("All images have been selected!");
            }

        } 
        // ELSE → move back
        else {

            pics.appendChild(img);
            img.style.border = "none";
            img.classList.remove("selected");

            count--;

            let li2 = document.createElement("li");
            li2.textContent = img.getAttribute("src") + " has gone back to the main list";
            actions.appendChild(li2);
        }
    };

});