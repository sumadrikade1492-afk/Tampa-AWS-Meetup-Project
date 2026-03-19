"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { DeveloperProfile } from "@/lib/talent-data"

const statusConfig = {
  actively_looking: {
    label: "Actively looking",
    className: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  open_to_offers: {
    label: "Open to offers",
    className: "bg-sky-100 text-sky-800 border-sky-200",
  },
  not_looking: {
    label: "Not looking",
    className: "bg-gray-100 text-gray-600 border-gray-200",
  },
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

const avatarColors = [
  "bg-orange-500",
  "bg-blue-600",
  "bg-emerald-600",
  "bg-rose-600",
  "bg-amber-600",
  "bg-cyan-600",
  "bg-indigo-600",
  "bg-teal-600",
  "bg-pink-600",
  "bg-violet-600",
]

export function DeveloperCard({ developer }: { developer: DeveloperProfile }) {
  const status = statusConfig[developer.status]
  const colorIndex = parseInt(developer.id, 10) % avatarColors.length
  const avatarColor = avatarColors[colorIndex]

  return (
    <Card className="h-full border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-12 w-12 shrink-0">
            <AvatarFallback className={`${avatarColor} text-white font-semibold text-sm`}>
              {getInitials(developer.name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-foreground truncate">
                {developer.name}
              </h3>
              {developer.isNew && (
                <Badge variant="secondary" className="bg-primary/10 text-primary text-xs shrink-0">
                  New
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
              {developer.headline}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <Badge variant="outline" className={`text-xs font-medium ${status.className}`}>
            {status.label}
          </Badge>
        </div>

        <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-4">
          {developer.bio}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {developer.skills.slice(0, 5).map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs font-normal bg-muted text-muted-foreground"
            >
              {skill}
            </Badge>
          ))}
          {developer.skills.length > 5 && (
            <Badge
              variant="secondary"
              className="text-xs font-normal bg-muted text-muted-foreground"
            >
              +{developer.skills.length - 5}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
