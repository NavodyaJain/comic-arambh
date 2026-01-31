// components/About.js
export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE CONTAINER */}
          <div className="relative transform hover:-rotate-2 transition-transform duration-500">
            <div className="comic-border bg-primary/10">
              <div className="comic-border bg-black overflow-hidden relative">
                
                {/* Aspect Ratio Wrapper (900x600 = 3:2) */}
                <div className="w-full aspect-[3/2] relative">
                  <img
                    src="/comic-2.png"
                    alt="Comic illustration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* POW Badge */}
                
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <h2 className="font-display text-5xl font-bold text-primary">
              The Origin Story
            </h2>

            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                From awkward open mics to roaring auditoriums, my journey in
                comedy began with a single punchline that landed… eventually.
              </p>
              <p>
                Combining sharp observational humor with heartfelt poetry, I
                create performances that make you laugh, think, and feel all at
                once.
              </p>
              <p>
                Whether it’s college festivals, corporate events, or intimate
                poetry readings, every show is a unique blend of wit and
                wordplay.
              </p>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { label: "Stand-up Comedian", color: "bg-primary" },
                { label: "Poet & Shayar", color: "bg-secondary" },
                { label: "Event Host", color: "bg-accent" },
                { label: "50+ Shows", color: "bg-primary" },
              ].map((badge, index) => (
                <span
                  key={index}
                  className={`${badge.color} text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* SIGNATURE */}
            <div className="pt-6">
              <div className="w-48 h-1 bg-gradient-to-r from-primary to-accent mb-2"></div>
              <div className="font-display text-2xl text-primary">
                Arambh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
