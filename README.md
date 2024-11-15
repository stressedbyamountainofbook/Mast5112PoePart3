# Mast5112PoePart3
Changelog
Initial Setup and Implementation
Date:06 November 2024

Changes:

Project Initialization: I began the development of this project 
by setting up the basic React Native app with Expo.
This included installing necessary dependencies and configuring the development environment 
using Visual Studio Code on my Mac. I chose Expo for ease of use in cross-platform app development.
The initial setup also involved creating the main directory structure, which will be expanded as the project grows.

Folder Structure Setup: A clear folder structure was created from the start. The key directories include:

assets/ for static assets like images and mock data,
components/ for reusable components like buttons and input fields,
screens for the main app screens such as the home page, menu pages, and edit pages were and still are contained in the root folder
types/ for TypeScript types and interfaces to ensure type safety across the app.
TypeScript Configuration: I made sure that TypeScript was correctly set up from the beginning to enhance
code readability and maintainability. This also allowed me to catch errors early during the development process.
I configured TypeScript to enforce strict types, ensuring that the app’s data structures were always validated.

Navigation Setup: To handle navigation between different screens, I integrated React Navigation using a Stack Navigator.
This allowed me to easily manage navigation between multiple pages, including the home screen, menu page, 
and various edit and add item pages. The navigation setup also included passing data between pages like 
the list of menu items and cart details using parameters.

 Menu Management and Item Editing
Date:07 November 2024

Changes:

Menu List Implementation: One of the core features I implemented was the menu list page (EditMenuListPage).
This page displays a list of menu items with details such as item name, description, price, and image.
The data for the menu items was initially populated using a mock file (MenuItems), 
and the list was displayed dynamically using the FlatList component. I used TypeScript interfaces (MenuItem)
to define the shape of the data for consistency.

Editing Menu Items: I implemented a basic functionality that allows users to navigate to an "EditMenuItemPage" 
to edit specific menu items. However, I initially didn't pass any parameters between pages.
The focus here was to set up the navigation structure and allow the user to select a menu item for editing. 
Although the actual editing functionality is still pending, this was a key step in building the app's flow.

Removing Menu Items: I added a feature to remove menu items from the list. This was done using a confirmation alert 
when the user attempts to delete an item. Upon confirmation, the item is removed from the list by filtering the menu items based on their ID.
This operation directly updates the menuItems state, allowing for real-time changes.

State Management for Menu Items: The state for managing menu items was initialized using the useState hook,
and updates were made by filtering or adding items based on user interactions. The setMenuItems function was passed 
to relevant components to ensure that the list of items was always up to date.

Adding New Menu Items and Navigation Enhancements
Date:08 November 2024

Changes:

Add New Menu Item: I added a feature to add new menu items to the list. This functionality allows users to input a new menu
item’s details (excluding the item’s ID, which is auto-generated) and add it to the list. This was done by navigating to an 
AddMenuPage where the user can input item details, and the addMenuItem function ensures that the new item is appended to the existing list.

TypeScript Navigation Enhancements: During development, I ran into type-related issues when navigating between pages. 
To fix this, I updated the RootStackParamList type to correctly define the parameters for each screen.
I passed both menuItems and setMenuItems to the EditMenuListPage so that the screen could manage and display the list of menu items.
This ensured that the navigation was type-safe and that data passed between screens was consistent.

TypeScript Improvements for Parameter Passing: I refactored the navigation-related code to ensure that parameters such as menuItems
and setMenuItems were properly passed when navigating to the AddMenuPage. I used Omit<MenuItem, 'id'> to ensure the new item added
had the correct structure but without the id property, which is auto-generated.

 Git Integration and Repository Setup
Date: 11 November 2024

Changes:

Git Integration: As the development of the app progressed, I decided to integrate Git for version control.
I initialized a Git repository in the project folder and created a .gitignore file to ensure that sensitive or
unnecessary files (such as node_modules/ and package-lock.json) were excluded from commits. This helped keep the repository 
clean and organized, preventing issues with large or unwanted files being tracked.

Commit and Push to GitHub: After initializing the repository, I connected it to a new GitHub repository (Mast5112PoePart3).
I added all project files to Git, committed the changes with the message "Initial commit with all code," and pushed the code to GitHub.
This made it easier to track progress, collaborate, and share the project with others. 
I also ensured the repository was ready for future updates.

Handling Line Endings Warnings: During my initial commit, I encountered warnings regarding line endings (LF vs. CRLF).
These warnings are common when working across different operating systems. 
I ensured that I configured Git to handle these line endings properly, 
preventing any issues related to inconsistent line endings when pushing and pulling code.


Date: 11 November 2024

Changes:

Fixing TypeScript Navigation Issues: One of the challenges I encountered was a TypeScript error when navigating between pages. 
The error occurred because I was passing a string ('EditMenuItemPage') to the navigation.navigate() function, 
while TypeScript expected a specific structure for the navigation parameters. I corrected this by ensuring the navigation parameters 
and type definitions were aligned. This fixed the type errors and ensured smooth navigation between pages.

Refactoring Code for Clarity and Maintainability: As the project grew, I refactored some of the existing code
for better readability and maintainability. I ensured that each component had a clear and single responsibility. 
For instance, I abstracted the logic for rendering individual menu items into a reusable MenuItemCard component, 
which helped reduce redundancy and improved the structure of the code.

Optimizing State Management: I also optimized the state management for menuItems by introducing more efficient ways to update
and manage state using useState and useEffect. This ensured that the app was more responsive and that updates to the menu list were
reflected in the UI immediately.

