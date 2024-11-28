import { title } from "../primitives";
import { SubstackArticles } from "../substack-articles";

export default function ArticlesSection({id }: {id: string}) {

    return (
        <section className="w-full py-12 items-center justify-center" id={id}>
            <div className="w-full flex flex-col items-center justify-center">
                <span className={`${title()} text-center`}>
                    Articles
                </span>
           
            </div>
            <br/>
            <br/>
            <SubstackArticles />
        </section>
    )

}