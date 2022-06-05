module.exports = {
  listar () {
    return []
  },
  inserir (fornecedor) {
    return {
      id: 5,
      dataCriacao: '20/11/1995',
      dataAtualizacao: '20/11/1995',
      versao: 1
    }
  },
  async pegarPorId (id) {
    return {
      id: 5,
      dataCriacao: '20/11/1995',
      dataAtualizacao: '20/11/1995',
      versao: 1
    }
  },
  async atualizar (id, dadosParaAtualizar) {
  },
  async remover (id) {
  }
}
