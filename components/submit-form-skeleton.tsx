import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function SubmitFormSkeleton() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="skeleton mx-auto h-8 w-64" />
          <div className="skeleton mx-auto h-4 w-96" />
        </div>

        <Card>
          <CardHeader>
            <div className="skeleton h-6 w-40" />
            <div className="skeleton h-4 w-80" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="skeleton h-4 w-32" />
                <div className="flex gap-2">
                  <div className="skeleton h-10 flex-1" />
                  <div className="skeleton h-10 w-20" />
                </div>
              </div>

              <div className="rounded-lg border p-4 space-y-4">
                <div className="space-y-2">
                  <div className="skeleton h-4 w-40" />
                  <div className="grid grid-cols-2 gap-4">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i}>
                          <div className="skeleton h-4 w-20" />
                          <div className="skeleton h-4 w-24 mt-1" />
                        </div>
                      ))}
                  </div>
                  <div>
                    <div className="skeleton h-4 w-24" />
                    <div className="skeleton h-4 w-full mt-1" />
                    <div className="skeleton h-4 w-4/5 mt-1" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="skeleton h-4 w-24" />
                <div className="grid grid-cols-3 gap-2">
                  {Array(9)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="skeleton h-4 w-4 rounded" />
                        <div className="skeleton h-4 w-16" />
                      </div>
                    ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="skeleton h-4 w-32" />
                <div className="skeleton h-10 w-full" />
              </div>

              <div className="skeleton h-10 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
