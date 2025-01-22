import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import tarefa from '../../models/Tarefa'
import * as enums from '../../Utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new tarefa(
      'Estudar javaScript',
      enums.Propriedades.IMPORTANTE,
      enums.Status.PENDENTES,
      '',
      1
    ),
    new tarefa(
      'Estudar TypeScript',
      enums.Propriedades.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do modulo',
      2
    ),
    new tarefa(
      'Estudar React',
      enums.Propriedades.URGENTE,
      enums.Status.PENDENTES,
      'Praticar o useEffect',
      3
    ),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})
export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
