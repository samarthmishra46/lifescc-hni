import { CTAForm } from './CTAForm';

export function FounderSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-neutral-bg rounded-card overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqyizevct/image/upload/c_crop,w_1358,h_1450,x_42,y_161/v1767811201/6203693d-e016-4fb5-a493-aff42702471b_ulwoks.jpg"
                  alt="Dr. Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <div className="text-3xl font-serif text-neutral-border mb-4">~Signature~</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-text mb-2">
                Dr. [Name]
              </h3>
              <p className="text-lg text-neutral-text-secondary mb-2">
                Founder & Chief Medical Officer
              </p>
              <p className="text-base text-neutral-text-secondary mb-6">
                MBBS, MD | 15+ years clinical transformation of C-suite executives<br />
                LIFESCC Medical Director
              </p>
              <blockquote className="text-xl md:text-2xl text-neutral-text italic border-l-4 border-primary-500 pl-6">
                "After 40, optimal health demands medical precision — not motivational intensity."
              </blockquote>
            </div>
          </div>

          <div className="mt-16">
            <CTAForm sourceSection="founder" buttonText="SECURE YOUR FREE EVALUATION" />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Executive Performance Diagnostics',
    description: 'Medical-grade analysis identifying root causes others miss.',
  },
  {
    title: 'Strategic Strength Restoration',
    description: 'Clinical protocols rebuild capacity without joint compromise.',
  },
  {
    title: 'Precision Nutrition Architecture',
    description: 'Fueling designed for executive calendars — no rigidity, no obsession.',
  },
  {
    title: 'Medical Performance Monitoring',
    description: 'Continuous physician oversight ensures linear progress.',
  },
];

export function HowLifesccHelps() {
  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-6">
              CLINICAL PILLARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="card">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-full font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-text-secondary text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAForm sourceSection="clinical-pillars" buttonText="SECURE YOUR FREE EVALUATION" />
          </div>
        </div>
      </div>
    </section>
  );
}
