
'use client'
import {  Image} from "@nextui-org/image";

import {Card, CardFooter} from "@nextui-org/card";
import { WorkExperience } from "@/types";
interface WorkCardProps {
    workExperience: WorkExperience;
    onPressWorkCard?: (
        workExperience: WorkExperience
    ) => void;
}

export default function WorkCard({ workExperience, onPressWorkCard}: WorkCardProps) {
    const {
        logo,
    } = workExperience;

    const handleCardPress = () => {
        if (onPressWorkCard) {
            onPressWorkCard(workExperience);
        }
    };


    return (
        <Card isFooterBlurred className="w-full h-[260px] p-0 z-[0]" isPressable as="button" onPress={handleCardPress}>

            <div className="relative w-full h-full">

                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-contained"
                    src={logo}
                />
            </div>
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-1">
                <div className="flex flex-grow gap-1 items-center justify-center">

                    <span className="text-tiny text-white bg-black/20 px-4 py-1 rounded-lg">
                        Learn More
                    </span>
            
                </div>
            </CardFooter>
        </Card>


    )
}