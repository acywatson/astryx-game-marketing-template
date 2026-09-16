# Astryx Game Marketing Website Template

A reusable React 19 marketing site for browser-playable games. It combines Astryx UI, a cinematic launch page, a playable demo adapter, a two-to-four-player room lobby, and an AWS deployment path.

This repository is the **standalone workshop submission**. Game-specific copy and assets belong in a separate repository; `neon-cactus-showcase` is the reference implementation created from this template.

## What ships

- Responsive game-marketing homepage built with Astryx 0.6.2
- Token-driven custom theme with dark mode and reduced-motion behavior
- Configurable hero, feature, character, demo, and call-to-action sections
- Playable Canvas demo behind a replaceable adapter
- Accessible host/join lobby with local preview fallback
- WebSocket room server supporting four slots
- AWS CDK stack: low-cost S3 + CloudFront by default, with ECS Fargate, ALB, and CloudWatch Logs as an explicit multiplayer option
- GitHub Actions for verification and OIDC-based AWS deployment

## Quick start

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The lobby uses a local fallback when no multiplayer server is configured.

To run the real room server locally:

```bash
cd services/session-server
npm install
npm run dev
```

Then start the site with:

```bash
VITE_GAME_SERVER_URL=ws://localhost:8080/socket npm run dev
```

## Customize the template

1. Replace the sample copy in `src/content/game.ts`.
2. Change the brand palette and component treatment in `src/theme.ts`.
3. Replace the key-art component in `src/components/HeroArt.tsx`.
4. Replace `DemoStage` with your Phaser, Unity WebGL, Godot, Canvas, or iframe adapter.
5. Keep the lobby client API in `src/multiplayer/client.ts`, or implement the same contract for another backend.

See [`docs/CUSTOMIZE.md`](docs/CUSTOMIZE.md) for the full handoff checklist.

## Project structure

```text
src/
  components/          Marketing, lobby, key-art, and demo surfaces
  content/             Game-specific copy and content schema
  demo/                Playable-demo adapter contract
  multiplayer/         Browser room client
  theme.ts              Astryx theme definition
  theme.css             Token-based cinematic treatments
services/
  session-server/       Four-slot WebSocket room service
infra/                  AWS CDK application
.github/workflows/      GitHub CI and AWS deployment
```

## AWS deployment

The default stack serves the static site from a private S3 bucket through CloudFront and creates no always-on compute. The lobby uses its local fallback in this mode.

When the real multiplayer loop is ready, deploy with the `multiplayer` context. That adds a same-origin WebSocket endpoint on ECS Fargate behind an Application Load Balancer; the browser automatically selects `wss://<current-host>/socket`.

Prerequisites:

- An AWS account
- AWS CDK bootstrap completed in the target account and region
- Docker available only when deploying the optional Fargate multiplayer service
- An AWS role trusted by GitHub OIDC for automated deployment

Manual deployment:

```bash
npm ci
npm run build

cd services/session-server
npm ci
npm run build

cd ../../infra
npm ci
npx cdk bootstrap
npm run deploy
```

The stack outputs `SiteUrl` and `DeploymentMode`. To add the persistent room server later, run `npm run deploy:multiplayer` from `infra/`; that mode also outputs `MultiplayerWebSocketUrl`.

For GitHub deployment, add `AWS_ROLE_ARN` as an environment secret and optionally set the `AWS_REGION` repository variable. Push a `v*` tag or run the workflow manually.

## Multiplayer scope

The included server owns room membership and relays sequenced player inputs. It supports four player slots from the start, while the recommended first gameplay milestone is two-player co-op. Production gameplay should add an authoritative fixed-timestep simulation and client interpolation without changing the room flow.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Verification

```bash
npm run build
npm run astryx -- doctor

cd services/session-server
npm run typecheck
npm run build

cd ../../infra
npm run build
npm run synth
```

## Workshop submission boundary

The template must remain useful without Neon Cactus assets or a live backend. Its acceptance criteria are:

- fresh clone builds with documented commands;
- generic sample content is included;
- playable local demo works without AWS;
- lobby remains testable with a local fallback;
- content, theme, demo, and multiplayer integrations have explicit seams;
- responsive and keyboard-accessible behavior is preserved;
- AWS and GitHub setup is documented and reproducible.

The separate Neon Cactus repository demonstrates the same structure with cyberpunk-western art direction and game-specific copy.

## License

MIT. See [`LICENSE`](LICENSE).
