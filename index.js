module.exports = function (items) {
    
    if (!items.length) return 0;

    const { precoUnitario, qtdVendida } = items[0]

    return precoUnitario * qtdVendida * .05
}