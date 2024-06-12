const getTheTitles = function(books) {
    let arrayOfTitles = [];
    let storeTitle;
    for (let book of books){
        storeTitle = book.title;
        arrayOfTitles.push(storeTitle);
    }
    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
