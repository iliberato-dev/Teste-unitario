const calculaComissaoVenda = require('./index');

it('Se a lista estiver vazia, a comissão é zero', () => {

    const resultadoAtual = calculaComissaoVenda([]);
    const resultadoEsperado = 0;

    expect(resultadoAtual).toBe(resultadoEsperado);
})

