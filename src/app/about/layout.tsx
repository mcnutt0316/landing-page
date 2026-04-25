import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Corey – Software Developer',
  description:
    'From the open road to the terminal — the story of a truck driver turned self-taught developer.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
