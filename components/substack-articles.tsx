'use client';
import { Card } from "@nextui-org/card";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const articles = [
    {
        code:<><div className="substack-post-embed"><p lang="en">Startups, Venture Capital, 100X Rules, and Being Cringe by Monty Bechir</p><p>Building in stealth</p><a data-post-link href="https://montybechir.substack.com/p/startups-venture-capital-100x-rules">Read on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charSet="utf-8"></script></>,
        id: 1
    },
    { 
        code: <><div className="substack-post-embed"><p lang="en">Gen Z & Millennial Dating vs Startups & Venture Capital by Monty Bechir</p><p>How things still go wrong when they shouldn't</p><a data-post-link href="https://montybechir.substack.com/p/gen-z-and-millennial-dating-vs-startups">Read on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charSet="utf-8"></script></>,
        id: 2
    },
    {
        code: <><div className="substack-post-embed"><p lang="en">Startups vs Goliath - Ruthless Competitors by Monty Bechir</p><p>Stealth gone wrong</p><a data-post-link href="https://montybechir.substack.com/p/startups-vs-goliath-ruthless-competitors">Read on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charSet="utf-8"></script></>,
        id: 3
    },
    

];

const SubstackEmbedNoSSR = dynamic(() => import('./substack-embed'), { 
    ssr: false,
    loading: () => <Card className="w-full h-48 animate-pulse" />
});

export function SubstackArticles() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {articles.map(({ code, id}) => (
                <Suspense
                    key={id}
                    fallback={<Card className="w-full h-48 animate-pulse" />}>
                    <SubstackEmbedNoSSR 
                        article={code}
                    />
                </Suspense>
            ))}
        </div>
    );
}