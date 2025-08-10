import { Calendar, MapPin, TrendingUp, Users, Globe, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
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
        "Maintained 2.5x ROAS on Facebook Ads campaigns consistently",
        "Improved conversion rates by 40% through optimized customer journey",
        "Increased brand awareness by 300% across social media platforms",
        "Built and scaled e-commerce platform from ground up"
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
      description: "Developed and implemented SEO strategies for a comprehensive platform serving 50+ garment businesses, receiving official endorsement from the Ministry of Industries.",
      achievements: [
        "Successfully launched platform for 50+ garment businesses",
        "Received official endorsement from Ministry of Industries",
        "Achieved 60% faster inquiry response times through platform optimization",
        "Implemented comprehensive SEO strategy improving organic visibility",
        "Created scalable digital infrastructure for industry association",
        "Delivered measurable ROI through improved business connections"
      ],
      skills: ["SEO", "Platform Development", "Industry Relations", "Digital Strategy", "Performance Optimization", "Stakeholder Management"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My <span className="text-accent">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of transforming businesses through strategic digital marketing 
            and innovative technology solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground mb-2">
                            {exp.position}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-accent mb-3">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {exp.description}
                      </p>
                      
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="text-3xl font-bold text-accent mb-2">800+</div>
              <div className="text-sm text-muted-foreground">Sales Generated</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-3xl font-bold text-accent mb-2">2.5x</div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Businesses Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;