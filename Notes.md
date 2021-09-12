# Notes

## Timer component

- takes a startDate then implements a useEffect hook timer to tick every 1s
- if the timer ticks over 24hrs it conditionally renders a day counter

## Loading indicators

- implemented spinners with adjustible size
- implemented skeletons for the session list

## Summaries

### Daily / Weekly / Monthly

- user is able to select a date range and a grouping mode
- went with grouping data based on its day/week/month
- ran out of time when it came to implementing more interesting reporting features :/

## Sessions

### Editing existing sessions

- when a user hovers on a session in the list an edit icon is rendered, which when clicked toggles edit mode
- the user can also click anywhere before the play button to also enter edit mode
- user is able to edit and delete existing sessions
- implemented a DateTime picker from MaterialUI
- implemented some icon buttons for deleting, closing, and confirming while in edit mode

### `RunningSessionControls` bugfix

- I'd edit the schema to include the start and end times of different periods of time when the session was active so i wouldn't have to alter the startDate attribute in order to accurately track the total time for the session.
- to the start date i've added the difference between now and the old endDate so as to accurately resume the timer
- or perhaps change the schema to include breaks

### Scrolling

- done

## Known issues

- charts render garbage if no data is foudn for the given range
- doesn't add the times for sessions with the same label (not enough time to implement)
- inherent need for quick and dirty solutions that will need refactoring

## Stretch goals

### Pagination

- it would be great to set up a pagianted query

### Reporting

- having some messages like "on average you worked x hours per week this month, and your busiest day was Tuesday", or "your longest day was x when you worked a total of x hours on x tasks", etc.; having some personalized toast messages come up could be enjoyed by the user

### Loading skeletons

- random width of title

### Mobile view

- started implementing basic breakpoints

### Settings

- a dashboard where a user can update their common settings like theme, preferences, etc.

#### - Billing time

- default minimum billing time
- default increment for billing
- rounding up/down

### - Optimistic rendering

- default minimum billing time
- default increment for billing

### Schema changes that would be nice to have (not exhaustive)

- Add concept of breaks on each session
- Add concept of Client and Project on each session to enable grouping of sessions by client/project;
- Add concept of billable/non-billable time to differentiate between clocked hours and billed hours
- Add Session status enum to better categorize session into paid, in progress, invoice sent, etc.
- Add session difficulty rating
- Add session notes
- Add session attachments
- Add session progress

### Invoicing

- The next logical feature to be added should be an invoice generator
