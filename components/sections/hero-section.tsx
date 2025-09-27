import {Image} from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
export default function HeroSection({id}: {id: string}) {
    
    return (
        <section className="w-full md justify-center" id={id}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">  
                <div className="md:w-1/2">
                    <span className={title()}>
                        Proven Senior Software Engineer &<br/> Growth Engineer
                    </span>
                    <div className={subtitle({ class: "mt-4" })}>
                        Hi, I'm Monty - I'm currently a Senior Software Engineer on the growth team at EverCommerce, where I focus on driving user activation and revenue.
                        <br /><br />
                        Previously, I co-founded Vybes, an AI-driven social platform for Gen Z, where I built the entire full-stack application and led product strategy. Before that, I spent 2.5 years in web operations at Morgan Stanley and completed internships at Devon Energy working on ML prediction models.
                        <br/><br/>
                        I write about startups and technology on Substack, and when I'm not coding, you'll find me running or coaching my younger brother who's an aspiring soccer athlete.
                    </div>
                </div>
        
                <div className="md:w-1/2 justify-center flex items-center">
                    <Image
                        width={300}
                        alt="Profile Picture"
                        src="profile-picture.jpg"
                        className="w-full h-auto rounded-lg max-w-sm md:max-w-md z-[0]"  
                        removeWrapper
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}