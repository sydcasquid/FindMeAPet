// 1. Get the data, or in the case of this assignment, create the data.

//    Here is a link to the Humane Society of Hamilton County, Adoptable Dogs page : 
//https://www.hamiltonhumane.com/adopt/adoptable-dogs

//    Create an array of objects, to represent the first 10 dogs listed on the page. 
//The objects should include dogName, breed and age.

// Here is a start,

const allDogs = [

    {


        dogName: "Abby",


        breed: "SharPei",


        age: 7

    },

    {


        dogName: "Akino",


        breed: "Husky",


        age: 5

    },
    {
        dogName: "Anthony",


        breed: "Pit Bull/Mix",


        age: 6
    },
    {
        dogName: "Axel",


        breed: "American pit Bull/Mix",


        age: 2
    },
    {
        dogName: "Baluna",


        breed: "Pit Bull/Mix",


        age: 1
    },
    {
        dogName: "Barry",


        breed: "Australian Cattle Dog/Mix",


        age: 1
    },
    {
        dogName: "Beanie",


        breed: "Terrier, American Pit Bull/Hound",


        age: 2
    },
    {
        dogName: "Bebe",


        breed: "Terrier, American Pit Bull/Mix",


        age: 6
    },
    {
        dogName: "Boo Boo",


        breed: "American Eskimo/Mix",


        age: 9
    },
    {
        dogName: "Bowser",


        breed: "Mastiff/Mix",


        age: 3
    },


];


function showInfo() {
    let input = document.getElementById("petYears");
    let petYears = parseInt(input.value); 
    const selectedDogs = [];

    if (!isNaN(petYears)){
        allDogs.forEach((dog) => {
            if (dog.age >= petYears){ 
                console.log("Working");
                selectedDogs.push(dog);
            }
        });

        const displayPet = document.querySelector(".selectedPetInfo");
        displayPet.innerHTML = ""; 

        if (selectedDogs.length > 0) {
            selectedDogs.forEach(dog => {
                displayPet.innerHTML += `<p>${dog.dogName}:<li>Breed: ${dog.breed}<li>Age: ${dog.age}</li></li><p>`;

            });
        } else {
            displayPet.innerHTML = `There are no dogs ${petYears} or older.`
        }
        
    }else {
        let displayPet = document.querySelector(".selectedPetInfo");
        displayPet.innerHTML = `That is not a valid number, please try again.`;
    } ;

};


//     if(isNaN(petYears)){
//         allDogs.forEach((item) =>{
//             if (item.age > ){
//         });
//     }else {
//         let displayPet = document.querySelector(".selectedPetInfo");
//         displayPet.innerHTML = `That is not a valid number, please try again.`;
//     }
// };
