let reviews = [{
    photo: 0,
    name: "Susan Smith",
    job: "Web Developer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint!"
},
{
    photo: 1,
    name: "Peter Jones",
    job: "Intern",
    review: "Adipisicing elit. Maxime mollitia, molestiae quas vel sint!  molestiae quas vel sint!  molestiae quas vel sint!"
},
{
    photo: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    review: "molestiae quas vel sint! molestiae quas vel sint! molestiae quas vel sint!"
},
{
    photo: 3,
    name: "Bill Anderson",
    job: "The Boss",
    review: "Lorem ipsum dolor. Maxime mollitia, molestiae quas vel sint! molestiae quas vel sint!"
},
{
    photo: 4,
    name: "Mehmood Ghaker",
    job: "Blockchain Developer",
    review: "Consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint!"
},
{
    photo: 5,
    name: "Rafay Arshad",
    job: "Web Developer",
    review: "Sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint!"
}]

    const img = document.getElementById("image");
    const author = document.getElementById("p");
    const job = document.getElementById("p1");
    const info = document.getElementById("p2");  
    let currentItem = 0;

function showPerson(person) {
    const item = reviews[person];
    img.src = item.photo + ".jpg";
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.review;
}

function prev(){
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  }

function next(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  }


function random(){
    showPerson(Math.floor(Math.random() * 6))
}