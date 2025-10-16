import type { ReactElement, ReactNode } from "react";

export interface Skill {
    keyName: string;
    name: string | ReactNode;
    icon: ReactElement
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}