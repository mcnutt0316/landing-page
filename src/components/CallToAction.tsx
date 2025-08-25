import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-foreground leading-tight">
            🚀 Let&apos;s build something meaningful together.
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s connect and create something amazing.
          </p>

          <div className="pt-4">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 transform hover:scale-105">
              Get In Touch
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-foreground/10">
            <div className="flex items-center gap-2 text-foreground/60">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-mono">Available for new projects</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/60">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-mono">Fast response time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;