![README Header](./.github/readme-header.png)

# The Prompt Slam Interface

> Battle each other in an amazing prompt slam using the power of DALL-E.

A Prompt Slam (also known as a prompt battle) is an event format invented by [Florian A. Schmidt](https://florianalexanderschmidt.de/) and [Sebastian Schmieg](https://sebastianschmieg.com/) with design students from the [HTW Dresden](https://www.htw-dresden.de/).

During a Prompt Slam people compete against each other using text-to-image AI models. The audience then chooses one of the contestants as a winner.
For an independent Prompt Slam event series, hosted at [HfK Bremen](https://www.hfk2020.de/), this interface was developed.

You can read more about the original Prompt Slam [here](https://promptbattle.com/).

## 📝 Colophon

- Fonts in use:
  - [Redaction](https://www.redaction.us/) by [Jeremy Mickel](https://mckltypeq.com/)
  - [Helvetica](https://www.linotype.com/de/1308886/helvetica-schriftfamilie.html) by Max Miedinger and Eduard Hoffmann
- Technology:
  - Built with [SvelteKit](https://kit.svelte.dev/)
  - Made beautiful with [Tailwind CSS](https://tailwindcss.com/)
  - Complemented with carefully crafted icons from [Tabler Icons](https://tabler.io/docs/icons/svelte)
  - Uses the [Open AI API](https://platform.openai.com/) to talk to [DALL·E 2](https://openai.com/product/dall-e-2)

## 🎲 How to play

In general, a Prompt Slam is played like this. Two players or teams play against each other at the same time. At the start, they are both given instructions on what they need to create. They then have one minute to create a prompt simultaneously.
At the end of that minute, they both click 'Generate' to generate their prompt.

The crowd then decides which of the players has generated the better image and that player moves on to the next round. This continues for X number of rounds, depending on your decision and how many players you have. The winner of the final is the winner of the Prompt Slam! 🥳

On the start page, click on the cogwheel in the bottom left corner to access the settings panel. Here you can set the following different game modes

### Game Mode: 🎲 1 for all

In this gamemode the player can write one prompt to generate one image. When the time is up, they press 'Generate' and are presented with only one image. The crowd then decides.

### Game Mode: 🍀 Lucky 4

In _🍀 Lucky 4_ the player also has only one attempt of prompting. Unlike _🎲 1 for all_ they are presented with four generated images to choose from. Once they have chosen one of the four images, they click on it and the crowd votes on it.

### Other Gamemodes

Other gamemodes are currently developed and will be added to this repo in the future.

## 💻 Use this interface

To use this interface you only need API access to the [OpenAI API](https://openai.com/product).

Replace `YOUR_OPENAI_API_KEY` in the `.env.example` file with your OpenAI API key. Then rename the `.env.example` to `.env`.

You can then either host the interface locally or deploy it to the hosting provider of your choice.

## 🚧 Development

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## 🏗️ Build for production

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

To start the production build use:

```bash
node build/index.js
```

This starts the interface as a node.js app.

## 🐳 Deploy with Docker

Using the Dockerfile or Docker Compose file in this repository, you can also run or deploy the app as a Docker container.

Make sure to add an OpenAPI Key to the `.env` file and adjust the ORIGIN variable before running the container.

### Run with Docker Compose

To start the container with docker compose just run:

```bash
docker compose up -d
```

This will automatically build the image and start the container.

To stop the container you can run:

```bash
docker compose down
```

If you have made changes to the .env file you may want to rebuild the container:

```bash
docker compose up -d --build
```

### Run with Dockerfile

First you need to build the image with the following command:

```bash
docker build . -t prompt-slam
```

Then start the created Docker image as a container.

```bash
docker run -d -p 3000:3000 prompt-slam
```
