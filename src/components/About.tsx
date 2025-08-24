import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
          <p>
            I&apos;m a software developer with a strong focus on <span className="font-medium text-foreground">TypeScript, JavaScript, Next.js, React, and Node.js</span>. I&apos;m also deeply experienced in database querying, with expertise in <span className="font-medium text-foreground">MongoDB and Supabase</span>.
          </p>

          <p>
            While I currently work as a truck driver, my true passion lies in creating digital solutions — crafting websites and applications that help people solve problems, save time, and even have fun in the process.
          </p>

          <p>
            Recently, I&apos;ve been leveraging <span className="font-medium text-foreground">AI tools to build faster and smarter</span>, accelerating the way I prototype, debug, and deliver projects. This has opened new possibilities in how I approach problem-solving and has sharpened my ability to create innovative solutions quickly.
          </p>

          <p>
            <span className="font-medium text-foreground">Curiosity is at the heart of who I am.</span> I love to learn continuously, experiment with new technologies, and push myself to grow as both a developer and a person.
          </p>

          <p>
            Outside of coding, I&apos;ve spent over a decade on the mats and earned the rank of <span className="font-medium text-foreground">black belt in Brazilian Jiu-Jitsu</span> — a journey that taught me discipline, resilience, and the art of solving problems one step at a time.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'TypeScript',
            'JavaScript', 
            'Next.js',
            'React',
            'Node.js',
            'MongoDB',
            'Supabase',
            'AI Tools'
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center px-4 py-3 bg-foreground/5 text-foreground/80 rounded-lg border border-foreground/10 hover:bg-foreground/10 transition-colors duration-200"
            >
              <span className="font-mono text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;