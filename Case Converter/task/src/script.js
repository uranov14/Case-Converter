let textArea = document.getElementById("text");
// buttons
let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentences = document.getElementById("sentence-case");
// events
upper.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
});
lower.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
});
proper.addEventListener("click", function () {
    const string = textArea.value;
    const words = string.split(" ");

    let properCase = "";
    words.forEach(function (word, i) {
        properCase += word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() + (i!==words.length-1 ? " " : "");
    });

    textArea.value = properCase;
});
sentences.addEventListener("click", function () {
    const text = textArea.value;
    textArea.value = text.toLowerCase().replace(/(^\s*\w|[\\.\\!\\?]\s*\w)/g,letter => letter.toUpperCase());
});
// save text to file
let saveBtn = document.getElementById("save-text-file");
function downloads(text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
saveBtn.addEventListener("click", function() {
    downloads(textArea.value);
}, false);