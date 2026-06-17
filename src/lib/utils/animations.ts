import type { Action } from 'svelte/action';

/**
 * Reveal on scroll - tilføjer 'is-visible' class når elementet kommer i view
 */
export const reveal: Action<HTMLElement, { delay?: number; threshold?: number } | undefined> = (
    node,
    options = {}
) => {
    const { delay = 0, threshold = 0.15 } = options;

    node.style.opacity = '0';
    node.style.transform = 'translateY(20px)';
    node.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.style.opacity = '1';
                    node.style.transform = 'translateY(0)';
                    observer.unobserve(node);
                }
            });
        },
        { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
};