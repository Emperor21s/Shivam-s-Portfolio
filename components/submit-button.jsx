'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ text }) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="btn" disabled={pending}>
            {pending ? 'Submitting...' : text}
        </button>
    );
}
