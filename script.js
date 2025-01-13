// 入力された文章を表示する関数
function displayText() {
    const input = document.getElementById("textInput").value;
    const output = document.getElementById("output");
    if (input.trim() === "") {
        output.innerHTML = "何か入力してください。";
    } else {
        output.innerHTML = `<p>入力された文章: ${input}</p>`;
    }
}
