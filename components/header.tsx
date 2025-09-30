import { BookOpen } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">FBLA Resources</h1>
              <p className="text-xs text-muted-foreground">Future Business Leaders of America</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Learn Business
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
