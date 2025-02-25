import matter from 'gray-matter';
import { format } from 'date-fns';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';

import RehypeAutolinkHeadings from 'rehype-autolink-headings';
import RemarkCodeTitles from 'remark-code-titles';
import RemarkEmoji from 'remark-emoji';
import RemarkPrism from 'remark-prism';
import RemarkSlug from 'remark-slug';

import type { FrontMatter, Post, RawFrontMatter } from '~/types';

const TRIPS_POSTS_DIR = join(process.cwd(), 'src', 'data', 'trips');

/**
 * Get the slugs of all available trips posts
 */
export async function getAllPostSlugs(): Promise<Array<string>> {
	return readdirSync(TRIPS_POSTS_DIR);
}

/**
 * Get the frontmatter metadata for all available trips posts
 */
export async function getAllPostsFrontMatter(): Promise<Array<FrontMatter>> {
	const files = readdirSync(TRIPS_POSTS_DIR);

	return files
		.map((slug) => {
			const source = readFileSync(join(TRIPS_POSTS_DIR, slug), 'utf8');
			const { data } = matter(source);

			const frontmatter = data as RawFrontMatter;
			const trimmedSlug = slug.replace('.md', '');

			return {
				...frontmatter,
				slug: trimmedSlug,
			} as FrontMatter;
		})
		.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
		.map((f) => ({
			...f,
			date: format(new Date(f.date), 'MMMM yyyy'),
		}));
}

/**
 * Get the frontmatter metadata & post MDX contents from file
 *
 * @param {string} slug - Slug / file name of the blog post to load data from
 */
export async function getPost(slug: string): Promise<Post> {
	const raw = readFileSync(join(TRIPS_POSTS_DIR, `${slug}.md`)).toString();
	const { content, data } = matter(raw);
	const source = await serialize(content, {
		scope: data,
		mdxOptions: {
			rehypePlugins: [[RehypeAutolinkHeadings, {}]],
			remarkPlugins: [RemarkCodeTitles, RemarkEmoji, RemarkPrism, RemarkSlug],
		},
	});

	const frontmatter = data as RawFrontMatter;
	const trimmedSlug = slug.replace('.md', '');

	return {
		frontmatter: {
			...frontmatter,
			date: format(new Date(frontmatter.date), 'MMMM yyyy'),
			slug: trimmedSlug,
		},
		source,
	};
}
