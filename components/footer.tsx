import { BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="font-bold">FBLA Resources</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#resources" className="hover:text-primary transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-primary transition-colors">
                    Business Education
                  </a>
                </li>
                <li>
                  <a href="https://www.fbla.org" className="hover:text-primary transition-colors">
                    FBLA National
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Join FBLA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Start a Chapter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Become an Officer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
