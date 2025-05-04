import { PersonalInfoSection } from '@/components/portfolio/personal-info';
import { SkillsSection } from '@/components/portfolio/skills-section'; // Import the SkillsSection
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-28 animate-fade-in"> {/* Increased spacing */}
      <PersonalInfoSection />
      <Separator className="my-16 md:my-20" /> {/* Adjusted separator margin */}
      <SkillsSection /> {/* Keep the SkillsSection */}
      {/* ContactSection and its Separator removed */}
    </div>
  );
}
