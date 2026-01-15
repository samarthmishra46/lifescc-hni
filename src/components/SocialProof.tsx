export function SocialProof() {
  return (
    <section className="bg-neutral-light py-12 overflow-hidden">
      <div className="section-container">
        <div className="mb-8">
          <div className="flex items-center justify-center overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-neutral-text-secondary text-lg md:text-xl mx-8">
                560+ CXOs, founders, and senior executives across India transformed by LIFESCC.
              </span>
              <span className="text-neutral-text-secondary text-lg md:text-xl mx-8">
                560+ CXOs, founders, and senior executives across India transformed by LIFESCC.
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card bg-gradient-soft">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces" 
                  alt="Raghav S."
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary-200"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-neutral-text-secondary mb-2">
                  "As a Mumbai-based CEO managing 14-hour days and international travel, I needed more than motivation. LIFESCC's medical system delivered measurable strength gains and energy stability within 6 weeks. I perform at levels I hadn't sustained in a decade."
                </p>
                <p className="text-sm text-neutral-text-secondary font-medium">— Raghav S., Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
