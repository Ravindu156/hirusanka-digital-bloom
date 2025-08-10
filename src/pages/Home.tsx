import { ArrowRight, Download, GraduationCap, Award, Target, Users, BarChart3, TrendingUp, Globe, Search, Smartphone, Code, Palette, BarChart, Database, Calendar, MapPin, ExternalLink, Github, Star, ShoppingCart, BookOpen, Mail, Phone, Send, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ravindImage from "@/components/Images/ravindu.png";

const Home = () => {
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
    }
  ];

  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-500",
      skills: ["Java", "Spring Boot", "React.js", "Node.js", "MySQL", "MongoDB"]
    },
    {
      id: 2,
      title: "Digital Marketing Tools",
      icon: BarChart,
      color: "text-accent",
      skills: ["Google Analytics", "Meta Ads Manager", "Google Ads Manager", "Ahrefs", "SemRush"]
    },
    {
      id: 3,
      title: "Web Development",
      icon: Globe,
      color: "text-green-500",
      skills: ["WordPress", "Shopify", "Looker Studio", "Responsive Design", "UI/UX Design"]
    }
  ];

  const experiences = [
    {
      id: 1,
      company: "Ceylon Handloom",
      position: "Owner / Digital Marketer",
      duration: "2021 - Present",
      location: "Sri Lanka",
      type: "Full-time",
      description: "Leading digital marketing initiatives and business operations for a traditional handloom business, transforming it into a modern e-commerce success story.",
      achievements: [
        "Generated 800+ sales through strategic digital marketing campaigns",
        "Achieved 150% increase in artisan income through improved market reach",
        "Maintained 2.5x ROAS on Facebook Ads campaigns consistently"
      ],
      skills: ["Digital Marketing", "E-commerce", "Facebook Ads", "Brand Strategy", "Business Operations", "ROI Optimization"]
    },
    {
      id: 2,
      company: "SMS Garment Association",
      position: "SEO Specialist",
      duration: "Project-based",
      location: "Sri Lanka",
      type: "Contract",
      description: "Developed and implemented SEO strategies for a comprehensive platform serving 50+ garment businesses.",
      achievements: [
        "Successfully launched platform for 50+ garment businesses",
        "Received official endorsement from Ministry of Industries",
        "Achieved 60% faster inquiry response times through platform optimization"
      ],
      skills: ["SEO", "Platform Development", "Industry Relations", "Digital Strategy", "Performance Optimization"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "PerfumePulse",
      category: "E-commerce Platform",
      description: "A sophisticated e-commerce perfume platform featuring personalized recommendation system and secure payment integration.",
      icon: ShoppingCart,
      achievements: [
        "85% user satisfaction rate",
        "Personalized recommendation engine",
        "Secure payment gateway integration"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      metrics: {
        satisfaction: "85%",
        performance: "A+ Grade",
        mobile: "100%"
      }
    },
    {
      id: 2,
      title: "RecipeRealm",
      category: "Smart Recipe Platform",
      description: "An intelligent recipe suggestion platform with machine learning-powered preference learning and advanced search capabilities.",
      icon: BookOpen,
      achievements: [
        "70% improved recipe accuracy",
        "AI-powered preference learning",
        "Advanced search & filtering"
      ],
      technologies: ["React.js", "Python", "Machine Learning", "REST API", "PostgreSQL"],
      metrics: {
        accuracy: "70%",
        users: "5K+"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hey There,{" "}
                  <span className="block text-accent">I'm Ravindu</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  Results-driven Digital Marketer & IT Professional
                </p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Transforming businesses through data-driven marketing strategies 
                  and cutting-edge web solutions. 4+ years of proven success in 
                  maximizing ROI and driving measurable results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <a href="#portfolio">
                    Explore My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-accent">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">800+</div>
                  <div className="text-sm text-muted-foreground">Successful Sales</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">2.5x</div>
                  <div className="text-sm text-muted-foreground">Average ROAS</div>
                </div>
              </div>
            </div>
            
            {/* Profile Picture */}
            <div className="relative animate-slide-up">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-accent/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                
                {/* Main profile image */}
                <div className="relative bg-gradient-to-br from-accent to-primary p-1 rounded-full">
                  <img
                    src={ravindImage}
                    alt="Ravindu Hirusanka - Digital Marketer & IT Professional"
                    className="w-full h-auto rounded-full bg-background object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold text-accent mb-2">150%</div>
              <div className="text-sm text-muted-foreground">Artisan Income Boost</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Conversion Rate Improvement</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-accent mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Brand Awareness Increase</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-accent mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Faster Inquiry Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about bridging the gap between technology and marketing to create 
              exceptional digital experiences that drive real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-3xl font-bold text-foreground">My Story</h3>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Results-driven Senior Digital Marketer with a Bachelor's in Information Technology 
                  and 4+ years of experience in social media management and brand growth. 
                  I specialize in crafting data-driven marketing strategies that maximize 
                  engagement, conversions, and ROI.
                </p>
                <p>
                  My unique combination of technical expertise and strong analytical skills 
                  allows me to transform complex data into impactful digital campaigns that 
                  drive measurable results.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-up">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              My <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth and maximize ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="animate-slide-up hover:shadow-lg transition-shadow" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-accent/10`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-2">{service.results}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              My <span className="text-accent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse skill set combining technical expertise with marketing excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={category.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-accent/10`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-accent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A track record of delivering exceptional results and driving business growth.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={experience.id} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{experience.position}</CardTitle>
                      <div className="flex items-center text-accent font-semibold mb-2">
                        <span>{experience.company}</span>
                        <Badge variant="outline" className="ml-2">{experience.type}</Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {experience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-muted-foreground">
                            <TrendingUp className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate technical excellence and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <project.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{project.category}</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-muted-foreground text-sm">
                            <Star className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-accent">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take your business to the next level? Let's discuss your project and explore how I can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project..." rows={6} />
                </div>
                <Button className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">ravindu@example.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+94 77 123 4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4 pt-4">
                <Button variant="outline" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;