export interface ParallaxProps {
  children: string;
  baseVelocity: number;
}
export interface ParallaxTextorProps {
  velocity: number;
}
export interface ScrollHeadingProps {
  className?: string;
  title?: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface MissionUpEnProps {
  className: string;
}

export interface MissionDownEnProps {
  className: string;
}

export interface ContainersProps {
  id?: string;
  className?: string;
  type: "section-large" | "jumbo-vertical";
  children: React.ReactNode;
  childrentwo?: React.ReactNode;
}

export interface TemplatesProps {
  title: string;
  paragraphe?: string;
  ptech?: string;
  pversion?: string;
  figure?: React.ReactNode[];
  role?: string;
  next: string;
  preview: string;
  source?: string;
  link?: string;
}

export interface HeadingProps {
  title?: string | JSX.Element;
  className?: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface Tech {
  name: string;
  image: string;
}

export interface CopyrightProps {
  author: React.ReactNode;
}
