import { achievements } from "@/data/achievements";
import { AchievementEntry } from "@/components/ui/AchievementEntry";

export function Hackathons() {
  const hackathons = achievements.filter((a) => a.category === "hackathon");
  if (hackathons.length === 0) return null;

  return (
    <section id="hackathons" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <h2 className="font-heading text-3xl text-ink">Hackathons</h2>
      <div className="mt-10 space-y-6">
        {hackathons.map((item) => <AchievementEntry key={item.id} item={item} />)}
      </div>
    </section>
  );
}