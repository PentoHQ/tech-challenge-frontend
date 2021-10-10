# Notes

✅ **[COMPLETED TASKS]**

- Center and style the global app Loading indicator
- Create a Timer component, make it tick and put it in place of the static string that shows the elapsed time of the active session
- Add proper loading indicators
- Make the list of sessions at the main route scrollable without the page body having to scroll as well
- Fix the bug that prevents the RunningSessionControls to properly update on changes (switchSession, stopSession, etc.)

⚡️ **[IMPROVED]**

- Refactor routing logic to separate protected and unprotected routes
- Implement lazy loading functionality to load each page's chunk at load time
- Improve Authentication logic
- Create handleError utility function for displaying proper error messages to the user
- Refactor `InputText` component to be more generic
- Separate `NewSessionForm` component and use `react-hook-form` for handling form state
- Refactor `SessionControls` component and it's `runningState` component
- Add logout functionality

---

Here's the attached screenshot of Chrome's Lighthouse report, before and after the changes:

**_Before_**

![Chrome's Lighthouse report, before the changes](https://user-images.githubusercontent.com/53334880/136698364-50a26155-0ca0-4045-95dd-a067ee656d56.png)

**_After_**

![Chrome's Lighthouse report, after the changes](https://user-images.githubusercontent.com/53334880/136698557-90b37035-707b-4250-85a7-927f3787fc7d.png)
