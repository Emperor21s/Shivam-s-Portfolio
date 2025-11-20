'use client';

import { useState } from 'react';

export function FeedbackForm() {
    const [status, setStatus] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setStatus('Sending...');

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('Thanks for your feedback!');
                event.currentTarget.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error(error);
            setStatus('Something went wrong. Please try again.');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4" name="feedback" data-netlify="true">
            <input type="hidden" name="form-name" value="feedback" />
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-800" htmlFor="name">
                    Name
                </label>
                <input className="input w-full" id="name" name="name" type="text" required />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-800" htmlFor="email">
                    Email
                </label>
                <input className="input w-full" id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-800" htmlFor="message">
                    Message
                </label>
                <textarea className="input w-full" id="message" name="message" rows={4} required />
            </div>
            <button type="submit" className="btn">
                Send Feedback
            </button>
            {status && <p className="text-sm text-neutral-700">{status}</p>}
        </form>
    );
}
