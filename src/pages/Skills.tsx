import { Code, Palette, BarChart, Globe, Database, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-400",
      skills: ["Java", "Spring Boot", "React.js", "Node.js", "MySQL", "MongoDB"]
    },
    {
      id: 2,
      title: "Digital Marketing Tools",
      icon: BarChart,
      color: "text-cyan-400",
      skills: ["Google Analytics", "Meta Ads Manager", "Google Ads Manager", "Ahrefs", "SemRush"]
    },
    {
      id: 3,
      title: "Web Development",
      icon: Globe,
      color: "text-green-400",
      skills: ["WordPress", "Shopify", "Looker Studio", "Responsive Design", "UI/UX Design"]
    },
    {
      id: 4,
      title: "Technical Skills",
      icon: Database,
      color: "text-purple-400",
      skills: ["Performance Analytics", "SEO/SEM", "Content Creativity", "Fast Adaptability"]
    },
    {
      id: 5,
      title: "Social Media Marketing",
      icon: Smartphone,
      color: "text-pink-400",
      skills: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Content Strategy"]
    },
    {
      id: 6,
      title: "Soft Skills",
      icon: Palette,
      color: "text-orange-400",
      skills: ["Problem Solving", "Self-learning", "Presentation", "Adaptability", "Data Analysis"]
    }
  ];

  const proficiencyLevels = [
    { name: "Expert", count: 8, color: "bg-gradient-to-r from-cyan-500 to-purple-500" },
    { name: "Advanced", count: 12, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Intermediate", count: 6, color: "bg-gradient-to-r from-green-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit combining technical expertise with creative marketing 
            strategies to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-slate-800/50 border-slate-700 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-slate-700/50 border border-slate-600 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                    <CardDescription className="text-gray-400">{category.skills.length} skills</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs bg-slate-700/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors border-slate-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Overview */}
        <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-8 mb-16 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Skill <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Proficiency</span> Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {proficiencyLevels.map((level, index) => (
              <div key={level.name} className="text-center">
                <div className={`w-20 h-20 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{level.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{level.name}</h3>
                <p className="text-sm text-gray-400">
                  {level.name === 'Expert' && 'Technologies I use daily and master completely'}
                  {level.name === 'Advanced' && 'Strong proficiency with practical experience'}
                  {level.name === 'Intermediate' && 'Good understanding with growing expertise'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <h2 className="text-2xl font-bold text-white mb-8">
            Key <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Strengths</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">4+</div>
              <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">26</div>
              <div className="text-sm text-gray-400">Core Technologies</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">2.5x</div>
              <div className="text-sm text-gray-400">Average Campaign ROAS</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;