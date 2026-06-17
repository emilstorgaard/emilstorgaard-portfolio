import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

/**
 * Contact form action
 * 
 * Lige nu logges beskeden til console (god til udvikling).
 * 
 * Senere kan du:
 * - Sende via Resend/Postmark/SendGrid
 * - Eller poste til Umbraco Forms endpoint
 * - Eller gemme i en database
 */
export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name')?.toString().trim();
        const email = data.get('email')?.toString().trim();
        const subject = data.get('subject')?.toString().trim();
        const message = data.get('message')?.toString().trim();
        const honeypot = data.get('website')?.toString(); // honeypot field

        // Honeypot: hvis udfyldt, er det en bot - returnér success uden at gøre noget
        if (honeypot) {
            return { success: true };
        }

        // Validering
        const errors: Record<string, string> = {};
        if (!name || name.length < 2) errors.name = 'invalid';
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'invalid';
        if (!message || message.length < 10) errors.message = 'invalid';

        if (Object.keys(errors).length > 0) {
            return fail(400, {
                errors,
                values: { name, email, subject, message }
            });
        }

        // TODO: Faktisk afsendelse via email service eller Umbraco Forms
        console.log('📬 New contact form submission:', {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        // Simulér lille delay (kan fjernes når rigtig email service er på)
        await new Promise((resolve) => setTimeout(resolve, 600));

        return { success: true };
    }
};