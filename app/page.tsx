"use client"

import WorkModal from "@/components/work-modal/work-modal";
import useWorkModal from "@/components/work-modal/useWorkModal";
import {  WorkExperienceSection } from "@/components/sections/work-experience-section";
import HeroSection from "@/components/sections/hero-section";
import ArticlesSection from "@/components/sections/articles-section";
import ConnectSection from "@/components/sections/connect-section";

export default function Home() {


    const { isOpen, onClose, onPressWorkCard , workExperience} = useWorkModal();
  

    return (
        <>
            <HeroSection id="hero"/>
        
            <WorkExperienceSection
                onPressWorkCard={onPressWorkCard}
                id="work"
            />

            <ArticlesSection id="articles"/>
            
            <ConnectSection id="connect"/>
            <WorkModal
                onClose={onClose}
                isOpen={isOpen}
                workExperience={workExperience}
            /> 
        </>
    );
}
