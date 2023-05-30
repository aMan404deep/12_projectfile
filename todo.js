function updateDateTime(event) {
    var now = new Date();
    var dateTime = now.toLocaleString();
    var datetimeElement = event.target.parentNode.querySelector('.datetime');

    if (event.target.value === '') {
        datetimeElement.innerHTML = '';
    } else {
        datetimeElement.innerHTML = dateTime;
    }
}

var todoInputs = document.getElementsByClassName('todo__value');
for (var i = 0; i < todoInputs.length; i++) {
    todoInputs[i].addEventListener('input', updateDateTime);
}