import type { Post } from '$lib/types';

export function getPosts(): Post[] {
    const posts = [];

    const paths = import.meta.glob('/src/posts/*.svx', {eager: true});

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.split('.').at(-2);

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug };
            post.published && posts.push(post);
        }

        posts.sort((first, second) => 
            new Date(second.date).getTime() - new Date(first.date).getTime()
        );
    }

    return posts;
}