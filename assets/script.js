var container = document.getElementById('container');

var hours = [
  moment().format("9"),
  moment().format("10"),
  moment().format("11"),
  moment().format("12"),
  moment().format("13"),
  moment().format("14"),
  moment().format("15"),
  moment().format("16"),
  moment().format("17"),
]

var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);


hours.forEach(HOUR=> {
    var row = document.createElement("div");
    row.classList.add("row", "time-block");
    row.innerHTML = `
    <div id="${hours} class="col-md-1 hour">${hours}</div>
    <textarea class="col-md-10 description" name="" id=""><textarea>
    <button class="col-md-1 btn saveBtn">
        <i class="fas fa-save"></i>
      </button>
    </div>`;
    container.appendChild(row);
});