const movies=[
  {title:"Inception",genre:"action",rating:9,desc:"Dream heist movie"},
  {title:"Your Name",genre:"anime",rating:8.7,desc:"Romantic anime"},
  {title:"John Wick",genre:"action",rating:8.1,desc:"Action revenge"}
];

const div=document.getElementById("movies");
const modal=document.getElementById("modal");
const close=document.getElementById("close");
let selected=null;

function show(moviesList){
  div.innerHTML="";
  moviesList.forEach(m=>{
    const d=document.createElement("div");
    d.innerHTML=`${m.title} (⭐ ${m.rating}) <button>View</button>`;
    d.querySelector("button").onclick=()=>openModal(m);
    div.appendChild(d);
  });
}

function openModal(m){
  selected=m;
  document.getElementById("m-title").innerText=m.title;
  document.getElementById("m-genre").innerText="Genre: "+m.genre;
  document.getElementById("m-rating").innerText="Rating: "+m.rating;
  document.getElementById("m-desc").innerText=m.desc;
  modal.classList.remove("hidden");
}

close.onclick=()=>modal.classList.add("hidden");

document.getElementById("genre").onchange=e=>{
  const g=e.target.value;
  const filtered=g==="all"?movies:movies.filter(m=>m.genre===g);
  show(filtered);
}

document.getElementById("sort").onchange=e=>{
  const val=e.target.value;
  let sorted=[...movies];
  if(val==="high") sorted.sort((a,b)=>b.rating-a.rating);
  if(val==="low") sorted.sort((a,b)=>a.rating-b.rating);
  show(sorted);
}

show(movies);
