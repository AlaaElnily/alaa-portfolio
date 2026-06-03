export interface Project {
  num: string;
  name: string;
  role: string;
  tags: string[];
  url: string | null;
  isVideo?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  note: string | null;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string | null;
  url: string | null;
  credentialId: string | null;
}

export interface Skill {
  label: string;
  hot?: boolean;
}
