import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, Users, Calendar, Trophy, Briefcase, Video } from "lucide-react"

const resources = [
  {
    category: "Official FBLA",
    icon: Briefcase,
    items: [
      {
        name: "FBLA National Website",
        url: "https://www.fbla.org",
        description: "Official national organization site",
      },
      {
        name: "Competitive Events Guide",
        url: "https://www.fbla.org/competitive-events",
        description: "Complete guide to all competitions",
      },
      { name: "Chapter Management Guide", url: "https://www.fbla.org/adviser-resources/", description: "Best practices for running your chapter" },
      { name: "Officer Handbook", url: "https://www.pafbla.org/handbook/the-local-chapter/4-05-officer-responsibilities/", description: "Roles and responsibilities for officers" },
    ],
  },
  {
    category: "Event Planning",
    icon: Calendar,
    items: [
      { name: "Event Planning Template", url: "https://www.pafbla.org/chapter-area/chapter-management/", description: "Organize successful chapter events" },
      { name: "Meeting Agenda Templates", url: "https://www.pafbla.org/chapter-area/chapter-management/", description: "Structure productive meetings" },
      { name: "Fundraising Ideas", url: "https://www.fbla.org/adviser-resources/", description: "Proven fundraising strategies" },
      { name: "Community Service Projects", url: "https://www.fbla.org/adviser-resources/", description: "Make an impact in your community" },
    ],
  },
  {
    category: "Competition Prep",
    icon: Trophy,
    items: [
      { name: "Study Guides & Practice Tests", url: "https://www.fbla.org/competitive-events/preparation-resources-ms/", description: "Prepare for competitive events" },
      { name: "Past Competition Questions", url: "https://connect.fbla.org/headquarters/files/High School Competitive Events Resources/", description: "Review previous years' materials" },
      { name: "Presentation Tips", url: "https://www.fbla.org/competitive-events", description: "Deliver winning presentations" },
      { name: "Business Plan Templates", url: "https://www.fbla.org/competitive-events", description: "Create professional business plans" },
    ],
  },
  {
    category: "Leadership Development",
    icon: Users,
    items: [
      { name: "Leadership Training Modules", url: "https://www.fbla.org/adviser-resources/", description: "Develop essential leadership skills" },
      { name: "Public Speaking Resources", url: "https://www.fbla.org/competitive-events", description: "Become a confident speaker" },
      { name: "Team Building Activities", url: "https://www.pafbla.org/chapter-area/chapter-management/", description: "Strengthen your chapter bonds" },
      { name: "Networking Guide", url: "https://www.fbla.org/adviser-resources/", description: "Build professional connections" },
    ],
  },
  {
    category: "Marketing & Social Media",
    icon: Video,
    items: [
      { name: "Social Media Templates", url: "https://wafbla.org/adviser-resources/", description: "Promote your chapter online" },
      { name: "Graphic Design Tools", url: "https://www.fbla.org/about/", description: "Create professional materials" },
      { name: "Newsletter Templates", url: "https://www.fbla.org/adviser-resources/", description: "Keep members informed" },
      { name: "Recruitment Strategies", url: "https://www.fbla.org/adviser-resources/", description: "Grow your chapter membership" },
    ],
  },
  {
    category: "Documents & Forms",
    icon: FileText,
    items: [
      { name: "Budget Templates", url: "https://www.pafbla.org/chapter-area/chapter-management/", description: "Manage chapter finances" },
      { name: "Permission Forms", url: "https://www.fbla.org/adviser-resources/", description: "Event and travel documentation" },
      { name: "Membership Applications", url: "https://www.fbla.org/membership/", description: "Streamline new member signup" },
      { name: "Officer Transition Guide", url: "https://www.pafbla.org/handbook/the-local-chapter/4-05-officer-responsibilities/", description: "Ensure smooth leadership changes" },
    ],
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Officer Resources</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Comprehensive collection of tools, templates, and guides to help you excel in your role
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {resources.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          className="group flex items-start gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}