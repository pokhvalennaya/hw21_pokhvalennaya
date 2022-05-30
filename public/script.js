import { createTD, hideElement } from "./dom.js";

const usersTable = document.querySelector("#users");
const [tbody] = usersTable.tBodies;
const userForm = document.forms["create-user"];

function addUserToTable({ brand, year, price, id }) {
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.innerHTML = id;

  tr.append(th);
  tr.append(createTD(brand));
  tr.append(createTD(year));
  tr.append(createTD(price));

  const button = document.createElement("button");
  button.className = "btn btn-danger delete-user";
  button.innerHTML = '<i class="bi bi-trash"></i>';
  tr.append(createTD(button));

  tbody.append(tr);
}

fetch("http://localhost:3001/api/products")
  .then((response) => response.json())
  .then((users) => {
    const [tbody] = usersTable.tBodies;

    users.forEach(addUserToTable);

    hideElement(".table-spinner");
  })
  .catch((error) => console.error(error));

tbody.onclick = (event) => {
  const isDeleteButton = event.target.classList.contains("delete-user");

  if (isDeleteButton) {
    const tr = event.target.closest("tr");
    tr.remove();
  }
};
