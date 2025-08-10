import { BarChart3, Target, TrendingUp, Globe, Search, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals, combining data-driven insights with creative execution.",
      icon: Target,
      features: [
        "Market Research & Analysis",
        "Customer Journey Mapping",
        "Multi-channel Campaign Planning",
        "ROI Optimization",
        "Performance Tracking & Reporting"
      ],
      results: "2.5x Average ROAS",
      color: "text-accent"
    },
    {
      id: 2,
      title: "Meta & Google Ads Management",
      description: "Expert management of Facebook, Instagram, and Google advertising campaigns with proven track record of delivering exceptional results.",
      icon: TrendingUp,
      features: [
        "Campaign Creation & Setup",
        "Advanced Audience Targeting",
        "Creative Asset Development",
        "Bid Strategy Optimization",
        "Continuous Performance Monitoring"
      ],
      results: "800+ Sales Generated",
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Build and grow your brand presence across social media platforms with engaging content and strategic community management.",
      icon: Smartphone,
      features: [
        "Content Strategy Development",
        "Social Media Management",
        "Community Engagement",
        "Influencer Collaboration",
        "Brand Voice Development"
      ],
      results: "300% Brand Awareness Increase",
      color: "text-pink-500"
    },
    {
      id: 4,
      title: "SEO & Website Optimization",
      description: "Improve your online visibility and drive organic traffic with comprehensive SEO strategies and website optimization.",
      icon: Search,
      features: [
        "Technical SEO Audits",
        "Keyword Research & Strategy",
        "On-page Optimization",
        "Local SEO",
        "Performance Analytics"
      ],
      results: "60% Faster Response Times",
      color: "text-green-500"
    },
    {
      id: 5,
      title: "E-commerce Development",
      description: "Build and optimize e-commerce platforms that convert visitors into customers with seamless user experiences.",
      icon: Globe,
      features: [
        "Custom E-commerce Development",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Mobile-responsive Design",
        "Conversion Rate Optimization"
      ],
      results: "40% Conversion Rate Improvement",
      color: "text-purple-500"
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      description: "Transform complex data into actionable insights with comprehensive analytics setup and detailed performance reporting.",
      icon: BarChart3,
      features: [
        "Google Analytics Setup",
        "Custom Dashboard Creation",
        "Performance Tracking",
        "Conversion Analytics",
        "Regular Reporting"
      ],
      results: "Data-Driven Decision Making",
      color: "text-orange-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your business goals, target audience, and market landscape to create a tailored strategy."
    },
    {
      step: "02",
      title: "Planning & Setup",
      description: "Detailed planning and setup of campaigns, tracking systems, and optimization frameworks."
    },
    {
      step: "03",
      title: "Execution & Launch",
      description: "Launch campaigns with continuous monitoring and real-time optimization for maximum performance."
    },
    {
      step: "04",
      title: "Analysis & Optimization",
      description: "Regular analysis, reporting, and optimization to ensure sustained growth and improved ROI."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing and development services designed to 
            accelerate your business growth and maximize your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-background border ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {service.results}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              My <span className="text-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures consistent results and exceptional client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div 
                key={process.step}
                className="text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-lg p-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how my digital marketing expertise can help you achieve 
            your business goals and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;