eventArr = ['For funeral', 'For work party', 'For wedding', 'For birthday party', 'For Thanksgiving dinner', " For BBQ"];
clothesArr = ['X-mass jumper', 'bikini', 'bike hemlet', 'pink socks', 'bin bag', 'yellow wig', 'stinky underwear'];
toDoArr = ['take', 'smell', 'burn', 'sniff', 'destroy', 'wear'];


const randomWord = array => Math.floor(Math.random() * array.length);

function whatWillYouDo()
 {
    let randomStuffArr = [];

        randomStuffArr.push(eventArr[randomWord(eventArr)]);
        randomStuffArr.push(toDoArr[randomWord(toDoArr)]);
        randomStuffArr.push(clothesArr[randomWord(clothesArr)]);

    let randomStuff = randomStuffArr.join(' ');

    return randomStuff;

};

const check = whatWillYouDo();
console.log(check);

// Hola, soy deg, y espero poder ayudarte con tu proyecto