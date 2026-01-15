import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CTAForm } from './CTAForm';

const faqs = [
  {
    question: 'Is this genuinely online, or will I need clinic visits?',
    answer: 'Completely online. Your evaluation, physician consultations, protocol delivery, and progress monitoring all happen digitally. No clinic visits required.',
  },
  {
    question: 'Will this work with my travel schedule?',
    answer: 'Yes. Your protocol adapts to your calendar. Whether you\'re in Mumbai, Singapore, or London, the system continues uninterrupted.',
  },
  {
    question: 'I have hired elite trainers before. What makes this different?',
    answer: 'This is medical transformation, not training. You\'re guided by physicians analyzing metabolic function, hormonal efficiency, and structural capacity — variables trainers cannot assess or correct.',
  },
  {
    question: 'How quickly will I see measurable results?',
    answer: 'Most executives report energy stabilization within 2-3 weeks. Strength metrics improve 8-14% by week 6. Body composition shifts become visible around week 8.',
  },
  {
    question: 'What time commitment does this require?',
    answer: 'Your training protocols are designed for 45-60 minutes, 4x/week. Scheduling is flexible. You control when and where.',
  },
  {
    question: 'Is this age-appropriate for executives over 50?',
    answer: 'Absolutely. After 40, transformation requires clinical precision — not harder effort. This system is specifically designed for physiology beyond peak athletic years.',
  },
  {
    question: 'Will I need special equipment?',
    answer: 'Minimal. Your protocol is built around what\'s available to you — hotel gyms, home setups, or club facilities. No specialized machinery required.',
  },
  {
    question: 'What if I plateau or progress stalls?',
    answer: 'Your physician monitors weekly. Protocols are adjusted in real-time to prevent adaptation and maintain linear progress.',
  },
  {
    question: 'How confidential is this process?',
    answer: 'Completely private. One-on-one physician interaction. No group sessions. Your participation remains confidential.',
  },
  {
    question: 'What happens after the free evaluation?',
    answer: 'You receive a clear medical analysis of what\'s limiting your performance and a proposed protocol timeline. You decide whether to proceed. No obligation.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-light transition-colors"
                >
                  <span className="text-lg font-semibold text-neutral-text pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-neutral-text-secondary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <CTAForm sourceSection="faq" buttonText="SECURE YOUR FREE EVALUATION" />
        </div>
      </div>
    </section>
  );
}
