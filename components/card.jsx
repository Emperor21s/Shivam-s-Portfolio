export function Card({ title, className = '', children }) {
    const mergedClassName = ['rounded-lg border border-neutral-200 bg-white p-6 shadow-sm', className]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={mergedClassName}>
            {title && <h2 className="mb-3 text-lg font-semibold text-neutral-900">{title}</h2>}
            {children}
        </div>
    );
}
