import { WorkExperience } from "@/types";
import { title } from "../primitives";
import WorkCard from "../work-card";
import { jobs } from "@/data/jobs";

type WorkExperienceSectionProps = {
    onPressWorkCard: (work: WorkExperience) => void;
    id: string;
};
export const WorkExperienceSection = ({  onPressWorkCard, id }: WorkExperienceSectionProps) => (
    <section className="w-full flex flex-col items-center justify-center py-16" id={id}>

        <div className="w-full flex flex-col items-center">
            <span className={`${title()} text-center`}>
                Work Experience
            </span>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobs.map((work: WorkExperience, index: number) => (
                <WorkCard
                    key={index}
                    workExperience={work}
                    onPressWorkCard={onPressWorkCard}
                />
            ))}
        </div>
    </section>
);