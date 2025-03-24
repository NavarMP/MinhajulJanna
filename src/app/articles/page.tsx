import { SiteLayout } from '@/components/layout/site-layout';
import { ArticlesContent } from '@/components/sections/articles-content';

export default function ArticlesPage() {
  return (
    <SiteLayout>
      <div className="container py-16">
        <ArticlesContent />
      </div>
    </SiteLayout>
  );
}
