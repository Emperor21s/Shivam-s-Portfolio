import MarkdownToJSX from 'markdown-to-jsx';

export function Markdown({ content, className = '' }) {
    const mergedClassName = ['markdown', className].filter(Boolean).join(' ');

    return (
        <div className={mergedClassName}>
            <MarkdownToJSX options={{ forceBlock: true }}>{content}</MarkdownToJSX>
        </div>
    );
}
