import { CTAForm } from './CTAForm';
import { useState, useEffect } from 'react';

export function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-6">
                EXCLUSIVE COHORT ACCESS
              </h2>
              
              <div className="card bg-gradient-soft mb-8">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-text mb-4">
                    Q1 2026 Executive Cohort
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
                    8 evaluations remaining
                  </p>
                  <div className="flex justify-center gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neutral-text">{timeLeft.days}</div>
                      <div className="text-sm text-neutral-text-secondary">Days</div>
                    </div>
                    <div className="text-3xl font-bold text-neutral-text">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neutral-text">{timeLeft.hours}</div>
                      <div className="text-sm text-neutral-text-secondary">Hours</div>
                    </div>
                    <div className="text-3xl font-bold text-neutral-text">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neutral-text">{timeLeft.minutes}</div>
                      <div className="text-sm text-neutral-text-secondary">Minutes</div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-text-secondary">
                    Closes Friday, January 17th
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg text-neutral-text-secondary mb-4">
                  Current cohort includes:
                </p>
                <ul className="text-base text-neutral-text-secondary space-y-2 max-w-2xl mx-auto">
                  <li>• Founders of BSE/NSE listed companies</li>
                  <li>• CXOs managing ₹5000cr+ P&L</li>
                  <li>• Family office principals</li>
                  <li>• Medical professionals</li>
                  <li>• Celebrities (names confidential)</li>
                </ul>
              </div>

              <p className="text-xl text-neutral-text font-medium mb-8">
                This level of medical access is typically reserved for India's top 0.1%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff18a] py-16 md:py-24">
        <div className="section-container pb-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Millionaires Age Like This.
            </h2>

            <div className="text-lg md:text-xl mb-12 space-y-4 leading-relaxed text-black" style={{ fontFamily: 'Georgia, serif' }}>
              <p>• Your daughter watching you lead the family hike</p>
              <p>• Your son asking how you're sharper than his friends' fathers</p>
              <p>• Your board whispering, "He closed Q4 at 52 like he's 42"</p>
            </div>

            <div className="mb-8">
              <p className="text-xl font-bold text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Q1 2026 Cohort: 8 spots remain
              </p>
              <p className="text-lg text-black" style={{ fontFamily: 'Georgia, serif' }}>
                Closes Friday, Jan 17th
              </p>
            </div>

            <div className="mb-8">
              <p className="text-base text-black leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                127 executives joined in 2025 alone.<br />
                The founders you respect.<br />
                The CXOs building BSE giants.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-6">
              <CTAForm
                sourceSection="final-cta"
                buttonText="SECURE YOUR FREE EVALUATION"
                variant="primary"
              />
            </div>

            <p className="text-sm text-black" style={{ fontFamily: 'Georgia, serif' }}>
              27-minute physician consult.<br />
              Starts Monday.
            </p>
          </div>
        </div>
        <div className="border-t border-black"></div>
      </section>
    </>
  );
}
