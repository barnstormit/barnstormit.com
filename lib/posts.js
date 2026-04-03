import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      image: data.image || null,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    image: data.image || null,
    content,
  };
}
