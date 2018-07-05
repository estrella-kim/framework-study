define([], function(){
    const PRICE = 3000;
    function priceSum(ingredient1, ingredient2) {
        return ingredient1 + ingredient2;
    }
    return {
        PRICE : PRICE,
        priceSum : priceSum
    }
});