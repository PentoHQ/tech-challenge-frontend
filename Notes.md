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
