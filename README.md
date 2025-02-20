# Devvit x Phaser Template

This is a Devvit project template to create a Webview App with Phaser that uses Vite for bundling. It supports hot-reloading for quick development workflow and includes scripts to create production-ready builds to publish on Reddit.

Live-Demo: https://www.reddit.com/r/HammertimeStudio/comments/1itxfg9/my_phaser_devvit_app/.

![Cute Cube shaped Animal Heads on blue background, as a Splashscreen for a Reddit App Post](./assets/splash_preview.png 'Splashscreen Preview')

### Versions

This template has been updated for:

- [Devvit 0.17.0](https://www.npmjs.com/package/devvit)
- [Phaser 3.88.2](https://www.npmjs.com/package/phaser)
- [Vite 6.1.0](https://github.com/vitejs/vite)
- [NodeJS 22.12.0](https://nodejs.org/en/blog/release/v22.12.0)

## Before you begin

### Step 1. Register App on Devvit

Skip this step if you have the App identifier at hand. This template assumes you have setup your app on Devvit and installed the Devvit CLI. This means you have an App identifier at your hand. If you do not have this, follow the Devvit instruction via [Intro to Devvit](https://developers.reddit.com/docs/showcase/tutorials/intro-to-devvit) and either select an empty CLI template or initiate a new project **outside** of this project to retrieve the necessary App identifier that we need in the next step.

### Step 2. Setup App in this template

Change the `devvit.yaml` to match your app name you have created in the previous step.

```
name: <your-app-identifier>
version: <your-app-version-number>
```

Example for [Riddonkulous](https://www.reddit.com/r/riddonkulous) Reddit App:

```
name: riddonkulous
version: 1.18.0
```

### Step 3. Verify

Run `devvit --version` to verify your Devvit CLI is setup correct. The output looks something like this:

```
$ devvit --version
@devvit/cli/0.11.7 win32-x64 node-v22.12.0
```

To test your App is working properly with the template, run `devvit upload` to upload your current version. Hooray! If that works, you are ready to write code.

## NPM Script

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm install`   | Install project dependencies                      |
| `npm run vite`  | Launch local developmentt Server                  |
| `npm run build` | Create a production build in the `webroot` folder |
| `npm run dev`   | Start developing in watch mode                    |

## Devvit CLI Commands

| Command                       | Description                                 |
| ----------------------------- | ------------------------------------------- |
| `devvit login`                | Log into your current developer account     |
| `devvit upload`               | Upload your Devvit App to the App directory |
| `devvit playtest <subreddit>` | Start playtest session in subreddit         |

## Writing Code

After cloning the repo, run `npm install` from the projects root directory. Then, you can start the local development server by running `npm run dev`.

The local development server runs on `http://localhost:5173` by default. This development server is useful to develop your game's webview without the Devvit context, making quick changes and hot-reloading.

Once the server is running you can edit any of the files in the `src` folder. Vite will automatically recompile your code and then reload the browser.

Note that the Devvit Public API is not available for local development. Instead running the Devvit App in playtest mode will allow you to test your development version.

## Template Project Structure

Let's get started, shall we? This is the basic template project structure :

- `/src/` - Your Devvit and webview code lives inside this directory.
- `/webroot/` - When you build the webview, productions files are located here.
- `/assets/` - Contains static assets you can use within Devvits Blocks easily.

---

- `/src/app/` - Devvit related sourcecode to utilize the Devvit Platform features.
- `/src/game/` - Any Game's Webview related code is inside this directory.
- `/src/shared/` - You might want to share code between the Devvit and Webview code such as PostMessage types. This is the directory!
- `/src/main.tsx` - The main entry point for the Devvit App.

## Make your first Build

Wether you have written your code or not, it's finally time to create a build that you can upload. Rrun the `npm run build` command, your typescript code is transpiled, assets copied and saved to the `webroot` folder.

Once you see all your files are transpiled and saved to the `webroot` directory, you want to use `devvit publish` to publish your App version.

## Vite

If you want to customize your build, you can modify the `vite.config.ts` file. By default the config is configured to work with the `webroot` directory as the build target folder and the `src/game` folder as the webview project directory

### webroot-plugin

The `webroot-plugin` is a tiny plugin that makes sure the new webroot version is used by the latest version of your Devvit App. If you wish to work without it, remove it from the `vite.config.ts` and change the `url` attribute in the `useWebViewHook` inside the `main.tsx` to `index.html`

## Credits

If this template helped you kickstart your own Devvit Webview App, yeeey! Feel free to reach out to me on Discord (Heideltraut) and share your project on [Reddit](https://www.reddit.com/r/HammertimeStudio/). I'm excited to see what you're building!

The awesome exmpliary assets from this repository are from [Kenney.nl](https://kenney.nl/). Check it out if you are looking for more.

I built this template in my freetime, if you do like working with this template, please give it ⭐.

This template is created by me [Hammertime Studio](https://hammertime.studio) 🔨
