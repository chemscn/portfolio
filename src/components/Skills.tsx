import { Code2 } from "lucide-react";

const skills = [
  "Angular",
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Storybook",
  "Design Systems",
  "Microfrontends",
  "CI/CD",
  "Cypress",
  "Test Automation",
  "Agile",
  "Leadership",
  "Mentorship",
  "Performance Optimization",
  "Cross-Platform Development",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-16 bg-accent flex items-center justify-center">
            <Code2 className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="font-display text-5xl font-bold">SKILLS & TECHNOLOGIES</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 border-2 border-border hover:border-secondary bg-card transition-all duration-300 cursor-default animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-center font-semibold group-hover:text-secondary transition-colors">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
