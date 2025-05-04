import { PersonalInfoSection } from '@/components/portfolio/personal-info';
import { SkillsSection } from '@/components/portfolio/skills-section'; // Import the SkillsSection
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 animate-fade-in"> {/* Increased spacing further */}
      <PersonalInfoSection />
      <Separator className="my-20 md:my-24 opacity-50" /> {/* Adjusted separator margin and opacity */}
      <SkillsSection />
      {/* ContactSection and its Separator removed */}
    </div>
  );
}
