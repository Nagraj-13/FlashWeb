interface FolderStructureProps {
  title: string
  structure: string
}

export default function FolderStructure({ title, structure }: FolderStructureProps) {
  return (
    <div className="rounded-xl border border-gray-800 overflow-hidden">
      <div className="bg-slate-800 px-4 py-3 border-b border-gray-700">
        <h3 className="font-medium text-white">{title}</h3>
      </div>
      <div className="bg-black p-4 h-full font-mono text-sm text-gray-300 overflow-x-auto">
        <pre>{structure}</pre>
      </div>
    </div>
  )
}

