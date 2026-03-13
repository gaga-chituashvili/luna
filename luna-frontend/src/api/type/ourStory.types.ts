export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Mission {
  title: string;
  description: string;
  highlights: string[];
}
