function addParagraph() {
    var pDiv = document.getElementById('p-div');
    var imgDiv = document.getElementById('img-div');
    pDiv.style.display = 'block';
    imgDiv.style.display = 'none';
    
   
    var paragraph = document.createElement('p');
    
    
    paragraph.textContent = 'This is a new paragraph.';
    
   
    pDiv.appendChild(paragraph);
}


function addImage() {
    var pDiv = document.getElementById('p-div');
    var imgDiv = document.getElementById('img-div');
    pDiv.style.display = 'none';
    imgDiv.style.display = 'block';
    
    var image = document.createElement('img');
    
    image.src = 'asset/Rand.png';
    

    image.alt = 'Image description';
    image.style.width = '200px';
    image.style.height = '150px';
    
    imgDiv.appendChild(image);
}

var addParagraphButton = document.getElementById('p-button');
var addImageButton = document.getElementById('img-button');

addParagraphButton.addEventListener('click', addParagraph);
addImageButton.addEventListener('click', addImage);