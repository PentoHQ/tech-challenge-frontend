# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

## Inbox

- [x] On page reload, the user has to log-in again
- [x] Countdown component
- [ ] Improve session interactions
- [ ] Make the session list scrollable
- [ ] Improve global loading (add a good loading spinner)
- [ ] Loading indicator on sessions could use a revamp (maybe add a loading skeleton)
- [ ] Add weekly and daily summaries
- [ ] Create modal when clicking in a session (beware of event propagation in play button)
- [ ] Size attribute doesn't seem to work in any component (probably leftover mistake from creating generic components)
- [ ] Logout feature missing

## Issues found

- Having to login at each page reload is a pain in the a\*\*. So, I took the liberty of caching the auth tokens in localstorage for a better DX/UX.
- Some tests seem to expect enzyme but the project is not prepared for it. I used @testing-library for the components created for this project. Overall, the project could use some more unit and e2e tests.

## Improvements

- Create the CountDown timer (it actually counts up) and removed the `startDate` dependency, since this prop was, in my opinion, hampering the component logic in `RunningSession`.
