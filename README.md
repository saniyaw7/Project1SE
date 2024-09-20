# Project 01 Retrospective and Overview

## Overview

The fitness app integrates multiple functionalities to provide users with a comprehensive platform for managing workouts, viewing exercise information, and tracking nutritional intake. The app uses the [WGER API](https://wger.de/en/software/api) for exercise and nutrition data, and it features Firebase Authentication for user registration and login.

### Key Features and Activities:
1. **Ingredient Search (IngredientSearch.js)**:
   - Users can search for ingredients using the WGER API and view detailed nutritional information, including calories, protein, fat, and carbohydrates.
2. **Exercise Information and Search**:
   - **MuscleScreen.js**: Displays exercises filtered by muscle groups.
   - **EquipmentScreen.js**: Displays exercises based on available equipment.
   - **ExerciseScreen.js**: A general screen for displaying a list of exercises.
   - **MuscleInfo.js**: Provides information about the muscles targeted by specific exercises.
   - **RestApi.js**: Handles API calls related to exercises and nutritional data.
3. **Exercise Selection and Scheduling**:
   - **ExerciseSelection.js**: Allows users to choose exercises and add them to their workout list.
   - **ScheduleExercise.js**: Enables users to schedule selected exercises with a date and time.
   - **ViewExerciseAppointments.js**: Displays a list of scheduled exercises, allowing users to view and manage their workout appointments.
4. **Comments on Exercises**:
   - **ExerciseCommentScreen.js**: Allows users to add, view, and upvote/downvote comments on exercises.
   - **ViewAllComments.js**: Displays all comments related to an exercise, with sorting options for most recent or most upvoted comments.
5. **User Authentication and Registration**:
   - **LoginScreen.js**: Allows users to log into their account using Firebase Authentication.
   - **RegisterScreen.js**: Allows new users to register and create accounts.
   - **WelcomeMessage.js**: A custom welcome message that enhances the user experience on the login and registration screens.

6. **Home and Navigation**:
   - **HomeScreen.js**: Acts as the main landing page after login, allowing users to navigate to different features like exercise search and scheduling.
7. **Logo and Branding**:
   - **Logo.js**: A reusable logo component used across multiple screens to maintain branding consistency.
8. **Exercise Details**:
   - **IngredientDetail.js**: Shows detailed nutritional information for a selected ingredient.

### Summary of App Flow:
- **Login & Registration**: Users authenticate using Firebase, and new users can register directly within the app.
- **Exercise and Ingredient Search**: Users can search for exercises by muscle group or equipment and search for ingredients to view their nutritional information.
- **Exercise Scheduling**: Users can select and schedule exercises, which are saved and managed using AsyncStorage.
- **Comments**: Users can interact with other users' exercise comments, adding their own or voting on existing ones.
- **Home & Navigation**: The app provides an intuitive navigation flow, with a consistent logo and user-friendly layout.




## Introduction

- How was communication managed
  - We communicated through Slack
- How many stories/issues were initially considered
  - We had originally considered 12 stories, 4 each week
- How many stories/issues were completed
  - We completed _ stories/issues

## Team Retrospective
### Erik Govea-Lopez
1. Erik's pull requests are [here](https://github.com/saniyaw7/Project1SE/pulls?q=is%3Apr+is%3Aclosed)
2. Erik's github issues are [here](https://github.com/saniyaw7/Project1SE/issues)
### What was your role / which stories did you work on
My role was integrator, but there wasn't as many pull requests as we had hoped. I worked on implementing the search by muscle and getting the workout based off of that muscle.
- What was the biggest challenge?
  - My biggest challenge was trying to get expo running 
- Why was it a challenge?
  - The reason it was so challenging was that I would follow the instructions and spend hours trying to run it but would constantly get errors.
- Favorite / most interesting part of this project
  - My favorite part of the project was being able to run the app on my phone as it felt like progress was actually being made.
- If you could do it over, what would you change?
  - Communication and having a schedule planned out more throughly.
- What is the most valuable thing you learned?
  - The most valuable thing that I learned was how to use Github and the terminal as they are vital.

### Alvaro De La Cruz
1. Alvaro's pull requests are [here]()
2. Alvaro's github issues are [here]()
### What was your role / which stories did you work on
- What was the biggest challenge?
- Why was it a challenge?
- Favorite / most interesting part of this project
- If you could do it over, what would you change?
- What is the most valuable thing you learned?

### Peter Mitchell

1. Peter's pull requests are [here](https://github.com/saniyaw7/Project1SE/pulls?q=is%3Apr+author%3AMitPete+is%3Aclosed).
2. Peter's GitHub issues are [here](https://github.com/saniyaw7/Project1SE/issues/created_by/MitPete).
### What was your role / which stories did you work on?
I worked on various user stories, including:
- Ingredient Search and Ingredient Detail Screen, which allowed users to search for ingredients and view detailed nutritional information.
- Firebase Authentication for login and registration with validation and navigation management.
- Schedule Exercise functionality to enable users to select exercises and schedule them.
- Exercise Appointments feature to manage and view scheduled exercises.
- Comment sections for exercises, allowing users to view, add, and upvote/downvote comments.
- Unit testing for several components like `ScheduleExercise`, `ViewExerciseAppointments`, `LoginScreen`, and `RegisterScreen`, using Jest and mock AsyncStorage.
- Created and implemented components such as the `Logo` component and `ViewExerciseAppointments` for managing exercise appointments.
### What was the biggest challenge?
The biggest challenge was implementing the `ExerciseCommentScreen` component with upvote and downvote functionality and ensuring that both local and global data was consistently synchronized across the app.
### Why was it a challenge?
It was challenging because managing comments across both the local exercise-specific storage and global app storage required careful handling of data consistency, especially when updating votes for specific comments. Ensuring that changes were reflected correctly while using AsyncStorage and React hooks required extra attention to detail.
### Favorite / most interesting part of this project?
The most interesting part of the project was working on the Schedule Exercise feature and integrating AsyncStorage to store the user’s selected exercises and schedule them. I enjoyed seeing how the app could store this data and retrieve it seamlessly, providing a great user experience.
### If you could do it over, what would you change?
If I could do it over, I would focus on setting up more efficient data management early on, possibly by integrating a state management library like Redux for handling the app's state across different components. This could have made syncing data easier and reduced the complexity of managing local storage manually.
### What is the most valuable thing you learned?
The most valuable thing I learned was how to manage persistent storage in React Native using AsyncStorage and how to write effective unit tests for components that rely on data storage. These skills will be incredibly useful for future projects where I need to handle user data across sessions.



### Saniya Wairkar
1. Saniya's pull requests are [here]()
2. Saniya's github issues are [here]()
### What was your role / which stories did you work on
- What was the biggest challenge?
- Why was it a challenge?
- Favorite / most interesting part of this project
- If you could do it over, what would you change?
- What is the most valuable thing you learned?


## Conclusion
- **How successful was the project?**
  The project was successful in creating a functional fitness app with multiple integrated features, including exercise scheduling, commenting, ingredient searches, and user authentication. The app's robust design allowed users to manage and schedule workouts effectively while providing valuable nutritional information.
- **What was the largest victory?**
  The largest victory was the seamless integration of exercise scheduling, user authentication, and comments, which allowed users to not only manage their workouts but also engage with the fitness community through feedback and discussions on exercises.
- **Final assessment of the project**:
  The final product provides a solid user experience with many useful features. While the app effectively uses React Native, AsyncStorage, and Firebase, improvements could be made in optimizing the state management and enhancing performance. Overall, it meets the goals set out and provides a scalable solution for users to track workouts and nutritional data.
