const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const body = document.getElementsByTagName("body");

async function get_quote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
get_quote(api_url);


const tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " - " +
      author.innerHTML
  );
};

// Change Background Image
const numItemsToGenerate = 1;

const renderItem = () =>{
  fetch(`https://source.unsplash.com/1600x900/?nature`).then((response) => {
    let item = document.getElementById("item");
    item.classList.add("item");
    item.innerHTML = `
      <img class="beach-image" src="${response.url}" alt="beach image"/>
    `;
    document.body.appendChild(item);
  });
}
for (let i = 0; i < numItemsToGenerate; i++) {
  renderItem();
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    renderItem();
    get_quote(api_url);
    
  }
});


// Change Text Color
const style = getComputedStyle(body);
const backgroundColor = style.backgroundColor;

// Check if background color is dark using color contrast algorithm
const rgb = backgroundColor.match(/\d+/g);
const brightness = (299 * rgb[0] + 587 * rgb[1] + 114 * rgb[2]) / 1000;
const isDarkColor = brightness < 128;

if (isDarkColor) {
  // Set text color to white
  body.style.color = "white";
} else {
  // Set text color to black
  body.style.color = "black";
}
