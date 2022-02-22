 
const numberOfRectangles = 36;

const fontLoad = async () => {
    await figma.loadFontAsync({
        family: "Roboto",
        style: "Bold"
    })
}
 
const createTextNode = () => {
    // Create text layer
    for (let i = 0; i < 8; i++) {

        let c = 0;
        for (let j = i; j < 35 + i; j++) { 
            
            const myTextLayer = figma.createText()
            // Set the font
            myTextLayer.fontName = {
                family: "Roboto",
                style: "Bold"
            }
            let val = 0
            if( i % 2 == 0)
            {
                val =  (c * 60 * 2);
            } 
            else
            {
                val = (c * 60 * 2) + 60 ;
            }
            myTextLayer.x = val - 40
            myTextLayer.y = (60 * i ) + 10
            myTextLayer.fontSize = 36
            
            let characterVal = j
            if(j > 34)
                characterVal = j - 34

            myTextLayer.characters = characterVal.toString()
            figma.currentPage.appendChild(myTextLayer);
            c++
        }
    }
}
 
fontLoad().then(() => {
    createTextNode()
})
 