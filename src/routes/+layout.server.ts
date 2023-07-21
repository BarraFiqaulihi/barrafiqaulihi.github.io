export const prerender = true;

import type { LayoutServerLoad } from './$types';
import { getPosts } from '$lib/server/posts';

export const load = (async () => {
    return {
        posts: getPosts(),
    };
}) satisfies LayoutServerLoad;