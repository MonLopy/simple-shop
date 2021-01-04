const dollar = jQuery.noConflict();
var shop = {
    beer: 100,
    vine: 50,
    pepsi: 80
};
var sum = 1000;
var s = 1000;
var r = 0;
var beer = shop["beer"];
var vine = shop["vine"];
var pepsi = shop["pepsi"];

function add_to_trash(name, amount) {
    if (shop[name] >= amount) {
        return name + ':' + amount + ' шт';
    }
    alert("У нас недостатня кількість товару");

}

function buy_all_items(name, amount) {
    if (name == "beer") {
        beer = shop[name] - amount;
        shop[name] = beer;
        sum += amount * 22;
    } else if (name == "vine") {
        vine = shop[name] - amount;
        shop[name] = vine;
        sum += amount * 50;

    } else if (name == "pepsi") {
        pepsi = shop[name] - amount;
        shop[name] = pepsi;
        sum += amount * 16;
    }
    r = sum - s;
    return {
        beer: beer,
        vine: vine,
        pepsi: pepsi,
        sum: sum,
        r: r
    };

}

function reset() {
    sum = 1000;
}
export { add_to_trash, buy_all_items, reset };