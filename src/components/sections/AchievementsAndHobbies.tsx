import { achievements } from "@/data/achievements";
import { hobbies } from "@/data/hobbies";
import { AchievementEntry } from "@/components/ui/AchievementEntry";

export function AchievementsAndHobbies() {
  const otherAchievements = achievements.filter((a) => a.category === "achievement");

  return (
    <section id="achievements" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <h2 className="font-heading text-3xl text-ink">Achievements</h2>
      <div className="mt-10 space-y-6">
        {otherAchievements.map((item) => <AchievementEntry key={item.id} item={item} />)}
      </div>
      <div className="mt-16 border-t border-hairline pt-8">
        <h3 className="font-heading text-xl text-ink">Outside of work</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
          {hobbies.map((hobby) => (
            <span key={hobby.name} className="font-body text-sm text-ink border border-hairline rounded-md px-3 py-1.5">
              {hobby.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}