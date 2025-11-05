import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Development Manager",
    company: "Softerware",
    location: "Remote",
    period: "Oct 2022 – Present",
    achievements: [
      "Lead a team of 6 (2 seniors, 2 juniors, 2 UX designers) delivering high-quality web and mobile apps.",
      "Directed React Native re-platforming, generating $1M revenue within 3 months.",
      "Established a unified design system adopted across 3 core products.",
      "Improved test coverage by 22% and cut manual QA time by 25% through Cypress adoption.",
      "Implemented CI/CD pipelines reducing deployment time and boosting release velocity.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Nuvalence",
    location: "Remote",
    period: "Jun 2021 – Oct 2022",
    achievements: [
      "Directed design system development for FordPro, improving modularity, maintainability, and performance.",
      "Drove product improvements using analytics and user feedback to align development with client goals.",
      "Enhanced UX through design-driven improvements, resulting in measurable gains in satisfaction.",
      "Collaborated with product and design teams to streamline cross-framework design system onboarding for 15 developers.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Members 1st Federal Credit Union",
    location: "Mechanicsburg, PA",
    period: "Jun 2019 – Apr 2021",
    achievements: [
      "Directed Angular modernization project completed in 9 months, boosting dev efficiency.",
      "Cut a 3-hour daily rate-scheduling process down to 3 clicks via UI automation.",
      "Reduced loan system load time from 6 minutes to near-instant, improving team productivity.",
      "Partnered with business teams to align tech delivery with product goals.",
    ],
  },
  {
    title: "Application Developer",
    company: "Howard Hanna Real Estate Services",
    location: "Pittsburgh, PA",
    period: "Dec 2018 – Jun 2019",
    achievements: [
      "Developed cross-platform solutions using Angular, .NET, C#, ColdFusion, and Visual Basic.",
      "Engineered a secure streaming app for video uploads/downloads, increasing user engagement.",
      "Built marketing API integrations and custom GUIs to streamline content creation workflows.",
      "Modernized legacy systems and designed intuitive user interfaces to improve adoption and satisfaction.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-16 bg-secondary flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h2 className="font-display text-5xl font-bold">EXPERIENCE</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 border-2 hover:border-secondary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-secondary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-primary/5 border border-primary/20 self-start">
                  <span className="text-sm font-medium whitespace-nowrap">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-secondary mt-1 flex-shrink-0">▪</span>
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
