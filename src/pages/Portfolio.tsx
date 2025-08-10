import { ExternalLink, Github, Star, Users, ShoppingCart, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "PerfumePulse",
      category: "E-commerce Platform",
      description: "A sophisticated e-commerce perfume platform featuring personalized recommendation system, advanced wishlist functionality, secure payment integration, and comprehensive inventory management.",
      image: "/placeholder.svg",
      icon: ShoppingCart,
      achievements: [
        "85% user satisfaction rate",
        "Personalized recommendation engine",
        "Secure payment gateway integration",
        "Real-time inventory management",
        "Mobile-responsive design"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      metrics: {
        satisfaction: "85%",
        performance: "A+ Grade",
        mobile: "100%"
      },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "RecipeRealm",
      category: "Smart Recipe Platform",
      description: "An intelligent recipe suggestion platform with machine learning-powered preference learning, advanced search capabilities, nutritional information integration, and personalized meal planning.",
      image: "/placeholder.svg",
      icon: BookOpen,
      achievements: [
        "70% improved recipe accuracy",
        "AI-powered preference learning",
        "Advanced search & filtering",
        "Nutritional information integration",
        "Meal planning capabilities"
      ],
      technologies: ["React.js", "Python", "Machine Learning", "REST API", "PostgreSQL"],
      metrics: {
        accuracy: "70%",
        users: "5K+",
        recipes: "10K+"
      },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Ceylon Handloom",
      category: "Digital Marketing Campaign",
      description: "Comprehensive digital marketing transformation for a traditional handloom business, including e-commerce development, social media strategy, and performance marketing campaigns.",
      image: "/placeholder.svg",
      icon: Users,
      achievements: [
        "800+ sales generated",
        "150% artisan income increase",
        "2.5x ROAS on Facebook Ads",
        "40% conversion rate improvement",
        "300% brand awareness boost"
      ],
      technologies: ["Facebook Ads", "Google Analytics", "Shopify", "SEO", "Content Marketing"],
      metrics: {
        sales: "800+",
        roas: "2.5x",
        growth: "300%"
      },
      links: {
        live: "#",
        case_study: "#"
      }
    },
    {
      id: 4,
      title: "SMS Garment Association",
      category: "SEO & Platform Development",
      description: "Development and SEO optimization of a comprehensive platform serving 50+ garment businesses, with official endorsement from the Ministry of Industries.",
      image: "/placeholder.svg",
      icon: Star,
      achievements: [
        "50+ businesses onboarded",
        "Ministry of Industries endorsement",
        "60% faster inquiry responses",
        "Improved industry connectivity",
        "Scalable digital infrastructure"
      ],
      technologies: ["WordPress", "SEO", "Google Analytics", "Custom Development"],
      metrics: {
        businesses: "50+",
        response: "60%",
        traffic: "200%"
      },
      links: {
        live: "#",
        case_study: "#"
      }
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Star },
    { label: "Client Satisfaction", value: "100%", icon: Users },
    { label: "Average ROAS", value: "2.5x", icon: ShoppingCart },
    { label: "Total Sales Generated", value: "800+", icon: ExternalLink }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of successful digital marketing campaigns and web development 
            projects that have driven real business results for clients.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground">
                        {project.category}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <project.icon className="h-12 w-12 text-muted-foreground" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-accent">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.links.live && (
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                  {project.links.case_study && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Case Study
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-lg p-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and explore how I can help 
            you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Start a Project</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;