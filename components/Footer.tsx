import Badge from '@/components/Badge'
import { Facebook, Twitter } from '@tailgrids/icons'

export default function Footer() {
  return (
    <div className="mt-4 w-full text-center">
      {/* student */}
      <div>
        <Badge className="mx-auto h-auto w-fit rounded-lg bg-blue-100 px-2 py-1 text-xl !text-black shadow-none">
          68070442 พลภัทร สุขเมือง
        </Badge>
      </div>

      {/* contacts */}
      <div className="mt-4 flex justify-center gap-6">
        <a href="#" aria-label="Facebook" className="text-blue-700">
          <Facebook className="h-4 w-4" />
        </a>
        <div className="border-l border-gray-300" />
        <a href="#" aria-label="Twitter" className="text-black">
          <Twitter className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
