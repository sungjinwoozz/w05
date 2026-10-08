'use client'

import { useMemo, useState } from 'react'
import { ClockThree, Trash1 } from '@tailgrids/icons'
import { Badge } from '@/components/tailgrids/core/badge'
import { Button } from '@/components/tailgrids/core/button'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@/components/tailgrids/core/table'

type Todo = { id: number; title: string; completed: boolean }

const initialTodos: Todo[] = [
  { id: 1, title: 'delectus aut autem', completed: false },
  { id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
  { id: 3, title: 'fugiat veniam minus', completed: false },
  { id: 4, title: 'et porro tempora', completed: true },
  { id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false },
  { id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis', completed: false },
]

export default function Page() {
  const [todos, setTodos] = useState(initialTodos)
  const [onlyWaiting, setOnlyWaiting] = useState(false)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)

  const filteredTodos = useMemo(
    () => onlyWaiting ? todos.filter((todo) => !todo.completed) : todos,
    [onlyWaiting, todos],
  )
  const totalPages = Math.max(1, Math.ceil(filteredTodos.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageTodos = filteredTodos.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  function toggleTodo(id: number) {
    setTodos((current) => current.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  function addTodo() {
    const id = Math.max(0, ...todos.map((todo) => todo.id)) + 1
    setTodos((current) => [...current, { id, title: `new todo ${id}`, completed: false }])
    setPage(totalPages)
  }

  return (
    <main className="mx-auto mt-1 w-full px-1 pb-1">
      <div className="mb-2 flex items-center justify-between gap-3 text-xs">
        <label className="flex items-center gap-2 text-gray-700">
          <input type="checkbox" checked={onlyWaiting} onChange={(event) => { setOnlyWaiting(event.target.checked); setPage(1) }} className="h-3.5 w-3.5 rounded-full border-gray-300 text-primary-600 focus:ring-primary-500" />
          Show only
          <Badge color="warning" size="sm" suffixIcon={<ClockThree />} className="!gap-1 !rounded !bg-yellow-400 !px-2 !py-1 !text-[11px] !text-gray-900">waiting</Badge>
        </label>

        <select value={pageSize} onChange={(event) => { setPageSize(Number(event.target.value)); setPage(1) }} className="h-7 w-36 rounded border-gray-200 bg-white py-0 pl-2 pr-6 text-[11px] text-gray-700 focus:border-primary-500 focus:ring-primary-500">
          {[6, 10, 20].map((count) => <option key={count} value={count}>{count} items per page</option>)}
        </select>
      </div>

      <TableRoot className="w-full overflow-hidden rounded-none border-0 text-xs">
        <TableHeader className="bg-[#212529] text-white [&_th]:border-0 [&_th]:px-3 [&_th]:py-2 [&_th]:text-xs">
          <TableRow>
            <TableHead className="w-12">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="w-28 text-right">Completed</TableHead>
            <TableHead className="w-8 text-center">
              <Button variant="primary" size="xs" iconOnly aria-label="Add todo" onPress={addTodo} className="!size-6 !min-h-0 !rounded !p-0 !text-sm !leading-none">+</Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pageTodos.map((todo) => (
            <TableRow key={todo.id} className="odd:bg-white even:bg-[#f1f1f1] [&>td]:border-gray-200 [&>td]:px-3 [&>td]:!py-1.5">
              <TableCell><span className="rounded bg-gray-500 px-1.5 py-0.5 text-[10px] font-bold text-white">{todo.id}</span></TableCell>
              <TableCell className="text-gray-800">{todo.title}</TableCell>
              <TableCell className="text-right">
                <Button variant={todo.completed ? 'success' : 'primary'} size="xs" onPress={() => toggleTodo(todo.id)} className={`!min-h-0 !gap-1 !rounded !px-2 !py-1.5 !text-[11px] !leading-none ${todo.completed ? '' : '!bg-yellow-400 !text-gray-900 hover:!bg-yellow-500'}`}>
                  {todo.completed ? 'done' : 'waiting'} <ClockThree className="!size-3.5" />
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button variant="danger" size="xs" iconOnly aria-label={`Delete ${todo.title}`} onPress={() => setTodos((current) => current.filter((item) => item.id !== todo.id))} className="!size-6 !min-h-0 !rounded !p-0">
                  <Trash1 className="!size-3.5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      <div className="mt-3 flex items-center justify-center gap-1.5 text-xs">
        <Button variant="primary" appearance="outline" size="xs" onPress={() => setPage(1)} disabled={currentPage === 1} className="!min-h-0 !rounded !px-2 !py-1.5 !text-[11px] !leading-none">First</Button>
        <Button variant="primary" appearance="outline" size="xs" onPress={() => setPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="!min-h-0 !rounded !px-2 !py-1.5 !text-[11px] !leading-none">Previous</Button>
        <span className="px-0.5 text-gray-900">{currentPage} / {totalPages}</span>
        <Button variant="primary" appearance="outline" size="xs" onPress={() => setPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="!min-h-0 !rounded !px-2 !py-1.5 !text-[11px] !leading-none">Next</Button>
        <Button variant="primary" appearance="outline" size="xs" onPress={() => setPage(totalPages)} disabled={currentPage === totalPages} className="!min-h-0 !rounded !px-2 !py-1.5 !text-[11px] !leading-none">Last</Button>
      </div>
    </main>
  )
}
