// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

  function destructivelyAppendCat(){
      cats.push('Ralph')
};
    function destructivelyPrependCat(){
        cats.unshift('Bob')
    };

function destructivelyRemoveLastCat(){
    cats.pop()
};

function destructivelyRemoveFirstCat(){
    cats.shift()
};

function appendCat(){
    return [...cats, 'Broom']
};

function prependCat(){
    return ["Arnold", ...cats]
};

function removeLastCat(){
    let catCopy = cats.slice(0, cats.length - 1);
    return catCopy;
};

function removeFirstCat(){
    let catCopy2 = cats.slice(1);
    return catCopy2;
}