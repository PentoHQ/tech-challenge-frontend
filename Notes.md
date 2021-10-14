# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

- Added package `clsx` to make className composition more readable
  - **TODO**: update the components generator with the new way to combine classes
- Added component `Spinner` to be used as an indeterminate loading indicator
- Replaced 'loading...' text with centered `Spinner` in `SessionList`
- Added component `Backdrop` to be used later with global spinners and modals
- `diffDateStrings` has been renamed to `dateDiff` and now supports both `string` and `Date` object
  - **TODO**: evaluate usage of `momentjs` to avoid reinventing the wheel
- Added component `ElapsedTime` to be used in the `RunningSession`
- Added `Spinner` to `SessionControls` loading
- Added possibility to render `Spinner` inside a `Backdrop` component to block the interactions with the underlying UI
- Added workspace settings for VSCode in order to be aligned with the current project conventions
- Isolated `RunningSession` and `SessionInput` components
- Updated `@storybook/*` packages to solve an issue which was preventing the correct action log when a default is provided
- Added `babel-loader 8.1.0` resolution on package.json to avoid conflicts between latest `storybook` version and `react-scripts` (not so proud of this, but the js world is tough...)
- Added `event: SynteticEvent` parameter to `Backdrop` `onClick` prop
  - **TODO**: update the components generator accordingly
- Changed type of prop `children` in `Spacer` component to `ReactNode` to be more permissive
- Added component `Modal` to be used as container for the edit sessions form
- Implemented global app loading indicator
- Reverted `Spinner` used in `SessionControl`: no need to use the `Backdrop` since there is the global one already
