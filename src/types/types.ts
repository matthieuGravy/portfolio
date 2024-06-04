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
