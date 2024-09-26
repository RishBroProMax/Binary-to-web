// Convert Text to Binary
function convertToBinary() {
    const input = document.getElementById("inputText").value;
    let binary = '';
    for (let i = 0; i < input.length; i++) {
        let binaryChar = input[i].charCodeAt(0).toString(2).padStart(8, '0');
        binary += binaryChar + " ";
    }
    document.getElementById("outputText").value = binary.trim();
}

// Convert Binary to Text
function convertToText() {
    const input = document.getElementById("inputText").value.trim();
    const binaryArray = input.split(" ");
    let text = '';
    for (let i = 0; i < binaryArray.length; i++) {
        let char = String.fromCharCode(parseInt(binaryArray[i], 2));
        text += char;
    }
    document.getElementById("outputText").value = text;
}
