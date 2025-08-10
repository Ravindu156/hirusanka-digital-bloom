import { Award, Calendar, ExternalLink, Download, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Google Analytics Certification",
      issuer: "Google",
      year: "2024",
      category: "Analytics",
      description: "Comprehensive certification covering Google Analytics 4 implementation, data analysis, and reporting for digital marketing optimization.",
      skills: ["Google Analytics 4", "Data Analysis", "Conversion Tracking", "Custom Reports"],
      credentialUrl: "#",
      verified: true
    },
    {
      id: 2,
      title: "AI-Powered Performance Ads Certification",
      issuer: "Google",
      year: "2024",
      category: "Advertising",
      description: "Advanced certification in AI-driven advertising strategies, machine learning optimization, and performance marketing using Google's AI tools.",
      skills: ["AI Advertising", "Performance Marketing", "Machine Learning", "Campaign Optimization"],
      credentialUrl: "#",
      verified: true
    },
    {
      id: 3,
      title: "Manage GA4 Data and Learn to Read Reports",
      issuer: "Google",
      year: "2023",
      category: "Analytics",
      description: "Specialized training in Google Analytics 4 data management, report interpretation, and actionable insights extraction.",
      skills: ["GA4 Management", "Data Interpretation", "Report Analysis", "Business Intelligence"],
      credentialUrl: "#",
      verified: true
    },
    {
      id: 4,
      title: "Inbound Certified",
      issuer: "HubSpot Academy",
      year: "2023",
      category: "Marketing",
      description: "Comprehensive certification in inbound marketing methodology, content strategy, lead nurturing, and customer acquisition.",
      skills: ["Inbound Marketing", "Content Strategy", "Lead Generation", "Marketing Automation"],
      credentialUrl: "#",
      verified: true
    },
    {
      id: 5,
      title: "Certificate in International English Language (B2 Level)",
      issuer: "City & Guilds in Association with British Council",
      year: "2022",
      category: "Language",
      description: "Professional-level English language certification demonstrating advanced communication skills for international business.",
      skills: ["English Proficiency", "Business Communication", "International Standards", "Professional Writing"],
      credentialUrl: "#",
      verified: true
    },
    {
      id: 6,
      title: "Get to Know Advertising with Google",
      issuer: "Google",
      year: "2023",
      category: "Advertising",
      description: "Foundational certification covering Google Ads fundamentals, campaign setup, and basic optimization strategies.",
      skills: ["Google Ads", "Campaign Management", "Advertising Fundamentals", "Budget Optimization"],
      credentialUrl: "#",
      verified: true
    },
    {
      id: 7,
      title: "Google Solutions for Google Partners Program – Data & Analytics",
      issuer: "Google",
      year: "2024",
      category: "Analytics",
      description: "Partner-level certification demonstrating expertise in Google's data and analytics solutions for business growth.",
      skills: ["Partner Solutions", "Data Analytics", "Business Growth", "Google Ecosystem"],
      credentialUrl: "#",
      verified: true
    }
  ];

  const categories = [
    { name: "Analytics", count: 3, color: "bg-blue-500" },
    { name: "Advertising", count: 2, color: "bg-accent" },
    { name: "Marketing", count: 1, color: "bg-green-500" },
    { name: "Language", count: 1, color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Certificates</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in digital marketing, 
            analytics, and modern advertising strategies from industry leaders.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={category.name} className="text-center animate-fade-in bg-white border-purple-200 shadow-sm hover:shadow-purple-200 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{category.count}</div>
                <div className="text-sm text-gray-600">{category.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.id}
              className="group hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-white border-purple-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-purple-600" />
                    {cert.verified && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                    {cert.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                  {cert.title}
                </CardTitle>
                
                <CardDescription className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-700">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.year}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
                
                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-purple-100 text-purple-800 border-purple-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Credential
                  </Button>
                  <Button size="sm" variant="ghost" className="text-purple-600 hover:bg-purple-50">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-white border border-purple-200 rounded-lg p-8 mb-12 animate-fade-in shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification Summary</h2>
            <p className="text-gray-600">
              Continuous learning and professional development in cutting-edge digital marketing technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">7</div>
              <div className="text-sm text-gray-600">Total Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">4</div>
              <div className="text-sm text-gray-600">Different Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">2024</div>
              <div className="text-sm text-gray-600">Latest Certification</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-600">Verified Credentials</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work with a Certified Professional?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            My certifications ensure that you're working with someone who stays current 
            with the latest industry standards and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-purple-300 text-purple-700 hover:bg-purple-50">
              <a href="/services">View My Services</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;