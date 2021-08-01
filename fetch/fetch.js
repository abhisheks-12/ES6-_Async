"use strict";

const url = "https://www.course-api.com/react-tours-project";

// console.log(fetch(url));

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getTours = async () => {
  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      const msg = `There was error ${res.status}`;
      throw new Error(msg);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// getTours();

const btn = document.querySelector(".btn");
btn.addEventListener("click", getTours);
