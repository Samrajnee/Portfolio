import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { languages } from "@/data/languages";
import { levelToFill } from "@/lib/cefr";

const currentEducation = education[0]; // most recent entry — MAKAUT
const cefrOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <div className="border-t border-hairline pt-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <h2 className="font-heading text-3xl text-ink">About</h2>
          <div className="mt-6 space-y-5 font-body text-base text-ink leading-relaxed max-w-[62ch]">
            <p>
              I&apos;m a final-year Computer Science Engineering student at
              MAKAUT, Kolkata, with hands-on experience across full-stack
              development, platform building, and business operations at
              early-stage startups.
            </p>
            <p>
              I&apos;ve contributed to live products: frontend development on
              masaforum.com (MERN stack), building MSME Times&apos; digital
              presence from scratch, and currently developing CampusChain, a
              full-stack campus governance platform.
            </p>
            <p>
              Beyond engineering, I&apos;ve worked across functions:
              structured an HR pipeline that hired 7 people in 3 months,
              negotiated an international MoU with partner organisations
              across three countries, and managed partnerships as
              Co-Founder of Swastikk AI Tech.
            </p>
            <p>
              I write clean code, communicate clearly, and move fast.
              Currently exploring SDE, product, and consulting roles at
              product-first companies.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 md:border-l md:border-hairline md:pl-10">
          <dl className="font-body text-sm space-y-6">
            <div>
              <dt className="text-muted">Based in</dt>
              <dd className="text-ink mt-1">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-muted">Currently</dt>
              <dd className="text-ink mt-1">{currentEducation.degree}</dd>
              <dd className="text-muted mt-1">{currentEducation.detail}</dd>
            </div>
            <div>
              <dt className="text-muted">Languages</dt>
              <dd className="mt-3 space-y-4">
                {languages.map((lang) => {
                  const fill = levelToFill(lang.level);
                  return (
                    <div key={lang.name}>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-ink">{lang.name}</span>
                        <span className="text-muted text-xs whitespace-nowrap">
                          {lang.level}
                        </span>
                      </div>
                      <div className="flex gap-2.5 mt-2">
                        {cefrOrder.map((code, i) => (
                          <span
                            key={code}
                            className={
                              i === fill - 1
                                ? "text-accent text-xs"
                                : "text-hairline text-[10px]"
                            }
                          >
                            {code}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}