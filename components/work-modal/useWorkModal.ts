"use client"
import { WorkExperience } from "@/types";
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";

export default function useWorkModal() {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [workExperience, setWorkExperience] = useState<WorkExperience | null>(null);
    const onPressWorkCard = (work: WorkExperience) => {
        setWorkExperience(work);
        onOpen();
    }
    
    return {
        isOpen,
        onOpen,
        onClose,
        onOpenChange,
        onPressWorkCard,
        workExperience
    }
}