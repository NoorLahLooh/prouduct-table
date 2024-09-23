var prouduct = document.querySelector(".prouduct");
var name = document.querySelector("#name");
var price = document.querySelector("#price");
var description = document.querySelector("#desc");
var prouducts = [];
prouduct.onsubmit = function (e) {
    e.preventDefault();
    var items = {
        name: name.value,
        price: price.value,
        description: description.value,
    }
    prouducts.push(items);
    printdata()
}
function printdata() {
    var data = " ";
    for (var i = 0; i < prouducts.length; i++) {
        data += ` <tr>
                <td>${prouducts[i].name}</td>
                <td>${prouducts[i].price}</td>
                <td>${prouducts[i].description}</td>
            </tr>`
    }
    document.querySelector("tbody").innerHTML = data;
}