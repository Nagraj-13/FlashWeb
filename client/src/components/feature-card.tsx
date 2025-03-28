import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("rounded-xl border border-gray-800 p-6 flex flex-col items-center text-center", className)}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

