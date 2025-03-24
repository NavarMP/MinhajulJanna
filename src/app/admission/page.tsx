import { SiteLayout } from '@/components/layout/site-layout';
import { AdmissionContent } from '@/components/sections/admission-content';

export default function AdmissionPage() {
  return (
    <SiteLayout>
      <div className="container py-16 space-y-12">
        <AdmissionContent />
      </div>
    </SiteLayout>
  );
}
