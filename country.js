class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"] , "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"],"https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red",],"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/2560px-Flag_of_Algeria.svg.png");


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country; 


    if (input === "USA") {
        //set country to usa
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    
    document.querySelector("#CountryName").innerText=country.name;
    document.querySelector("#OfficialLanguage").innerText=country.lang;
    document.querySelector("#HelloWorld").innerText=country.greeting;

    document.querySelector("#color1").style.backgroundColor = country.colors[0];
    document.querySelector("#color2").style.backgroundColor = country.colors[1];
    document.querySelector("#color3").style.backgroundColor = country.colors[2];

    document.querySelector("#flag").setAttribute("src",country.flag)=country.flag;

}


