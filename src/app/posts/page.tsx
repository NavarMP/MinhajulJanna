import { SiteLayout } from '@/components/layout/site-layout';
import { PostsContent } from '@/components/sections/posts-content';

export default function PostsPage() {
  return (
    <SiteLayout>
      <div className="container py-16">
        <PostsContent />
      </div>
    </SiteLayout>
  );
}
