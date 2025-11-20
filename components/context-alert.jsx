import { getNetlifyContext } from '../utils';

export function ContextAlert({ className = '', addedChecksFunction }) {
    const context = getNetlifyContext();
    const additionalMessage = addedChecksFunction?.(context);

    if (context && !additionalMessage) {
        return null;
    }

    const mergedClassName = [
        'rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900',
        className
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={mergedClassName}>
            <p className="font-semibold">Heads up!</p>
            {!context && (
                <p className="mt-1">
                    This demo shows best when deployed to Netlify so platform features are available. Deploy your own copy to try
                    everything out.
                </p>
            )}
            {additionalMessage && <div className="mt-2" dangerouslySetInnerHTML={{ __html: additionalMessage }} />}
        </div>
    );
}
