# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

## Intro

Hey guys! I tried to be consistent in my approach and finish the Sessions page until it had that minimum viable product look & feel 😄 Below this small introduction, you'll find an inbox with the objectives I tried to accomplish. You'll be able to see that some of the tasks you asked for have been completed, while others have not.

## Inbox

- [x] On page reload, the user has to log-in again
- [x] Countdown component
- [x] Improve session interactions (bug on running sessions)
- [x] Make the session list scrollable
- [x] Improve global loading (add a good loading spinner)
- [x] Loading indicator on sessions could use a revamp (maybe add a loading skeleton)
- [x] Create modal when clicking in a session (beware of event propagation in play button)
- [ ] Add weekly and daily summaries
- [ ] Logout feature missing

## Improvements made

- Having to login at each page reload is a pain in the a\*\*. So, I took the liberty of caching the auth tokens in localstorage for a better DX/UX.
- Install `react-content-loader`, a lightweight solution to implement beautiful loading skeletons.
- In order to simplify SessionControls logic, the `useRunningSession` hook is now being used only on the parent component
- Disable play button when switching sessions if the switch is already in progress (avoiding the page to crash with the error)
- `EditSession` modal created to update the session name
- Add tests to Modal

## TODO but ran out of time 😅

- Improve accessibility on Modal component (implement focus trap; focus on input when modal opens and return to the element that opened the modal on close)
- Probably the session list could be sorted in the opposite way, with the most recent sessions on top for a more relevant context
- A delete button next to every session
- Implement a logout button at the top right of the page
- Better management of Apollo through [cache system](https://www.apollographql.com/docs/react/caching/cache-configuration/), instead of refetching queries everytime a mutation is executed
- The Sessions page took all my time, leaving the Stats page with no juicy updates 💔
- Add error state to input fields when trying to submit an empty string (for instance, on EditSession)
- Implement banner notifications to show errors or relevant information to the user

## Observations

- Responsive design was not interpreted as a priority for me. For instance, if we reduce the viewport horizontally on the Sessions page, the loading skeletons don't adjust properly to mobile widths. In order to use the loading skeleton with a dynamic viewport, we can pass the width of the container to the skeleton component and calculate the svg coordinates from it. For this to happen, an event listener on `resize` is needed.
