<script lang="ts">
    import { formatDate } from '$lib/utils';

    export let data;
</script>

<main class="container mx-auto">
    <h1 class="my-6 text-center text-4xl font-bold">My Blog</h1>

    <section id="postlist" class="my-6">
        <ul class="flex justify-center flex-wrap">
            {#each data.posts as post, i (post.slug)}
                <li class="m-2 w-full max-w-xs shadow-lg">
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure>
                            <img src="{post.cover}" alt="Random" width="100%" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <div class="card-actions justify-end">
                                <a href="#" class="underline mr-2">Read more ></a>
                            </div>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </section>
</main>
