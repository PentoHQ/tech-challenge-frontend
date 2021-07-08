# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

1. Change the project's structure and made it better to understand and easier for further development.

2. Lint the project.

3. Create a customizable loading component and center and style the global app `Loading` indicator. From UX perspective, it is better to load both SessionControls and SessionsList then display them so I Removed Loading from SessionControls and check it in SessionsList.

4. Create a Timer components.

5. Create An Error Component to handle all error messages.

6. Implement editing an existing session using a modal; Change the time and date format to make it better for users. Validate fields before submitting.

7. Create modal component with custom footer, body, and title for further development.

8. Make the sessions list scrollable by adding a new props to list.

9. Add daily summaries to Stats page using query params.

10. Add a reusable navigation bar for handling route changes.

11. Improve the UI of list items.

12. Add formik to handle form; Tracking the value with no need to a lot of states to store the form field value, handling validation, handling form submit, access to form values in different components by useFormContext without passing props between components.

13. improve the UI of charts; Remove the Legend, it makes the page messy, change font size.

14. fix unit tests.

15. Handle clicking on play button without opening the edit modal.
