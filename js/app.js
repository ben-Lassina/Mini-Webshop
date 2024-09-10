const url = './dataset.json';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
} catch (error){
        console.error('Error fetchingdata', error.messasge);
        throw error;
    }
}


const RedButton = document.getElementById("redButton");
const SilverButton = document.getElementsByClassName("colors--silver")[0];
const GoldButton = document.getElementsByClassName("colors--gold")[0];
const BlueButton = document.getElementsByClassName("colors--blue")[0];
const WhiteButton = document.getElementsByClassName("colors--white")[0];

const WhiteHat = document.getElementsByClassName("hat_white");
const GoldHat = document.getElementsByClassName("gold");
const BlueHat = document.getElementsByClassName("blue");
const SilverHat = document.getElementsByClassName("silver");
const RedHat = document.getElementsByClassName("red");
const AllHats = document.getElementsByClassName("hat");

console.log(WhiteHat);

// Corrected event listener for the red button
RedButton.addEventListener("click", function() {
    if (WhiteHat[0]) {
        WhiteHat[0].src = '/products/pet-rood.png';
    }
});

// Event listener for SilverButton
SilverButton.addEventListener("click", function() {
    if (WhiteHat[0]){
        WhiteHat[0].src = '/products/pet-zilver.png'
    }
});

// Event listener for GoldButton
GoldButton.addEventListener("click", function(){
    if (WhiteHat[0]){
        WhiteHat[0].src = '/products/pet-goud.png'
    }
});

// Event listener for BlueButton
BlueButton.addEventListener('click', function(){
    if (WhiteHat[0]){
        WhiteHat[0].src = '/products/pet-blauw.png'
    }
})

// Event listener for WhiteButton
WhiteButton.addEventListener('click', function(){
    if (WhiteHat[0]){
        WhiteHat[0].src = '/products/pet.png'
    }
})