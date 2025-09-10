export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Crypto Video Report',
    description:
      'AI-powered cryptocurrency market analysis and video reporting platform.',
    logo: '/logos/vsc.svg',
    link: 'https://cryptovideoreport.com',
    slug: 'crypto-video-report',
  },
  {
    title: 'Invoice Email Parser',
    description:
      'Automated invoice extraction and processing from email attachments using AI.',
    logo: '/logos/vsc.svg',
    link: 'https://invoiceemailparser.com',
    slug: 'invoice-email-parser',
  },
];
