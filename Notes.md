# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

## Done:

- Added package `clsx` to make className composition more readable
- Added component `Spinner` to be used as an indeterminate loading indicator
- Replaced 'loading...' text with centered `Spinner` in `SessionList`
- Added component `Backdrop` to be used later with global spinners and modals
- `diffDateStrings` has been renamed to `dateDiff` and now supports both `string` and `Date` object
- Added component `ElapsedTime` to be used in the `RunningSession`
- Added `Spinner` to `SessionControls` loading
- Added possibility to render `Spinner` inside a `Backdrop` component to block the interactions with the underlying UI
- Added workspace settings for VSCode in order to be aligned with the current project conventions
- Isolated `RunningSession` and `SessionInput` components
- Updated `@storybook/*` packages to solve an issue which was preventing the correct action log when a default is provided
- Added `babel-loader 8.1.0` resolution on package.json to avoid conflicts between latest `storybook` version and `react-scripts` (not so proud of this, but the js world is tough...)
- Added `event: SynteticEvent` parameter to `Backdrop` `onClick` prop
- Changed type of prop `children` in `Spacer` component to `ReactNode` to be more permissive
- Added component `Modal` to be used as container for the edit sessions form
- Implemented global app loading indicator
- Reverted `Spinner` used in `SessionControl`: no need to use the `Backdrop` since there is the global one already
- Enabled devtools connection on `ApolloClient`
- Handled properties `disabled` and `type=datetime-local` on `InputText`
- Added possibility to edit a session
- Added possibility to pass a custom className to `PageBody` component
- Made the session list scrollable
- Added prop to `Spinner` to drive `Backdrop` positioning
- Added day and week summaries charts
- Added `event: SynteticEvent` parameter to `Button` and `IconButton` components `onClick` prop
- Fixed bug which was triggering also the click on the row when starting an existing session
- Added hover effect and pointer cursor on session list items
- Added fallback route
- Added component `Alert` to show feedback to the user
- Replaced simple text with `Alert` to show errors

Unfortunately I didn't undestand the task 'Fix the bug that prevents the `RunningSessionControls` to properly update on changes (switchSession, stopSession, etc.)' since it seems to update properly when the users performs some actions...

## TODOs:

- Update the components generator with the new way to combine classes
- ~~Evaluate usage of `momentjs` to avoid reinventing the wheel~~ There is `date-fns` already
- Update the components generator with the event parameter to the `onClick` callback
- Add section on the README on how to generate a JWT Token to invoke the graphql generator

## Issues:

- Consistency between layout components
- The use of `ReactChild` on layout component is bit limiting sometimes, consider the usage of `ReactNode`
- Props of components created with generator are not needed for every component, probably we can evaluate to generate a subset of them (color, onClick, backgroundColor)

## Suggestions

- Instead of configuring `eslint` on code format, we can evaluate to add a `pre-commit` (maybe with [husky](https://www.npmjs.com/package/husky)) hook which runs `prettier`, so the linter won't bother you during coding but the code will be still properly formatted on the repo
