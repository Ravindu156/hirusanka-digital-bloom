import { ArrowRight, Download, GraduationCap, Award, Target, Users, BarChart3, TrendingUp, Globe, Search, Smartphone, Code, Palette, BarChart, Database, Calendar, MapPin, ExternalLink, Github, Star, ShoppingCart, BookOpen, Mail, Phone, Send, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import ravindImage from "@/components/Images/ravindu.png";
import badge1 from "@/components/Images/Badges/1742742703839.jpeg";
import badge2 from "@/components/Images/Badges/Screenshot 2025-08-10 161546.png";
import badge3 from "@/components/Images/Badges/Screenshot 2025-08-10 162547.png";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('o8fIbY5Xi4y5oITC3');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      console.log('Sending email with data:', formData);
      
      const result = await emailjs.send(
        'service_5fi1q6b',
        'template_xy3b7jh',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Ravindu',
        }
      );
      
      console.log('EmailJS result:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hey There,{" "}
                  <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">I'm Ravindu</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                  Results-driven Digital Marketer & IT Professional
                </p>
                <p className="text-lg text-gray-400 max-w-xl">
                  Transforming businesses through data-driven marketing strategies 
                  and cutting-edge web solutions. 4+ years of proven success in 
                  maximizing ROI and driving measurable results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                  <a href="#portfolio">
                    Explore My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group bg-white/10 text-white border-white/20 hover:bg-red-500 hover:text-white hover:border-red-500 backdrop-blur-sm">
                  <a href="https://drive.google.com/file/d/1P7W6WNXWCzdOsLpMLzAitGJAAOR9bz-1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">800+</div>
                  <div className="text-sm text-gray-400">Successful Sales</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">2.5x</div>
                  <div className="text-sm text-gray-400">Average ROAS</div>
                </div>
              </div>
            </div>
            
            {/* Profile Picture */}
            <div className="relative animate-slide-up">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                
                {/* Main profile image */}
                <div className="relative bg-gradient-to-br from-cyan-400 to-purple-500 p-1 rounded-full">
                  <img
                    src={ravindImage}
                    alt="Ravindu Hirusanka - Digital Marketer & IT Professional"
                    className="w-full h-auto rounded-full bg-slate-900 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">150%</div>
              <div className="text-sm text-gray-400"> Income Boost</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">40%</div>
              <div className="text-sm text-gray-400">Conversion Rate Improvement</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">300%</div>
              <div className="text-sm text-gray-400">Brand Awareness Increase</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">60%</div>
              <div className="text-sm text-gray-400">Faster Inquiry Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified By Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Certified <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">By</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Recognized expertise backed by industry-leading certifications and achievements
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-8 lg:gap-12">
            <div className="group text-center animate-fade-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 p-3 backdrop-blur-sm border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <img
                    src={badge1}
                    alt="Digital Marketing Certification"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-sm font-semibold text-white mb-1">Digital Marketing</div>
              <div className="text-xs text-gray-400">Professional Certification</div>
            </div>
            
            <div className="group text-center animate-fade-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-400/20 p-3 backdrop-blur-sm border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300">
                  <img
                    src={badge2}
                    alt="Analytics Certification"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-sm font-semibold text-white mb-1">Analytics Expert</div>
              <div className="text-xs text-gray-400">Advanced Certification</div>
            </div>
            
            <div className="group text-center animate-fade-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.6s'}}>
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 p-3 backdrop-blur-sm border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <img
                    src={badge3}
                    alt="Excellence Award"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-sm font-semibold text-white mb-1">Excellence Award</div>
              <div className="text-xs text-gray-400">Industry Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about bridging the gap between technology and marketing to create 
              exceptional digital experiences that drive real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-3xl font-bold text-white">My Story</h3>
              <div className="prose prose-lg text-gray-300 space-y-4">
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
              <Card className="text-center bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth and maximize ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="animate-slide-up hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 bg-slate-800/50 border-slate-700 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20`}>
                      <service.icon className={`w-6 h-6 ${service.color === 'text-accent' ? 'text-cyan-400' : service.color === 'text-blue-500' ? 'text-blue-400' : 'text-pink-400'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-2 border-cyan-400/50 text-cyan-400">{service.results}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3" />
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
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse skill set combining technical expertise with marketing excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={category.id} className="animate-slide-up bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20`}>
                      <category.icon className={`w-6 h-6 ${category.color === 'text-accent' ? 'text-cyan-400' : category.color === 'text-blue-500' ? 'text-blue-400' : 'text-green-400'}`} />
                    </div>
                    <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-slate-700/50 text-gray-300 border-slate-600">
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
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A track record of delivering exceptional results and driving business growth.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={experience.id} className="animate-slide-up bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2 text-white">{experience.position}</CardTitle>
                      <div className="flex items-center text-cyan-400 font-semibold mb-2">
                        <span>{experience.company}</span>
                        <Badge variant="outline" className="ml-2 border-purple-400/50 text-purple-400">{experience.type}</Badge>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
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
                  <CardDescription className="text-base mt-4 text-gray-300">
                    {experience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-gray-300">
                            <TrendingUp className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-slate-700/50 text-gray-300 border-slate-600">
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
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate technical excellence and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 animate-slide-up bg-slate-800/50 border-slate-700 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                        <project.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                        <Badge variant="outline" className="mt-1 border-purple-400/50 text-purple-400">{project.category}</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-400">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-400">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4 text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-700/50 text-gray-300 border-slate-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
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
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to take your business to the next level? Let's discuss your project and explore how I can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-slide-up bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-300">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com" 
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400" 
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..." 
                      rows={6} 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400" 
                      required
                    />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                      <p className="text-green-400 text-sm">✅ Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <p className="text-red-400 text-sm">❌ Failed to send message. Please try again or contact me directly.</p>
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed" 
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">ravinduneththasingha156@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+94 76 882 4741</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-300">441/c, Dematagolla, Horampella, Minuwangoda</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4 pt-4">
                <Button variant="outline" size="icon" className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 hover:border-cyan-400">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-purple-400 hover:border-purple-400">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 hover:border-cyan-400">
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