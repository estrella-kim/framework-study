require.config({
    paths:{
        Meal : './modules/Meal',
        Car : './modules/Car',
        Cookie : './modules/Cookie'
    }
});
requirejs(['Meal', 'Car', 'Cookie'], function(Meal,Car, Cookie) {
    console.log(Car);
    Car.sonata.excel();
    console.log(Car.sonata.speed);
});