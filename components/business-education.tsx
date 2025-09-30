import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TrendingUp, DollarSign, Users, Target, BarChart, Lightbulb } from "lucide-react"

const businessTopics = [
  {
    title: "Entrepreneurship Fundamentals",
    icon: Lightbulb,
    color: "text-accent",
    lessons: [
      {
        name: "What is Entrepreneurship?",
        content:
          "Entrepreneurship is the process of creating, developing, and managing a new business venture to make a profit. Entrepreneurs identify opportunities, take calculated risks, and innovate to solve problems or meet market needs.",
      },
      {
        name: "Business Model Canvas",
        content:
          "A strategic tool that helps visualize and develop business models. It includes nine building blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure.",
      },
      {
        name: "Minimum Viable Product (MVP)",
        content:
          "The simplest version of a product that allows you to test your business idea with real customers. An MVP helps validate assumptions, gather feedback, and iterate quickly without investing too much time or money upfront.",
      },
    ],
  },
  {
    title: "Marketing Essentials",
    icon: Target,
    color: "text-primary",
    lessons: [
      {
        name: "The 4 Ps of Marketing",
        content:
          "Product (what you sell), Price (how much it costs), Place (where you sell it), and Promotion (how you communicate value). These four elements form the foundation of any marketing strategy and must work together cohesively.",
      },
      {
        name: "Target Market & Segmentation",
        content:
          "Identifying and dividing your potential customers into specific groups based on demographics, psychographics, behavior, and geography. Understanding your target market helps you tailor your messaging and product offerings effectively.",
      },
      {
        name: "Digital Marketing Basics",
        content:
          "Modern marketing leverages digital channels like social media, email, content marketing, SEO, and paid advertising. Digital marketing allows for precise targeting, measurable results, and cost-effective customer acquisition.",
      },
    ],
  },
  {
    title: "Financial Literacy",
    icon: DollarSign,
    color: "text-accent",
    lessons: [
      {
        name: "Income Statement, Balance Sheet & Cash Flow",
        content:
          "The three core financial statements. Income Statement shows profitability over time, Balance Sheet displays assets and liabilities at a point in time, and Cash Flow Statement tracks money moving in and out of the business.",
      },
      {
        name: "Budgeting & Forecasting",
        content:
          "Creating a budget helps plan and control spending, while forecasting predicts future financial performance. Both are essential for making informed business decisions and ensuring financial sustainability.",
      },
      {
        name: "Break-Even Analysis",
        content:
          "Calculating the point where total revenue equals total costs. Understanding your break-even point helps determine pricing strategies, sales targets, and the viability of your business model.",
      },
    ],
  },
  {
    title: "Leadership & Management",
    icon: Users,
    color: "text-primary",
    lessons: [
      {
        name: "Leadership Styles",
        content:
          "Different approaches to leading teams: Autocratic (directive), Democratic (participative), Transformational (inspirational), and Servant Leadership (supportive). Effective leaders adapt their style to the situation and team needs.",
      },
      {
        name: "Team Building & Motivation",
        content:
          "Creating high-performing teams requires clear goals, open communication, trust, and recognition. Understanding motivation theories like Maslow's Hierarchy and Herzberg's Two-Factor Theory helps inspire team members.",
      },
      {
        name: "Conflict Resolution",
        content:
          "Addressing disagreements constructively through active listening, empathy, and problem-solving. Effective conflict resolution strengthens relationships and leads to better outcomes for everyone involved.",
      },
    ],
  },
  {
    title: "Business Analytics",
    icon: BarChart,
    color: "text-accent",
    lessons: [
      {
        name: "Key Performance Indicators (KPIs)",
        content:
          "Measurable values that demonstrate how effectively a company achieves key business objectives. Common KPIs include revenue growth, customer acquisition cost, customer lifetime value, and profit margins.",
      },
      {
        name: "Data-Driven Decision Making",
        content:
          "Using data and analytics to guide business decisions rather than relying solely on intuition. This approach reduces risk, identifies opportunities, and improves overall business performance.",
      },
      {
        name: "Market Research Methods",
        content:
          "Techniques for gathering information about customers and competitors, including surveys, focus groups, interviews, and secondary research. Good market research informs product development and marketing strategies.",
      },
    ],
  },
  {
    title: "Business Strategy",
    icon: TrendingUp,
    color: "text-primary",
    lessons: [
      {
        name: "SWOT Analysis",
        content:
          "A strategic planning tool that examines Strengths, Weaknesses, Opportunities, and Threats. SWOT analysis helps businesses understand their competitive position and develop effective strategies.",
      },
      {
        name: "Competitive Advantage",
        content:
          "What makes your business unique and better than competitors. This could be cost leadership, differentiation, or focus on a specific niche. Sustainable competitive advantage is key to long-term success.",
      },
      {
        name: "Growth Strategies",
        content:
          "Methods for expanding your business: Market Penetration (selling more to existing customers), Market Development (new markets), Product Development (new products), and Diversification (new products in new markets).",
      },
    ],
  },
]

export function BusinessEducation() {
  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn Business Fundamentals</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Master essential business concepts that every future leader should know
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {businessTopics.map((topic) => {
            const Icon = topic.icon
            return (
              <Card key={topic.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${topic.color} bg-primary/10 p-2 rounded-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                  </div>
                  <CardDescription>Expand to explore key concepts and principles</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {topic.lessons.map((lesson, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-sm font-medium">{lesson.name}</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                          {lesson.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
