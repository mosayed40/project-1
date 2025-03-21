const title = document.getElementById("title");
const creat = document.getElementById("creat");
const delet = document.getElementById("delete");
const updat = document.getElementById("update");

// array
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

creat.onclick = function () {
  let newPro = { title: title.value };
  dataPro.push(newPro);
  //  add_file_on_localStorage----
  localStorage.setItem("product", JSON.stringify(dataPro));
  clearData();
  showData();
};

function clearData() {
  title.value = "";
}

function showData() {
  let pro = "";
  for (i = 0; i < dataPro.length; i++) {
    pro += `
      <div class="read">
          <div class="but">
            <button id="update">U</button>
            <button id="delete">D</button>
          </div>
          <p >${dataPro[i]} </p>
          <button id="done">+</button>
      </div>
          `;
  }
  document.getElementsByClassName("maxx").innerHT

}
showData();
