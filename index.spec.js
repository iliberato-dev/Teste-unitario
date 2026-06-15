const calculaComissaoVenda = require('./index');

it('Se a lista estiver vazia, a comissão é zero', () => {

    const resultadoAtual = calculaComissaoVenda([]);
    const resultadoEsperado = 0;

    expect(resultadoAtual).toBe(resultadoEsperado);
});

it('calcula comissão quando só tem um item na lista', () => {

    const resultadoAtual = calculaComissaoVenda([{
        id: 'PROD-123',
        precoUnitario: 1000,
        qtdVendida: 1
    }])

    const resultadoEsperado = 50


    expect(resultadoAtual).toBe(resultadoEsperado)
})

