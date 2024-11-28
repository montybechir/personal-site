import {Image} from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
export default function HeroSection({id}: {id: string}) {
    
    return (
        <section className="w-full md justify-center" id={id}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">  
                <div className="md:w-1/2">
                    <span className={title()}>
                        Proven Product Manager & <br/>Full-Stack Engineer
                    </span>
                    <div className={subtitle({ class: "mt-4" })}>
                        Hi, I'm Monty - co-founder of Vybes, we're an AI-driven social network designed to helped Gen Z connect with themselves and others through shared interests. I've been a product manager for three years and wrote all of Vybes' mobile front-end and backend code entirely on my own over the past two years.
                        <br /><br />
                        Prior to Vybes, I was on the web operations/devops team at Morgan Stanley for 2.5 years. In college, I obtained two bachelor of science degrees; one in computer science and another in geophysics. I had two internship terms at Devon Energy, a fortune 500 oil & gas company, where I worked on business analysis and machine learning prediction models.
                        <br/><br/>
                        I occasionally write about startups, venture capital, and the intersection of technology and society on my Substack. Outside of work, I've always been a huge sports fan and competed as a sprinter on the Dinos Track & Field Team in university. Now, I help coach my younger brother who is an aspiring soccer player.
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