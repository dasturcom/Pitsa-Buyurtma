var elForm = document.querySelector(".left-inside-form");

var elBoxSpan1 = document.querySelector(".box-inside-span1");
var elBoxSpan2 = document.querySelector(".box-inside-span2");
var elBoxSpan3 = document.querySelector(".box-inside-span3");

var elBoxForm = document.querySelector(".div-inside-form");
var products = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
var newList = []

var elLists = document.querySelector("ul");

for (let i = 0; i < products.length; i++) {

    var label = document.createElement("label");
    var checkboxEL = document.createElement("input");
    var span = document.createElement("span");

    checkboxEL.setAttribute("type", "checkbox");
    checkboxEL.setAttribute("value", products[i]);

    span.textContent = products[i];

    label.appendChild(checkboxEL);
    label.appendChild(span);

    elBoxForm.appendChild(label);

    checkboxEL.addEventListener("change", function (e) {

        var itemIndex = newList.indexOf(this.value);

        if (itemIndex == -1) {
            newList.push(this.value)
        } else {
            newList.splice(itemIndex, 1)
        }

        elLists.innerHTML = ""
        for (const item of newList) {
            var li = document.createElement("li");
            li.textContent = item;

            elLists.appendChild(li);
        }

    })

}

var elFormBox = document.querySelector(".form");
var additions = ["Achchiq", "Sazsiskali"];
var newAdditions = [];

var elList = document.querySelector(".list")

for (let i = 0; i < additions.length; i++) {

    var htmlLabel = document.createElement("label");
    var checkbox = document.createElement("input");
    var box = document.createElement("span");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", additions[i]);

    box.textContent = additions[i];

    htmlLabel.appendChild(checkbox);
    htmlLabel.appendChild(box);

    elFormBox.appendChild(htmlLabel);

    checkbox.addEventListener("change", function (e) {

        var item = newAdditions.indexOf(this.value);

        if (item == -1) {
            newAdditions.push(this.value)
        } else {
            newAdditions.splice(item, 1)
        }

        elList.innerHTML = ""
        for (const item of newAdditions) {
            var itemLi = document.createElement("li");
            itemLi.textContent = item;

            elList.appendChild(itemLi);
        }

    })

}

const elRadioInput = document.querySelectorAll(".inputRadio");
const elResult = document.querySelector("#result");

elRadioInput.forEach(radio => {

    radio.addEventListener('change', function () {
        elResult.textContent = this.value
    })

});

const elSelect = document.querySelector("#select");
const elBox = document.querySelector(".spanResult");

elSelect.addEventListener('change', function () {
    elBox.textContent = this.value
})