import type {GameSiteContent} from './types';

/**
 * Replace this object to reskin the entire template. The Neon Cactus showcase
 * lives in a separate repository and supplies its own game-specific content.
 */
export const gameContent: GameSiteContent = {
  studio: 'YOUR STUDIO',
  title: 'NIGHT//SHIFT',
  kicker: 'A CO-OP RUN & GUN PROTOTYPE',
  tagline: 'Cross the city. Break the signal. Make it home before dawn.',
  synopsis:
    'A configurable launch page for action games, built with Astryx and ready to host a playable browser demo. Replace this sample world with your own cast, art direction, and game build.',
  releaseLabel: 'PLAYABLE PROTOTYPE',
  platforms: ['Browser', 'Keyboard', 'Gamepad', '2–4 player ready'],
  features: [
    {
      eyebrow: '01 / DROP IN',
      title: 'Launch without leaving the page',
      description:
        'Turn the campaign hero into a direct path to your WebGL, Canvas, or iframe-based playable demo.',
    },
    {
      eyebrow: '02 / LINK UP',
      title: 'Create a co-op room in seconds',
      description:
        'The included lobby surface supports host and join flows while keeping backend choice behind an adapter.',
    },
    {
      eyebrow: '03 / MAKE IT YOURS',
      title: 'Swap the world, not the structure',
      description:
        'Content, tokens, imagery, and game integration are isolated so teams can build a distinct launch quickly.',
    },
  ],
  characters: [
    {
      name: 'THE VANGUARD',
      role: 'Frontline / Crowd control',
      description: 'A durable lead character built to hold the screen and clear a path for the squad.',
      accent: 'cyan',
    },
    {
      name: 'THE PHANTOM',
      role: 'Mobility / Precision',
      description: 'A fast alternate character tuned for flanking, weak-point hits, and risky rescues.',
      accent: 'pink',
    },
  ],
  demo: {
    title: 'Playable vertical slice',
    description:
      'This lightweight canvas game proves the embed contract. Replace it with Phaser, Unity WebGL, Godot, or a hosted iframe without changing the surrounding site.',
    objective: 'Move, jump, and shoot the incoming drones before they cross the line.',
  },
  social: {
    github: 'https://github.com/',
  },
};
