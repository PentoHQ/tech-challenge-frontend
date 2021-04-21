# Pento tech challenge

**Welcome !**
Thanks for taking the time to do our tech challenge.

The challenge is to finish building a small web app, that can help a freelancer track their time.

Below you will find a set of tasks that you will have to complete. You don't have to do them all, pick the ones you feel more comfortable with, or pick them all, is up to you.

Feel free to add any library you think you may need, but please try to explain your reasoning behind that on the `Notes.md` file.

## Documenting your submission

If you feel that you need to explain certain aspects of your code or of your decission taking process you can:
- Add inline comments on the code itself whenever you think is needed
- Update the [ Notes.md ](./Notes.md) file with whatever explanations or notes you think we may need

## Tasks

When completing this tasks feel free to make as many modifications as you think are necessary: add new routes, split existing ones, change components layout, data flow, etc. 
Just remember to write down your reasons on [ Notes.md ](./Notes.md) if you do very disruptive changes.

 - Center and style the global app `Loading` indicator
 - Create a CountDown component, make it tick and put it in place of the static string that shows the elapsed time of the running session
 - Add proper loading indicators. (maybe create a Skeleton component?)
 - Add week and daily summaries. You can do it however you want, don't feel forced to do it as charts and put it whenever you want (new route?, above the monthly one?)
 - Add a way to edit an existing session. Again, feel free to do it in any way: a modal? an edit route? The only requirement is that it is possible to trigger it by clicking anywhere on the task row
 - Make the list of sessions at the main route scrollable without the page body having to scroll
 - Fix the bug that prevents the RunningSessionControls to properly update on changes (switchSession, stopSession, etc)
 - Improve the application in any way you can (and want! 😄)
## Getting Started 

Fork this repository into your own account and clone it into your local machine or your preferred dev environment. Create a development branch and work on that.
Then at the repo root run:

```
npm install
```

or

```
yarn 
```

When you have finished, commit your code to your branch, push it to your own repository and open a merge request.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\

### `yarn generate`

Generates the typescript types from the graphql API. You need to set a valid JWT token as env variable.

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

# Hasura config
https://hasura.io/jwt-config/
