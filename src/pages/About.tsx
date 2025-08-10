import { GraduationCap, Award, Target, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ravindImage from "@/components/Images/ravindu.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about bridging the gap between technology and marketing to create 
            exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Main Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Text */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
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
                drive measurable results. I believe in the power of technology to amplify 
                marketing efforts and create meaningful connections between brands and their audiences.
              </p>
              <p>
                Whether I'm developing a responsive web application or optimizing a social 
                media campaign, my focus remains on delivering solutions that not only meet 
                but exceed expectations.
              </p>
            </div>
            
            <Button size="lg" asChild className="mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
              <a href="https://drive.google.com/file/d/1P7W6WNXWCzdOsLpMLzAitGJAAOR9bz-1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Profile Image & Stats */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <img
                src={ravindImage}
                alt="Ravindu Hirusanka"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Education & Career Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="animate-fade-in bg-slate-800/50 border-slate-700 backdrop-blur-sm" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-white">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white">BSc. Information Technology</h3>
                  <p className="text-sm text-gray-400">University Degree</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Multiple Certifications</h3>
                  <p className="text-sm text-gray-400">Google Analytics, HubSpot, and more</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expertise */}
          <Card className="animate-fade-in bg-slate-800/50 border-slate-700 backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-purple-400" />
                <CardTitle className="text-white">Expertise</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white">Digital Marketing</h3>
                  <p className="text-sm text-gray-400">Social Media, SEO, Paid Ads</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Web Development</h3>
                  <p className="text-sm text-gray-400">React, Node.js, Full-stack</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="animate-fade-in bg-slate-800/50 border-slate-700 backdrop-blur-sm" style={{animationDelay: '0.5s'}}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-white">Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white">2.5x ROAS</h3>
                  <p className="text-sm text-gray-400">Average Facebook Ads Performance</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">800+ Sales</h3>
                  <p className="text-sm text-gray-400">Generated for Ceylon Handloom</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;