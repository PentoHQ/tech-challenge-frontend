# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

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
- Filters to the sessions list page to help user find the sessions seasily
- We can add loader while editing, deleting and creating session
- Right now I have used inline save and cancel button for editable input, we can create new component for them
  for reusability purpose (just like edit, delete, play button)
- Search sessions by name
- Once the app gets bigger we can have different util functions and move all the related functions in there
