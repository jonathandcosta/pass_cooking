
import { ChangeEvent, useState } from 'react'

// COMPONENTES
import { IconButton } from './icon_button'
import { Table } from './table'
import { TableHeader } from './table-header'
import { TableCell } from './table-cell'
import { TableRow } from './table-row'

// ícones importados
import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from 'lucide-react'


export function AttendeeList() {

  // FUNÇÃO MANTER A ALTERAÇÃO DO INPUT (USANDO O ESTADO)
  const [search, setSearch] = useState('')

  function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }
  ////>>>>>>>> --------------------------->>>>>>>/////

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className='size-4 text-orange-600' />
          <input onChange={onSearchInputChange} className="bg-transparent flex-1 outline-none border-0 p-0" placeholder="Buscar participante..." />
        </div>

        {search}
      </div>

      {/* TABELA */}
      <Table>

        {/* CABEÇALHO */}
        <thead>
          <tr className='border-b border-white/10'>
            <TableHeader style={{ width: 48 }}>
              <input className='size-4 bg-black/20 rounded border-white/10 accent-orange-400' type="checkbox" />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de incrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>

        {/* LINHAS */}
        <tbody>
          <tr className='border-b border-white/10 hover:bg-white/5'>
            <TableCell ><input className='size-4 bg-black/20 rounded border-white/10 accent-orange-400' type="checkbox" /></TableCell>
            <TableCell>152489</TableCell>
            <TableCell>
              <div className='flex flex-col gap-1'>
                <span className='font-semibold text-white'>Jonathan Costa</span>
                <span>teste@teste.com</span>
              </div>
            </TableCell>
            <TableCell>7 dias atrás</TableCell>
            <TableCell>2 dias atrás</TableCell>
            <TableCell>
              <IconButton transparent={true}>
                <MoreHorizontal className='size-4' />
              </IconButton>
            </TableCell>
          </tr>
        </tbody>

        {/* RODAPÉ */}
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
              <div className='inline-flex items-center gap-8'>
                <span>Página 1 de 23</span>
                <div className='flex gap-1.5'>
                  <IconButton>
                    <ChevronsLeft className='size-4' />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className='size-4' />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className='size-4' />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className='size-4' />
                  </IconButton>
                </div>
              </div>
            </td>
          </TableRow>
        </tfoot>
      </Table>
    </div >

  )
}