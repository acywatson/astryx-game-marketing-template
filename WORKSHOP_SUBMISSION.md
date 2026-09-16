# Workshop submission: Astryx Game Marketing Website Template

## One-line pitch

A reusable Astryx template that turns a game announcement into a playable, cooperative browser experience without sending players to a separate product.

## Problem

Small game teams repeatedly rebuild the same launch surfaces—hero, character reveal, feature story, demo frame, and multiplayer lobby—then wire each one to a different stack. This template packages those surfaces behind explicit content, theme, game, and server seams.

## What reviewers can try

1. Resize the page from desktop to mobile.
2. Navigate using the keyboard and activate the skip link.
3. Open the co-op lobby, create a four-character room, and copy the code.
4. Join through the room-code form.
5. Play the embedded Canvas run-and-gun prototype.
6. Replace `src/content/game.ts` to reskin the complete site.
7. Compare the generic template with the separate Neon Cactus showcase.

## Astryx usage

- Theme and token extension through `defineTheme`
- Button, Dialog, DialogHeader, TextInput, StatusDot, Badge, Card, Section
- Grid, HStack, VStack, Layout, LayoutContent, LayoutFooter
- Heading, Text, Link, and Kbd
- Astryx CLI initialization, component discovery, doctor checks, and conventions

## Template qualities

- no game-specific assets required;
- React 19 and Vite;
- local demo and lobby fallback work without cloud credentials;
- responsive and reduced-motion behavior;
- four-slot WebSocket protocol;
- S3, CloudFront, Fargate, ALB, and CloudWatch deployment through AWS CDK;
- GitHub CI and OIDC deployment workflow;
- MIT licensed.

## Reference showcase

Neon Cactus is maintained separately. It demonstrates a cyberpunk-western visual identity—Tokyo-night neon, desert silhouettes, dive-bar energy—and game-specific marketing copy without contaminating the reusable template.

## Suggested demo script

- Open on the hero and explain that the artwork, copy, and tokens are replaceable.
- Select “Start co-op room” and show the host/join states.
- Scroll into the playable frame and complete one wave.
- Open `game.ts` and `theme.ts` side-by-side to show the customization boundary.
- End on the AWS diagram and the separate Neon Cactus build.
