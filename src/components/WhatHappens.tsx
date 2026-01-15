import { CTAForm } from './CTAForm';

const phases = [
  {
    number: '1',
    title: 'Precision Medical Evaluation',
    subtitle: 'Week 1',
    description: 'Private one-on-one physician consultation analyzing metabolic efficiency, muscle quality, stress-recovery imbalances, and lifestyle-performance disconnects.',
    note: 'Clear medical explanations. No fitness assumptions.',
  },
  {
    number: '2',
    title: 'Custom Executive Protocol',
    subtitle: 'Weeks 1-4',
    description: 'Built for 50-70 hour work weeks, domestic & international travel, family & social commitments. Zero tolerance for disruption.',
    note: '',
  },
  {
    number: '3',
    title: 'Continuous Medical Oversight',
    subtitle: 'Ongoing',
    description: 'Weekly physician review. Real-time protocol optimization. Plateau prevention.',
    note: '',
  },
];

export function WhatHappens() {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-6">
              YOUR EXECUTIVE TRANSFORMATION PROCESS
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {phases.map((phase) => (
              <div key={phase.number} className="card bg-gradient-soft\">             <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full font-bold text-xl">
                      {phase.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-2xl font-semibold text-neutral-text mb-1">
                        Phase {phase.number}: {phase.title}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium">({phase.subtitle})</p>
                    </div>
                    <p className="text-neutral-text-secondary leading-relaxed mb-2">
                      {phase.description}
                    </p>
                    {phase.note && (
                      <p className="text-neutral-text italic mt-3">
                        "{phase.note}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CTAForm sourceSection="transformation-process" buttonText="SECURE YOUR FREE EVALUATION" />
        </div>
      </div>
    </section>
  );
}
