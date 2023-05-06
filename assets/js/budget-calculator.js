const gameType = document.getElementById("game-type");
const materialType = document.getElementById("material-type");
const copies = document.getElementById("copies");
const includeDesign = document.getElementById("include-design");
const includeArt = document.getElementById("include-art");
const includePublish = document.getElementById("include-publish");
const estimationValue = document.getElementById("estimation-value");

const gameTypeValues =
{
    card_game: 15000,
    board_game: 8000,
    mix: 30000
};

const materialTypeValues =
{
    plastic: 20000,
    wood: 15000,
    paper: 5000,
    glass: 25000
};

function calculateBudget()
{
    let value = 250 * copies.value;

    if (includeArt.checked) value += 10000;

    if (includeDesign.checked) value += 10000;

    value += gameTypeValues[gameType.value] + materialTypeValues[materialType.value];

    estimationValue.innerText = "R$" + resumeNumber(value);
    
    return false;
}

function resumeNumber(number) {
    number = number.toString().replace(/[^0-9.]/g, '');

    if (number < 1000) return number;

    let list = 
    [
      {value: 1E3, shortcut: "K"},
      {value: 1E6, shortcut: "M"},
      {value: 1E9, shortcut: "B"},
      {value: 1E12, shortcut: "T"}
    ];
    let index;

    for (index = list.length - 1; index > 0; index--)
    {
        if (number >= list[index].value) break;
    }

    return (number / list[index].value).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + list[index].shortcut;
}