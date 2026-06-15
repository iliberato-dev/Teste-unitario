module.exports = function (items) {
  if (!items.length) return 0;

  const prices = items.map((item) => {
    const { precoUnitario, qtdVendida } = item;
    return precoUnitario * qtdVendida;
  });

  const totalPrice = prices.reduce(
    (intemAnterior, proximoItem) => intemAnterior + proximoItem,
  );

  return totalPrice * 0.05;
};
