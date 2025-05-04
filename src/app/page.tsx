import { PersonalInfoSection } from '@/components/portfolio/personal-info';
import { SkillsSection } from '@/components/portfolio/skills-section'; // Import the SkillsSection
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in">
      <PersonalInfoSection />
      <Separator className="my-12 md:my-16" />
      <SkillsSection /> {/* Keep the SkillsSection */}
      {/* ContactSection and its Separator removed */}
    </div>
  );
}
