import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type WorkExperience = {
  logo: string;
  position: string;
  dates: string;
  companyDescription: string;
  company: string;
  contributions: string[];
};
