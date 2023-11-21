function getElementWidth(content, padding, border) {
    const floatContent = parseFloat(content);
    const floatPadding = parseFloat(padding);
    const floatBorder = parseFloat(border);


    return floatContent + 2 * floatPadding + 2 * floatBorder;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 