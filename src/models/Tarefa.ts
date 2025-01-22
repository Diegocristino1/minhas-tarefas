import * as enums from '../Utils/enums/Tarefa'

class tarefa {
  titulo: string
  prioridade: enums.Propriedades
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Propriedades,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default tarefa
