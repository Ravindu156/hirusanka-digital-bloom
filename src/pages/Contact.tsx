import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your business to the next level? Let's discuss your project and explore how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-up bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-400">I'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                <Input id="subject" placeholder="Project inquiry" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project..." rows={6} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400" />
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span className="text-gray-300">+94 768824741</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span className="text-gray-300">ravinduneththasingha156@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span className="text-gray-300">441/c, Dematagolla, Horampella</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild className="bg-slate-700/50 text-white border-slate-600 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-400">
                  <a href="https://github.com/Ravindu156" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="bg-slate-700/50 text-white border-slate-600 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-400">
                  <a href="https://linkedin.com/in/ravinduhirusanka" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-white">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">4+ years of proven experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">2.5x average ROAS on campaigns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">100% client satisfaction rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Fast turnaround times</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;