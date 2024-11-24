import {
  Activity,
  Brain,
  Heart,
  Home,
  Moon,
  Timer,
  Utensils,
  Users,
} from "lucide-react"

export interface NavItem {
  id: string
  name: string
  href: string
  icon: typeof Home
}

export const navigation: NavItem[] = [
  {
    id: "home",
    name: "Overview",
    href: "/",
    icon: Home,
  },
  {
    id: "general-health",
    name: "General Health",
    href: "/general-health",
    icon: Heart,
  },
  {
    id: "mental-health",
    name: "Mental Health",
    href: "/mental-health",
    icon: Brain,
  },
  {
    id: "nutrition",
    name: "Nutrition",
    href: "/nutrition",
    icon: Utensils,
  },
  {
    id: "fitness",
    name: "Fitness",
    href: "/fitness",
    icon: Activity,
  },
  {
    id: "sleep",
    name: "Sleep & Recovery",
    href: "/sleep",
    icon: Moon,
  },
  {
    id: "social",
    name: "Social Connections",
    href: "/social",
    icon: Users,
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    href: "/lifestyle",
    icon: Timer,
  }
]
