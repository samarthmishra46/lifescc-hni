import { CTAForm } from './CTAForm';

export function SubPrograms() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-6">
              CLINICAL FOUNDATION
            </h2>
            <p className="text-2xl md:text-3xl text-neutral-text mb-4">
              LIFESCC Elite Online Program
            </p>
            <p className="text-xl text-neutral-text-secondary">
              Delivered digitally. Governed clinically.
            </p>
          </div>

          <div className="card bg-gradient-soft mb-8">
            <div className="text-center space-y-6">
              <p className="text-lg text-neutral-text-secondary leading-relaxed">
                15+ years serving India's most discerning professionals.<br />
                Same medical teams. Digital delivery.
              </p>
            </div>
          </div>

          <CTAForm sourceSection="clinical-foundation" buttonText="SECURE YOUR FREE EVALUATION" />
        </div>
      </div>
    </section>
  );
}
