# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

# Note

- I have never used GraphQL before, but tried to learn basics and implemented update and delete session queries/mutations. So, please consider the weak implementations for GraphQL related code if any.

# Changes

Added `TOKEN` property with bearer value to .env

`Newly added components`:

- CenteredText : created generic component to place the text in center of the container, used at different places
- Timer : to show the actions sessions time (Updated unit tests/specs as per the changes in duration)
- ItemLabel: created generic component to show the session name and duration as a label for all sessions
- SectionHeader: to add header title for both sections(active session and sessions list)
- EditButton : to use under actions section on list page
- DeleteButton : to use under actions section on list page
- EditableInput : to enable inline edit feature for values with cancel and save button inside

`Modified components`

- ListItem : added itemlabel and editable input component (Updated unit tests/specs as well)
- FormRow : updated styling
- MonthChart : renamed this component with ChartContainer and using it as a generic one to show sessions data for month,today and week

`Flow changes`

- I have not done any changes related to workflow.

`Unit Tests / Specs`

- I have tried to verify and update the failing basic unit tests.

`UX changes`

- Have done many changes related to syling. Tried to make the UI simple, elegant and more readable for the user
- Sessions list page: I have created 2 sections for better user experience [active session, all sessions]
- ListItem: Here I have added delete session and edit session button. Apart from that used editableInput when we try to edit session

Planning to add following extra features:

`Overall`

- Add titles to the button or actions everywhere [Done]

`Main Page`

- Placeholder in the session name input [Done]
- Change session name and duration from column view to row view in sessions list page [Done]
- Add `Active Session` label [Done]
- Add titles to the session name and session elapsed time [Done]
- Add title and update styling to the active session row in header [Done]
- Delete session [Done]
- Total sessions/hours count [Done]
- Add section(active session and all session list) headers [Done]
- No sessions data label scenario [Done]

`Stats page`

- Day and week summaries with session count and hours

`Features that can be added in future(or if I had more time) to make this app production ready`

- Use memo to improvise the performance
- We can let user modify the startData and endDate for the session alongside name
- Filters to the sessions list page to help user find the sessions easily
- We can add loader while editing, deleting and creating session
- Right now I have used inline save and cancel button for editable input, we can create new component for them
  for reusability purpose (just like edit, delete, play button)
- Once the app gets bigger we can have different util functions and move all the related functions in there
- All string label and other static values should be moved to constants and use them.
- Should remove all the unwanted props for the newly created components(default props)

# Completed Taks

- [x] Center and style the global app `Loading` indicator;
- [x] Create a Timer component, make it tick and put it in place of the static string that shows the elapsed time of the active session;
- [x] Add proper loading indicators; `Added valid labels`
- [x] Add week and daily summaries. You can do it however you want, don't feel forced to do it as charts, and put them whenever you want; `Added dropdown to shuffle between today, week and month. Used current chart to show all data`
- [x] Add a way to edit an existing session. Again, feel free to do it in any way you prefer: a modal, an edit route, etc. The only requirement is that it should be possible to trigger it by clicking anywhere on the task row;`Added a way to inline edit the session name, also added way to delete the session`
- [x] Make the list of sessions at the main route scrollable without the page body having to scroll as well; `Added vertical scroll`
- [ ] Fix the bug that prevents the `RunningSessionControls` to properly update on changes (switchSession, stopSession, etc.); `Was not able to figure the exact issue/ask mentioned here`
- [x] Improve the application in any way want 😄. `Tried my best to add as many features as possible within 2 days of time`
