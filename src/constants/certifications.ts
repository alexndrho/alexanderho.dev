import type { IconType } from "react-icons";
import { BiSolidCertification } from "react-icons/bi";
import { SiCisco } from "react-icons/si";

export type CertificationType = {
  logo: IconType;
  title: string;
  issuer: string;
  category: CertificationCategory;
  source: string;
};

export enum CertificationCategory {
  ENGINEERING = "engineering",
  NETWORKING = "networking",
}

export const certifications: CertificationType[] = [
  // engineering
  {
    logo: BiSolidCertification,
    title: "IT Specialist - HTML5 Application Development",
    issuer: "Certiport",
    category: CertificationCategory.ENGINEERING,
    source: "https://www.credly.com/badges/1fb29435-0857-42ce-9b30-655be0c92403/public_url",
  },

  // networking
  {
    logo: BiSolidCertification,
    title: "IT Specialist - Networking",
    issuer: "Certiport",
    category: CertificationCategory.NETWORKING,
    source: "https://www.credly.com/badges/3640a6ce-321d-4f46-bdc4-c9e5bbeb4af6/public_url",
  },
  {
    logo: SiCisco,
    title: "DevNet Associate",
    issuer: "Cisco",
    category: CertificationCategory.NETWORKING,
    source: "https://www.credly.com/badges/af4acaea-94fd-4b33-a2d5-d803e6bb29fe/public_url",
  },
  {
    logo: SiCisco,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    category: CertificationCategory.NETWORKING,
    source: "https://www.credly.com/badges/50a2350f-67c4-46b0-a470-9c0b678f59f7/public_url",
  },
  {
    logo: SiCisco,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    category: CertificationCategory.NETWORKING,
    source: "https://www.credly.com/badges/68dc94cb-e60f-4737-85a5-54c29fa6d870/public_url",
  },
] as const;

const previewTitle = [
  "IT Specialist - Networking",
  "IT Specialist - HTML5 Application Development",
  "DevNet Associate",
  "CCNA: Switching, Routing, and Wireless Essentials",
] as const;

export const certificationPreview: CertificationType[] = previewTitle.flatMap((title) =>
  certifications.filter((item) => title === item.title),
);
