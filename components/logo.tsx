import { TrendingUp } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center rounded-md bg-primary p-1.5">
        <TrendingUp className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-bold text-lg tracking-tight">Underdog Ranker</span>
    </div>
  )
}
