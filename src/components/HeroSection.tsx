import { CTAForm } from './CTAForm';

export function HeroSection() {
  return (
    <section className="bg-gradient-hero pt-20 md:pt-32 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff18a] via-transparent to-[#fff18a] opacity-40" />
      
      <div className="section-container relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-text mb-6 leading-tight">
            INDIA'S LEADING ONE-ON-ONE HNI FITNESS TRANSFORMATION PROGRAM
          </h1>
          <p className="text-lg md:text-xl text-neutral-text-secondary mb-8 leading-relaxed max-w-4xl mx-auto">
            This is not a gym membership or random tutorials program.
            This is a doctor-guided, fully online Fitness Transformation program tailored to your timeline —
            which has transformed 560+ CXOs like you.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8 text-neutral-text-secondary text-base md:text-lg">
            <span>Energy restored</span>
            <span className="text-primary-500">||</span>
            <span>Strength +14%</span>
            <span className="text-primary-500">||</span>
            <span>Medical precision</span>
          </div>

          <p className="text-base md:text-lg text-neutral-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto">
            This is the program chosen by the founders you respect.
            The CXOs who built BSE giants.
            The family offices shaping India's future.
          </p>

          <div className="mb-6 max-w-md mx-auto">
            <CTAForm sourceSection="hero" buttonText="SECURE YOUR FREE EVALUATION" />
          </div>

          <p className="text-sm text-neutral-text-secondary">
            One confidential consultation · Comprehensive analysis · No obligation
          </p>
        </div>
      </div>
    </section>
  );
}
