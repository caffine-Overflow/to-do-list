📝 To-Do List App

A simple, interactive, and user-friendly To-Do List web application that helps you manage your daily tasks. This app allows users to add tasks, mark them as completed, and delete them when they are no longer needed.

<!-- You can replace this with a screenshot or GIF of your app -->

🚀 Features:

Add Tasks: Easily add new tasks by typing into the input field and clicking the 'Add' button.
Mark as Completed: Click on a task to mark it as completed. Completed tasks are visually distinguished by a strikethrough effect.
Delete Tasks: Remove tasks by clicking the "X" icon next to them.
Responsive Design: Works well on all screen sizes, including mobile devices.

# 🔍🔍 Conceptual Review

- Used the universal selector (\*) to apply styles to all elements on a webpage.
- Applied box-sizing: border-box; to ensure padding and borders are included in the width and height you set for an element.
- Linked the CSS at the top of the page to ensure the page is styled before rendering.
- Linked the JavaScript at the bottom of the page to avoid blocking content loading and to ensure the DOM is fully loaded before script execution.
- Created a .container class and added CSS styles for layout and structure.
- Used vh (viewport height) units to ensure elements always cover the full height of the browser window, even if the content is less.
- Created classes for .to-do-app, h2, and img and added respective CSS.
- Created a .row class for the search bar and search button, along with CSS for styling.
- Created a static task list with <ul><li>Task 1</li></ul>, later dynamically adding and removing tasks using JavaScript.
- Used flexbox to make items flexible, allowing them to grow and shrink as needed (with flex-grow, flex-shrink, and flex-basis properties).
- Used pseudo-elements (::before, ::after, ::first-letter, ::first-line) to style specific elements without adding extra HTML, such as inserting a circle before a task.
- Added functionality to strike through a task when clicked by adding a checked class and applying the corresponding CSS for a strike-through effect.
- Updated the background image with a tick mark on completed tasks and applied relevant CSS.
- Commented out the static <li> elements since they were manually added for testing, and later replaced them dynamically using JavaScript.
- Accessed elements like input-box and list-container in JavaScript to handle input and task list manipulation.
- Added an onclick event to the button in HTML and defined a function in JavaScript to handle adding tasks.
- Added an (x) delete button to each task using a span tag, with Unicode \u00D7 for the x-icon, and styled it using CSS.
- Added an event listener to the listContainer to handle task list interactions (like marking tasks as complete or deleting them).
- Used tagName in JavaScript to check if the clicked element is an LI (list item).
- Created a saveData function to save tasks to localStorage so that the data persists even after a page reload.
- Created a showSavedData function to display tasks from localStorage when the page loads.

🛠️ Tech Stack
HTML5: For structuring the webpage.
CSS3: For styling the user interface.
JavaScript: For functionality, including adding, marking, and deleting tasks.
Font: Poppins: Applied for clean and modern typography.

📸 Screenshots

Here are some screenshots showcasing the app:

Main Interface:
![Screenshot 2024-10-21 131436](https://github.com/user-attachments/assets/403c419b-4d9c-4cb9-83a8-cbce5e34841b)

Adding a Task:

![Screenshot 2024-10-21 131558](https://github.com/user-attachments/assets/012b63fb-b8b1-406d-b009-43d90530c4d2)


Completed and Delete:

![Screenshot 2024-10-21 131624](https://github.com/user-attachments/assets/18af5700-be29-488b-a38c-c56fd3dfb37c)

![Screenshot 2024-10-21 131646](https://github.com/user-attachments/assets/8392b322-177d-46ac-b937-d9ae87dd2164)

🙌 Acknowledgments

Icons: Icons from Font Awesome.
Fonts: Fonts from Google Fonts.
Inspiration: Thanks to all open-source projects that inspire web developers!

🛠️ Author

Afreen
GitHub: caffine-Overflow
