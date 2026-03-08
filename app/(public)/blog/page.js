// app/(public)/blog/page.js
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { getSortedPostsData } from "@/lib/blog";
import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";

export const metadata = {
  title: "Blog | Mins Hospital",
  description:
    "Read health tips, wellness guidance, and hospital updates from Mins Hospital.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <>
      <SiteHeader />
      <BlogHero />
      <BlogGrid posts={posts} />
      <SiteFooter />
    </>
  );
}
