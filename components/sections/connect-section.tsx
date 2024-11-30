import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { LinkedInIcon, GithubIcon, SubstackIcon } from "../icons";
import { subtitle, title } from "../primitives";
import { button as buttonStyles } from "@nextui-org/theme";

export default function ConnectSection({id}: {id: string}) {
    return (
        <section className="w-full flex flex-col items-center justify-center py-16" id={id}>
            <span className={`${title()} text-center`}>
                Connect
            </span>
            <br/>
            <div className={subtitle({ class: "mt-4" })}>
                <p className="text-center">
                    I'm always excited to connect with fellow product managers, engineers, entrepreneurs, or anyone interested in collaborating. Feel free to reach out to me directly at firstnamelastname [at] gmail.com or via one of the platforms below.
                </p>
            </div>
            <br/>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6">  
                <Link  
                    isExternal  
                    className={buttonStyles({  
                        color: "primary",  
                        radius: "full",  
                        variant: "shadow",  
                    })}  
                    href={siteConfig.links.linkedin}    
                >  
                    <LinkedInIcon size={24} />  LinkedIn
                </Link>  
                <Link  
                    isExternal  
                    className={buttonStyles({  
                        color: "default",  
                        radius: "full",  
                        variant: "shadow",  
                    })}  
                    href={siteConfig.links.github}  
                >  
                    <GithubIcon size={24} />  GitHub
                </Link>  
                <Link  
                    isExternal  
                    className={buttonStyles({  
                        color: "warning",  
                        radius: "full",  
                        variant: "shadow",  
                    })}  
                    href={siteConfig.links.substack}  
                >  

                    <SubstackIcon size={16} />  Substack
                </Link>


            </div>  
        </section>
    )
}