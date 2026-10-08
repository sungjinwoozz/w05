import Badge from '@/components/Badge'

export default function Header() {
  return (
    <header className="mt-4 text-center">
      <div className="flex justify-center gap-2">
        <Badge color="bg-red-500" rotate="-rotate-6">C</Badge>
        <Badge color="bg-green-600" rotate="-rotate-3">S</Badge>
        <Badge color="bg-blue-600" rotate="rotate-3">I</Badge>
        <Badge color="bg-sky-500" rotate="rotate-1">2</Badge>
        <Badge color="bg-amber-500" rotate="rotate-6">0</Badge>
        <Badge color="bg-gray-500" rotate="-rotate-3">5</Badge>
      </div>

      <h1 className="mx-auto mt-2 w-fit rounded bg-gray-800 px-3 py-1 text-sm font-bold uppercase text-white">
        Front End Software Development
      </h1>
    </header>
  )
}
