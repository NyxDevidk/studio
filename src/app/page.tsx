import { PersonalInfoSection } from '@/components/portfolio/personal-info';
import { ProjectsShowcase } from '@/components/portfolio/projects-showcase';
import { ContactSection } from '@/components/portfolio/contact-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in">
      <PersonalInfoSection />
      <Separator className="my-12 md:my-16" />
      <ProjectsShowcase />
      <Separator className="my-12 md:my-16" />
      <ContactSection />
    </div>
  );
}
