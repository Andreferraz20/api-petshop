// eslint-disable-next-line no-undef
jest.mock('./TabelaFornecedor')
/* eslint-disable no-undef */
const Fornecedor = require('./Fornecedor')

// eslint-disable-next-line no-undef
describe('Classe fornecedor', () => {
  // eslint-disable-next-line no-undef
  test('O metodo validar() retorna true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })
    // eslint-disable-next-line no-undef
    expect(fornecedor.validar()).toBe(true)
  })

  test('O metodo criar foi executado com sucesso', async () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()

    expect(fornecedor.id).toBe(5)
    expect(fornecedor.dataAtualizacao).toBe('20/11/1995')
    expect(fornecedor.dataCriacao).toBe('20/11/1995')
    expect(fornecedor.versao).toBe(1)
  })
})
