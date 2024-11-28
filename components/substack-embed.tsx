interface SubstackEmbedProps {
    article: JSX.Element;
}
export default function SubstackEmbed({ article }: SubstackEmbedProps) {
    return (
        <div className="substack-post-embed">
            {article}
        </div>
    );
}