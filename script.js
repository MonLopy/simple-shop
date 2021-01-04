import * as SHOP from "./module.js";
var am, name, res, add;
var summary, cash, beer, vine, pepsi;
const dollar = jQuery.noConflict();
dollar(document).ready(function() {
    dollar(".b-add").click(function() {

        am = parseInt(dollar(".amount").val());
        name = dollar("input[name='drink']:checked").val();
        res = SHOP.add_to_trash(name, am);
        if (typeof res != "undefined") {
            add = dollar(".b-choosen").html();
            dollar(".b-choosen").html(add + res + '<br/>');
            summary = SHOP.buy_all_items(name, am);
            console.log(summary);

        }


    });
    dollar(".b-buy").click(function() {
        dollar(".b-bought").html("");
        cash = parseInt(dollar(".b1 .count").text(summary['sum']));
        beer = parseInt(dollar(".b2 .count").text(summary['beer']));
        vine = parseInt(dollar(".b3 .count").text(summary['vine']));
        pepsi = parseInt(dollar(".b4 .count").text(summary['pepsi']));
        add = dollar(".b-choosen").html();
        add += '<br/>' + 'Всього: ' + summary['r'] + ' грн';
        dollar(".b-bought").html(add);
        dollar(".b-choosen").html("");
        SHOP.reset();

    });












});