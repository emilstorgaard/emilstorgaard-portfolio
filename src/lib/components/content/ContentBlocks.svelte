<script lang="ts">
    import { tr } from '$lib/i18n';
    import type { ContentBlock } from '$lib/content/types';
    import { reveal } from '$lib/utils/animations';

    let { blocks }: { blocks: ContentBlock[] } = $props();
</script>

<div class="space-y-12 md:space-y-16">
    {#each blocks as block, i (block.id)}
        <div use:reveal={{ delay: Math.min(i * 50, 200) }}>
            {#if block.type === 'text'}
                <div class="space-y-4 max-w-3xl">
                    {#if block.heading}
                        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
                            {tr(block.heading)}
                        </h2>
                    {/if}
                    <div
                        class="prose prose-invert max-w-none text-[var(--color-fg-muted)] leading-relaxed
                               [&_p]:mb-4 [&_p]:text-base [&_p]:md:text-lg
                               [&_strong]:text-[var(--color-fg)] [&_strong]:font-medium
                               [&_a]:text-[var(--color-accent)] [&_a:hover]:underline"
                    >
                        {@html tr(block.body)}
                    </div>
                </div>

            {:else if block.type === 'image'}
                <figure class="space-y-3">
                    <div
                        class="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
                    >
                        <!-- Baggrund -->
                        <div
                            class="absolute inset-0 opacity-30"
                            style="background-image: radial-gradient(circle at 50% 50%, var(--color-border-strong) 1px, transparent 1px); background-size: 24px 24px;"
                        ></div>
                        <img
                            src={block.image.url}
                            alt={tr(block.image.alt)}
                            loading="lazy"
                            class="relative h-full w-full object-contain"
                        />
                    </div>
                    {#if block.caption}
                        <figcaption class="text-sm text-[var(--color-fg-subtle)] text-center font-mono">
                            {tr(block.caption)}
                        </figcaption>
                    {/if}
                </figure>

            {:else if block.type === 'quote'}
                <blockquote
                    class="relative max-w-3xl pl-6 md:pl-8 border-l-2 border-[var(--color-accent)]"
                >
                    <p class="text-xl md:text-2xl font-light text-[var(--color-fg)] leading-relaxed italic">
                        "{tr(block.quote)}"
                    </p>
                    {#if block.author}
                        <footer class="mt-3 font-mono text-sm text-[var(--color-fg-subtle)]">
                            — {block.author}
                        </footer>
                    {/if}
                </blockquote>

            {:else if block.type === 'code'}
                <div
                    class="rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-subtle)]"
                >
                    {#if block.filename}
                        <div
                            class="px-4 py-2.5 border-b border-[var(--color-border)] font-mono text-xs text-[var(--color-fg-muted)] flex items-center justify-between"
                        >
                            <span>{block.filename}</span>
                            <span class="text-[var(--color-fg-subtle)]">{block.language}</span>
                        </div>
                    {/if}
                    <pre class="p-4 md:p-6 overflow-x-auto"><code class="font-mono text-sm text-[var(--color-fg)] leading-relaxed">{block.code}</code></pre>
                </div>

            {:else if block.type === 'gallery'}
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {#each block.images as img (img.url)}
                        <div
                            class="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
                        >
                            <!-- Baggrund -->
                            <div
                                class="absolute inset-0 opacity-30"
                                style="background-image: radial-gradient(circle at 50% 50%, var(--color-border-strong) 1px, transparent 1px); background-size: 24px 24px;"
                            ></div>
                            <img
                                src={img.url}
                                alt={tr(img.alt)}
                                loading="lazy"
                                class="relative h-full w-full object-contain"
                            />
                        </div>
                    {/each}
                </div>

            {:else if block.type === 'metrics'}
                <div
                    class="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 md:p-10"
                >
                    <div
                        class="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style="background-image: linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px); background-size: 40px 40px;"
                    ></div>
                    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {#each block.metrics as metric (metric.label.en)}
                            <div class="space-y-2">
                                <div class="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
                                    {metric.value}
                                </div>
                                <div
                                    class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)] pt-2 border-t border-[var(--color-border)]"
                                >
                                    {tr(metric.label)}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</div>