import { SiteLayout } from '@/components/layout/site-layout';
import { VideosContent } from '@/components/sections/videos-content';

export default function VideosPage() {
  return (
    <SiteLayout>
      <div className="container py-16">
        <VideosContent />
      </div>
    </SiteLayout>
  );
}
