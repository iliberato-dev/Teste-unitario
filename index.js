module.exports = function (items) {
  if (!items.length) return 0;

  const totalPrice = items.map((item) => {
    const { precoUnitario, qtdVendida } = item;
    return precoUnitario * qtdVendida;
  }).reduce(
    (intemAnterior, proximoItem) => intemAnterior + proximoItem,
  );

  return totalPrice * 0.05;
};
