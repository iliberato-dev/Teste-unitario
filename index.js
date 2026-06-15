module.exports = function (items) {
  if (!items.length) return 0;

  if (items.length === 1) {
    const { precoUnitario, qtdVendida } = items[0];

    return precoUnitario * qtdVendida * 0.05;
  }

  if (items.length > 1) {
    const prices = items.map(item => {
        const { precoUnitario, qtdVendida } = item
        return precoUnitario * qtdVendida
    })

    const totalPrice = prices.reduce((intemAnterior, proximoItem) => intemAnterior + proximoItem )

    return totalPrice * .05
  }
};
