# Notes

Use this file to document whatever you may want.
Write down development notes, explanations of why you made certain decisions, problems that you found, anything!
Feel free to structure it anyway you want, with as many sections as you wish, make it yours!
But don't forget to commit it with the rest of your code 😄

# general:

for stylying I added a scss file for each component that required my intervention
for the loading indicators I wrote a Loader component and reused everywhere

# Center and style the global app indicator;

Did with flexbox

# Create a Timer component

I made use of a setInterval inside useEffect

# Add week and daily summaries

I don't know if it was am unmentioned bug, but before doing that I fixed the useMonthChat because was displaying the weeks of the year, no the months
Then I duplicated the same logic for weeks and days. I also moved all the hooks inside a hook folder for better organization of code

# Add a way to edit an existing session

For this one i frankly didn't find the schema for mutating a running session. If I've found i would just added a mutation in useRunningSession and then call it inide a Modal for editing the session name

# Make the list of sessions

I just made use of overflow, but I guess that if we plan to have very large lists we could use something like react-virtualized for performances

# SessionControls

I removed the duplicates of useRunningSession because they were new instances and the data was not in sync between the components.
I just left the one in main component and passed props to the others
I also added an error message as validation of the session input
