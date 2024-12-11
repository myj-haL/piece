export const extractText = (htmlString: string) => {
    let strippedHtml = htmlString.trim().replace(/<title>.*?<\/title>/g, '');
    // let strippedHtml = htmlString.trim();
    const tempDivElement = document.createElement('div');

    tempDivElement.innerHTML = strippedHtml;
    return Array.from(tempDivElement.childNodes)
        .map(node => node.textContent.trim())
        .filter(text => text !== '')
        .join(' ');

    // return tempDivElement.textContent || tempDivElement.innerText || '';
};
