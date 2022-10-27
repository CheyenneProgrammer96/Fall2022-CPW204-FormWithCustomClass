class VideoGame{
    title: string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type = button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("Add video game was called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function getById(id:string){
    return document.getElementById(id);
}

/**
 * Gets all game data from the form
 * and returns it in a video game object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    
    // Populate with data from the form
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput =<HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    /*if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }*/
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void{
    // TODO: DIsplay video game below the form

}

// ADD VALIDATION CODE**********************
function isAllDataValid(){
    return true;
}