# Pento Frontend Tech Challenge

**Welcome!**
Thanks for taking the time to do our frontend tech challenge.

The challenge is to finish building a small web app, that can help freelancers track their work time.

Below you will find a set of tasks that you will have to complete. You don't have to do all of them, pick the ones you feel more comfortable with or that best showcase your skills, or pick them all, is up to you.

Feel free to add any library you think you may need, but please try to explain your reasoning behind that on the `Notes.md` file.

## Documenting your submission

If you feel that you need to explain certain aspects of your code or decission making process:

- Add inline comments on the code itself whenever you think is needed;
- Update the [ Notes.md ](./Notes.md) file with whatever explanations or notes you think we may need.

## Tasks

When completing these tasks feel free to make as many modifications as you think are necessary: add new routes, split existing ones, change components layout, data flow, etc.
Just remember to write down your reasons for it on [ Notes.md ](./Notes.md), in case you do very disruptive changes.

- [x] Center and style the global app `Loading` indicator;
<!-- TODO: Create global state for app loading -->
- [x] Create a Timer component, make it tick and put it in place of the static string that shows the elapsed time of the active session;
- [x] Add proper loading indicators;
- [ ] Add week and daily summaries. You can do it however you want, don't feel forced to do it as charts, and put them whenever you want;
- [ ] Add a way to edit an existing session. Again, feel free to do it in any way you prefer: a modal, an edit route, etc. The only requirement is that it should be possible to trigger it by clicking anywhere on the task row;
- [x] Make the list of sessions at the main route scrollable without the page body having to scroll as well;
<!-- TODO: Fix Card padding that is making page still scroll -->
- [ ] Fix the bug that prevents the `RunningSessionControls` to properly update on changes (switchSession, stopSession, etc.);
- [ ] Improve the application in any way want 😄.

## Getting Started

Fork this repository into your own account and clone it into your local machine or your preferred development environment. Create a development branch and do your work on it.
Then at the repo root run:

```
npm install
```

or

```
yarn
```

When you are finished, commit your code to your branch, push it to your own repository and open a pull request.

## Available Scripts

In the project directory you can run:

### `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you edit something.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production in the `build` folder.

### `yarn generate`

Generates the TypeScript types from the graphql API. You need to set a valid JWT token as a environment variable.

### `yarn new-component`

Creates a new UI component, with all the required boilerplate, some safe defaults and initial tests.
**Please use this script when creating a new UI component**

#### Linux and macOS

```
TOKEN=xxxxx yarn generate --watch
```

#### Windows cmd.exe

```
set TOKEN="xxxxx"
yarn generate --watch
```
