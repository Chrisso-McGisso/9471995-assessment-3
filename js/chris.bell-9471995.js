(function () {
    // define playthings
    var buttons = document.getElementsByClassName('animal-button');
    var imageObject = {
        'cat':'img/cat.jpeg',
        'dog':'img/dog.jpeg',
        'frog':'img/frog.jpeg',
    }
    var captionObject = {
        'cat':'Cat is clicked',
        'dog':'The dog has been clicked too!!',
        'frog':'...and now the frog?! Cmon!',
    }
    for (let item of buttons) {
        item.onclick = function(){
            let animal = item.dataset.animal;
            document.getElementById('hidden').style.display = "flex";
            document.getElementById('js-textbox').value = `User clicks ${animal}`;
            document.getElementById('js-caption').innerText = captionObject[animal];
            document.getElementById('animal-pic').src = imageObject[animal];
        }
    }
})();