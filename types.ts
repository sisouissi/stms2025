

export interface Speaker {
  name: string;
  specialty: string;
  role?: string;
}

export interface Session {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  location: string;
  speakers: Speaker[];
  moderators?: string[];
  theme: string;
  type: string;
  description: string;
  details: string[];
  isParallel?: boolean;
  introduction?: string;
  objectives?: string[];
}

export interface Day {
  key: string;
  label: string;
  date: string;
}

export interface Filters {
  theme: string;
  type: string;
  speaker: string;
}

export interface Poster {
  id: string;
  title: string;
  authors: string;
  affiliation: string;
  summary?: string;
}