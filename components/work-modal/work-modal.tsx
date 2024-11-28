'use client'
import { WorkExperience } from "@/types";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {
    Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    ModalContent,
} from "@nextui-org/modal";

interface WorkModalProps {
    isOpen: boolean;
    workExperience: WorkExperience | null;
    onClose: () => void;
}

export default function WorkModal({
    workExperience,
    onClose,
    isOpen
} : WorkModalProps) {

    if (!workExperience) return null;

    const {
        position,
        dates,
        company,
        logo, 
        companyDescription,
        contributions
    } = workExperience;
    return (
        <>
            <Modal 
                size={"lg"} 
                isOpen={isOpen} 
                onClose={onClose} 
                scrollBehavior={"inside"}

            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">

                                <div className="flex w-full items-center gap-8">

                                    <Image
                                        src={logo}
                                        alt={position}
                                        width={90}
                                        height={70}
                                        className="rounded-0 flex-shrink-0"

                                    />
                                    <div className="flex flex-col ">
    
                                        <p className="text-xl font-semibold">{company}</p>
                                        <p className="text-lg font-medium">{position}</p>
                                        <p className="text-sm font-medium text-gray-500">{dates}</p>

                                    </div>


                                </div>


                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <p className="text-md text-center font-medium">{companyDescription}</p>

             
                 
                             
                                    <br/><br/>
                           
                                    {contributions.map((contribution, index) => (
                                        <div key={index} className=" items-center gap-2">
                                            <div className="flex flex-row gap-4">
                                                <span className="text-lg font-semibold">•</span>
                                                <p>{contribution}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter className="w-full align-center justify-center">
                                <Button color="default" variant="flat" onPress={onClose}
                                    className="bg-black text-white hover:bg-black/80"
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}