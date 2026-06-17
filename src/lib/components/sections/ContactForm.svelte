<script lang="ts">
    import { enhance } from '$app/forms';
    import { t } from '$lib/i18n';
    import { cn } from '$lib/utils/cn';
    import Icon from '$lib/components/ui/Icon.svelte';
    import type { ActionData } from '../../../routes/contact/$types';

    let { form }: { form: ActionData } = $props();

    let submitting = $state(false);
    let success = $state(form?.success ?? false);

    function fieldError(field: string): boolean {
        return !!(form && 'errors' in form && form.errors?.[field]);
    }
</script>

<form
    method="POST"
    use:enhance={() => {
        submitting = true;
        success = false;
        return async ({ result, update }) => {
            submitting = false;
            if (result.type === 'success') {
                success = true;
            }
            await update({ reset: result.type === 'success' });
        };
    }}
    class="space-y-5"
>
    <!-- Honeypot (skjult for brugere, fanger bots) -->
    <div class="absolute -left-[9999px]" aria-hidden="true">
        <label>
            Website
            <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </label>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="space-y-2">
            <label for="name" class="block font-mono text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                {$t.contact.name} *
            </label>
            <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={$t.contact.namePlaceholder}
                value={form && 'values' in form ? (form.values?.name ?? '') : ''}
                class={cn(
                    'w-full h-11 px-4 rounded-lg bg-[var(--color-bg-elevated)] border text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 transition-all',
                    fieldError('name')
                        ? 'border-red-500/50'
                        : 'border-[var(--color-border)] focus:border-[var(--color-border-strong)]'
                )}
            />
        </div>

        <div class="space-y-2">
            <label for="email" class="block font-mono text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                {$t.contact.email} *
            </label>
            <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={$t.contact.emailPlaceholder}
                value={form && 'values' in form ? (form.values?.email ?? '') : ''}
                class={cn(
                    'w-full h-11 px-4 rounded-lg bg-[var(--color-bg-elevated)] border text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 transition-all',
                    fieldError('email')
                        ? 'border-red-500/50'
                        : 'border-[var(--color-border)] focus:border-[var(--color-border-strong)]'
                )}
            />
        </div>
    </div>

    <div class="space-y-2">
        <label for="subject" class="block font-mono text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
            {$t.contact.subject}
        </label>
        <input
            type="text"
            id="subject"
            name="subject"
            placeholder={$t.contact.subjectPlaceholder}
            value={form && 'values' in form ? (form.values?.subject ?? '') : ''}
            class="w-full h-11 px-4 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-border-strong)] transition-all"
        />
    </div>

    <div class="space-y-2">
        <label for="message" class="block font-mono text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
            {$t.contact.message} *
        </label>
        <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder={$t.contact.messagePlaceholder}
            value={form && 'values' in form ? (form.values?.message ?? '') : ''}
            class={cn(
                'w-full px-4 py-3 rounded-lg bg-[var(--color-bg-elevated)] border text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 transition-all resize-none',
                fieldError('message')
                    ? 'border-red-500/50'
                    : 'border-[var(--color-border)] focus:border-[var(--color-border-strong)]'
            )}
        ></textarea>
    </div>

    <!-- Submit -->
    <div class="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
            type="submit"
            disabled={submitting}
            class="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-[var(--color-fg)] text-[var(--color-bg)] font-medium hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
            {#if submitting}
                <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"></path>
                </svg>
                {$t.contact.sending}
            {:else}
                {$t.contact.send}
                <Icon name="arrow-right" size={16} />
            {/if}
        </button>

        <!-- Feedback -->
        {#if success}
            <div
                class="flex items-center gap-2 text-sm text-emerald-400 animate-fade-in"
                role="status"
            >
                <span class="relative flex h-2 w-2">
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                {$t.contact.success}
            </div>
        {:else if form && 'errors' in form}
            <div class="text-sm text-red-400" role="alert">
                {$t.contact.error}
            </div>
        {/if}
    </div>
</form>

<style>
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fade-in 0.3s ease-out;
    }
</style>