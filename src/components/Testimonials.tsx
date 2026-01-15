import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CTAForm } from './CTAForm';

const testimonials = [
  {
    name: 'Neha Malhotra',
    age: 46,
    title: 'Partner, VC Fund',
    city: 'New Delhi',
    testimonial: 'Energy through board meetings and family life. My children call me their "Super Mom."',
  },
  {
    name: 'Rohan Mehta',
    age: 52,
    title: 'Founder, SaaS Company',
    city: 'Mumbai',
    testimonial: 'Medical precision replaced guesswork. My board believes I\'m a decade younger.',
  },
  {
    name: 'Dr. Amit Kapoor',
    age: 58,
    title: 'MD, Listed Company',
    city: 'Gurugram',
    testimonial: 'Capability preservation, not weight loss. Closed an acquisition sharper than my team.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-4">
              EXECUTIVE CASE STUDIES
            </h2>
          </div>

          <div className="relative">
            <div className="card bg-gradient-soft shadow-soft-lg">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-neutral-text mb-1">
                    {currentTestimonial.name}, {currentTestimonial.age}
                  </h3>
                  <p className="text-lg text-neutral-text-secondary mb-1">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-base text-neutral-text-secondary">{currentTestimonial.city}</p>
                </div>

                <p className="text-lg md:text-xl text-neutral-text leading-relaxed italic">
                  "{currentTestimonial.testimonial}"
                </p>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-soft hover:bg-neutral-light transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-text-secondary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-soft hover:bg-neutral-light transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-neutral-text-secondary" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary-500' : 'bg-neutral-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAForm sourceSection="testimonials" buttonText="SECURE YOUR FREE EVALUATION" />
          </div>
        </div>
      </div>
    </section>
  );
}
