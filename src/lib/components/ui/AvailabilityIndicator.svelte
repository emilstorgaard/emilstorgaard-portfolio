<script lang="ts">
    import { t } from '$lib/i18n';
</script>

<div
    class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)]"
>
    <span class="relative flex h-2 w-2">
        <span
            class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
        ></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
    </span>
    <span class="text-xs font-medium text-[var(--color-fg-muted)]">
        {$t.hero.availability}
    </span>
</div>