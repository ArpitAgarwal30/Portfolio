import React from 'react';
import { Download, Mail, ArrowRight, Briefcase, Code2, Users, Award, Linkedin, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const resumeUrl = 'https://customer-assets.emergentagent.com/job_0b03f8ae-141c-4c36-84a9-f9977aff6d4e/artifacts/zbax8kcd_Arpit_Agarwal_Resume.pdf';

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: '4+ Years',
      description: 'Professional Experience',
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Backend Expert',
      description: 'Microservices & REST APIs',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Team Leadership',
      description: 'Mentoring & Code Reviews',
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Certified',
      description: 'Microsoft AI-900',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            {/* Title */}
            <div className="mb-6">
              <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100 border-teal-200">
                Open to SDE-2 Opportunities
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Arpit Agarwal
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Full Stack Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              Software Development Engineer with 4+ years of experience building scalable backend systems and distributed applications using <span className="font-semibold text-gray-900">Java</span> and <span className="font-semibold text-gray-900">.NET Core</span>. Strong expertise in microservices, REST APIs, system design, and performance optimization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a href={resumeUrl} download="Arpit_Agarwal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 hover:border-teal-600 hover:text-teal-600"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-6 border-gray-200 hover:border-teal-600 transition-all duration-200 hover:shadow-md">
                  <div className="flex flex-col gap-3">
                    <div className="text-teal-600">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a <span className="font-semibold text-gray-900">Full Stack Engineer</span> with over 4 years of professional experience specializing in backend development, microservices architecture, and scalable system design.
              </p>
              <p className="text-lg">
                Currently working as a <span className="font-semibold text-gray-900">Senior Software Developer at Mindfire Solutions</span>, I design and own scalable backend microservices using Java and .NET Core. My expertise lies in building high-performance REST APIs, optimizing system reliability, and implementing clean architecture principles.
              </p>
              <p className="text-lg">
                I have a proven track record of delivering business-critical features, improving API response times, and mentoring junior engineers through code reviews and design discussions. My technical foundation includes strong knowledge of data structures, algorithms, OOP principles, and system design.
              </p>
              <p className="text-lg">
                I'm passionate about writing clean, maintainable code and collaborating with cross-functional teams to solve complex technical challenges. I thrive in Agile environments and am committed to continuous learning and engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Work Experience</h2>
          
          <div className="space-y-8">
            {/* Experience 1 */}
            <Card className="p-8 border-gray-200 hover:border-teal-600 transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Senior Software Developer</h3>
                  <p className="text-lg text-teal-600 font-semibold">Mindfire Solutions Digital LLP</p>
                </div>
                <div className="text-gray-500 font-medium mt-2 md:mt-0">Oct 2023 – Present</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Designed and owned scalable backend microservices using Java and .NET Core, serving high-traffic production environments</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Led performance optimization initiatives, improving API response times and system reliability across multiple services</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Implemented clean architecture patterns and enforced best engineering practices through comprehensive code reviews</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Mentored junior developers through technical discussions, design reviews, and knowledge-sharing sessions</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Collaborated with product and QA teams to deliver business-critical features on schedule</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Java</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">.NET Core</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Microservices</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">REST APIs</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">System Design</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Performance Optimization</Badge>
              </div>
            </Card>

            {/* Experience 2 */}
            <Card className="p-8 border-gray-200 hover:border-teal-600 transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Software Developer</h3>
                  <p className="text-lg text-teal-600 font-semibold">Dish TV India Limited</p>
                </div>
                <div className="text-gray-500 font-medium mt-2 md:mt-0">Sep 2021 – Sep 2023</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Developed and maintained backend services using Java and C# for high-scale consumer platforms</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Built RESTful APIs and integrated third-party systems with internal services to extend platform capabilities</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Improved application performance through strategic code refactoring and database query optimization</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Participated in Agile ceremonies including sprint planning, daily standups, and peer code reviews</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Ensured system stability and reliability in production environments through proactive monitoring</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Java</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">C#</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">REST APIs</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Third-party Integration</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Agile</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Code Reviews</Badge>
              </div>
            </Card>

            {/* Experience 3 */}
            <Card className="p-8 border-gray-200 hover:border-teal-600 transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Virtual Internship - Software Development Engineer</h3>
                  <p className="text-lg text-teal-600 font-semibold">JPMorgan Chase & Co.</p>
                </div>
                <div className="text-gray-500 font-medium mt-2 md:mt-0">May 2020</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Completed real-world engineering projects simulating production environments and industry workflows</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Applied front-end technologies to solve real-time software problems in financial services domain</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Gained exposure to industry-standard development practices, tools, and enterprise-level codebases</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">JavaScript</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Frontend Development</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">Problem Solving</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <Card className="p-6 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-600" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Java</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">C#</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">JavaScript</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">TypeScript</Badge>
              </div>
            </Card>

            {/* Backend */}
            <Card className="p-6 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-600" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">.NET Core</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Microservices</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">REST APIs</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Entity Framework</Badge>
              </div>
            </Card>

            {/* Frontend */}
            <Card className="p-6 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-600" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">React.js</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">HTML/CSS</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Responsive Design</Badge>
              </div>
            </Card>

            {/* Databases */}
            <Card className="p-6 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-600" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">MS SQL Server</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Database Design</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Query Optimization</Badge>
              </div>
            </Card>

            {/* Cloud & DevOps */}
            <Card className="p-6 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-600" />
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">AWS</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Azure</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">CI/CD Pipelines</Badge>
              </div>
            </Card>

            {/* Core CS */}
            <Card className="p-6 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-600" />
                Core Computer Science
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Data Structures</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">Algorithms</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">OOP</Badge>
                <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100">System Design</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Certifications & Training</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-gray-200 hover:border-teal-600 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-lg">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Microsoft AI-900 Certified</h3>
                  <p className="text-sm text-gray-600">Azure AI Fundamentals</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 hover:border-teal-600 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-lg">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & ML Workshop</h3>
                  <p className="text-sm text-gray-600">Delhi Technical University & Microsoft WAC</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 hover:border-teal-600 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-lg">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cyber Security Workshop</h3>
                  <p className="text-sm text-gray-600">UP Police & Cyber Security Cell India</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-12">
              I'm currently open to SDE-2 opportunities at product-based companies. Feel free to reach out for collaborations, opportunities, or just a tech conversation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:arpit.agarwal67@gmail.com"
                className="flex items-center justify-center gap-3 p-6 border-2 border-gray-200 rounded-lg hover:border-teal-600 hover:bg-teal-50 transition-all duration-200"
              >
                <Mail className="w-6 h-6 text-teal-600" />
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <div className="text-gray-900 font-semibold">arpit.agarwal67@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/arpitagarwal30"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-6 border-2 border-gray-200 rounded-lg hover:border-teal-600 hover:bg-teal-50 transition-all duration-200"
              >
                <Linkedin className="w-6 h-6 text-teal-600" />
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium">LinkedIn</div>
                  <div className="text-gray-900 font-semibold">linkedin.com/in/arpitagarwal30</div>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-teal-600" />
              <span>Based in Bareilly, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
