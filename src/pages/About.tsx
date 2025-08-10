import { GraduationCap, Award, Target, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about bridging the gap between technology and marketing to create 
            exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Main Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Text */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Results-driven Digital Marketer with a Bachelor's in Information Technology 
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
            
            <Button size="lg" className="mt-8">
              Download Resume
            </Button>
          </div>

          {/* Profile Image & Stats */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <img
                src="/lovable-uploads/29c932f2-3bd1-4bbb-89b5-fdc51ab7e8b7.png"
                alt="Ravindu Hirusanka"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Education & Career Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-accent" />
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">BSc. Information Technology</h3>
                  <p className="text-sm text-muted-foreground">University Degree</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Multiple Certifications</h3>
                  <p className="text-sm text-muted-foreground">Google Analytics, HubSpot, and more</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expertise */}
          <Card className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-accent" />
                <CardTitle>Expertise</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Digital Marketing</h3>
                  <p className="text-sm text-muted-foreground">Social Media, SEO, Paid Ads</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Web Development</h3>
                  <p className="text-sm text-muted-foreground">React, Node.js, Full-stack</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="animate-fade-in" style={{animationDelay: '0.5s'}}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-accent" />
                <CardTitle>Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">2.5x ROAS</h3>
                  <p className="text-sm text-muted-foreground">Average Facebook Ads Performance</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">800+ Sales</h3>
                  <p className="text-sm text-muted-foreground">Generated for Ceylon Handloom</p>
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