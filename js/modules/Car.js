define([], function(){
    class Car {
        constructor() {
            this.speed = 0;
        }
        excel() {
            this.speed ++;
        }
    }
    const sonata = new Car();
    return {
        sonata : sonata
    }
});

