# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

> The only requirement is that it should be possible to trigger it by clicking anywhere on the task row;

Click on any row will trigger an edit mode, however click on play/delete buttons will start the session, and not trigger the edit mode.

# Features added:

- Deleting session: during my testing, I ended up with a lot of sessions, so I decided to add button to delete session.
- Fixed test (using react-testing-library)
- Added typescript script to detect typescript errors

# Possibles improvements

- [ ] Finish the requirements 😃
- [ ] Handling errors more gracefully (retry, user friendly error messages)
- [ ] Proper feedback to users while loading data, handling user input
- [ ] Potential memory leak with state update after component is unmounted
- [ ] Fix storybook for list
