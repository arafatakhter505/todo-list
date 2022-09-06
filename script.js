const addBtn = document.getElementById("add-btn");
const inputField = document.getElementById("input-field");
const listItems = document.getElementById("list-items");
const clearBtn = document.getElementById("clear-btn");

addBtn.addEventListener("click", () => {
  if (inputField.value !== "") {
    let html = "";

    saveLocalItems(inputField.value);
    const getList = getLocalItems();
    getList.forEach((list, index) => {
      html += `<li>${list} <img class="del-btn" onclick="deleteItem(${index})" src="images/delete.png" alt="" /></li>`;
    });
    listItems.innerHTML = html;
    inputField.value = "";
  }
});

const getLocalItems = () => {
  const localItems = JSON.parse(localStorage.getItem("listItems"));
  let items = [];
  if (localItems) {
    items = localItems;
  }
  return items;
};

const saveLocalItems = (list) => {
  const getList = getLocalItems();
  getList.push(list);
  localStorage.setItem("listItems", JSON.stringify(getList));
};

const displayList = () => {
  const getList = getLocalItems();
  let html = "";
  getList.forEach((list, index) => {
    html += `<li>${list} <img class="del-btn" onclick="deleteItem(${index})" src="images/delete.png" alt="" /></li>`;
  });
  listItems.innerHTML = html;
};

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  listItems.textContent = ``;
});

const deleteItem = (index) => {
  const getList = getLocalItems();
  getList.splice(index, 1);
  localStorage.setItem("listItems", JSON.stringify(getList));
  displayList();
};

displayList();
