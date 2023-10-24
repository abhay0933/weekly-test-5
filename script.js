let phoneSearch = document.querySelector(".input-search");
let searchBtn = document.querySelector(".search");
let defaultphones = document.querySelectorAll(".item");
let phonecontainer = document.querySelector(".showItem-container");

searchBtn.addEventListener("click", () => {
  // console.log(phoneSearch.value);
  let phoneValue = fetch(
    (url = `https://openapi.programming-hero.com/api/phones?search=${phoneSearch.value}`)
  );
  // console.log(phoneValue);
  phoneValue

    .then(data => {
      let jsonn = data.json();
      // console.log(jsonn)
      return jsonn;
    })

    .then(item => {
      console.log(item.data);
      num = 20;
      for (let i = 0; i < defaultphones.length; i++) {
        defaultphones[i].style.display = "none";
      }

      for (let i = 0; i <= num; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        // console.log(newDiv);
        newDiv.innerHTML = `
                <img src=${item.data[i].image} alt="" />
                <div class="content">
                <h2>${item.data[i].phone_name}</h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered
                </p>
                <button class="detailsbtn">SHOW DETAILS</button>
                </div>
                 `;

        phonecontainer.appendChild(newDiv);
      }
    });
});

let deatilsBtn= document.querySelectorAll(".detailsbtn");
    console.log(deatilsBtn);
  


