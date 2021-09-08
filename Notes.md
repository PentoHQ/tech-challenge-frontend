# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

# Changes

Added `TOKEN` property with bearer value to .env

`Newly added components`:

- CenteredText : created generic component to place the text in center of the container, used at different places
- Timer : to show the actions sessions time
- ItemLabel: created generic component to show the session name and duration as a label for all sessions
- SectionHeader: to add header title for both sections(active session and sessions list)
- EditButton : to use under actions section on list page
- DeleteButton : to use under actions section on list page
- EditableInput : to enable inline edit feature for values with cancel and save button inside

`Modified components`

- ListItem : added itemlabel and editable input component
- FormRow : updated styling

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
- Filter for todays sessions only
- Add section(active session and all session list) headers [Done]
- No sessions data label scenario [Done]

`Stats page`

- Day and week summaries with session count and hours

`Features that can be added to make this app production ready`

- Use memo to improvise the performance
- We can let user modify the startData and endDate for the session alongside name
- Filters to the sessions list page to help user find the sessions seasily
- We can add loader while editing, deleting and creating session
- Right now I have used inline save and cancel button for editable input, we can create new component for them
  for reusability purpose (just like edit, delete, play button)
- Search session by name


