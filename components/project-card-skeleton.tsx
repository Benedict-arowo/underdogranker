import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <div className="skeleton h-5 w-5 rounded-full" />
          <div className="skeleton h-5 w-32" />
        </div>
        <div className="skeleton h-5 w-20 rounded-full" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-4/5" />
        </div>

        <div className="mt-4 flex gap-2">
          <div className="skeleton h-5 w-16 rounded-full" />
          <div className="skeleton h-5 w-16 rounded-full" />
          <div className="skeleton h-5 w-16 rounded-full" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="skeleton h-4 w-8" />
          <div className="skeleton h-4 w-8" />
          <div className="skeleton h-4 w-8" />
          <div className="skeleton h-4 w-8" />
        </div>

        <div className="skeleton h-9 w-full" />
      </CardFooter>
    </Card>
  )
}
