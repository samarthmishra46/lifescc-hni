export function PainPoints() {
  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-8">
              THE EXECUTIVE REALITY AFTER 40
            </h2>
          </div>

          <div className="space-y-4 text-lg md:text-xl text-neutral-text-secondary leading-relaxed mb-8">
            <p>You maintain exceptional professional discipline.</p>
            <p>You lead through complexity.</p>
            <p>You deliver results under pressure.</p>
            <p className="pt-4 font-medium text-neutral-text">Yet your physiology has shifted:</p>
          </div>

          <div className="space-y-4 mb-10">
            {[
              "Energy sustains 8 hours, crashes by 4 PM",
              "Workouts produce fatigue, not transformation",
              "Midsection fat resists even perfect nutrition",
              "Recovery demands days, not hours"
            ].map((point, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-3"></div>
                <p className="text-lg md:text-xl text-neutral-text-secondary leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-lg md:text-xl text-neutral-text-secondary leading-relaxed">
            <p>You've invested in elite trainers, supplements, metabolic testing.</p>
            <p>The effort is real.</p>
            <p>The returns aren't.</p>
            <p className="pt-6 text-xl font-medium text-neutral-text">
              The challenge isn't your discipline.
              It's outdated strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LetterSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl text-neutral-text-secondary leading-relaxed">
            <p>Most executives who come to LIFESCC have already tried everything they were advised.</p>
            <p>They followed training programs.</p>
            <p>They hired personal trainers.</p>
            <p>They tracked macros and optimized sleep.</p>

            <p className="pt-4">Yet energy declined and transformation stalled.</p>

            <p className="pt-4">This doesn't mean you didn't try hard enough.</p>
            <p>It means the approach wasn't medically designed for your physiology.</p>

            <p className="pt-4">Executive performance after 40 is rarely a motivation issue.</p>
            <p>It involves hormones, metabolic efficiency, muscle quality, stress recovery, and structural capacity together.</p>

            <p className="pt-4 font-semibold text-neutral-text">That's why generic programs stop working.</p>

            <p className="pt-4">You deserve a solution that understands your body —</p>
            <p>not one that keeps asking you to push harder.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AuthorityClose() {
  return (
    <section className="bg-gradient-to-br from-[#fff293] via-transparent to-[#fff7b9] text-neutral-text py-16 md:py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            That's why we built the LIFESCC Elite Online Transformation System
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            Clinical architecture for executives who demand capacity, not appearance.
          </p>
        </div>
      </div>
    </section>
  );
}
