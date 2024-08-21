Vrit Technology React Tasks
Set A
Task 1: Accordion Component

Objective:
Build a simple accordion component.

Requirements:

Accordion Items: Create at least three accordion items, each with a title and hidden content.
Toggle Content: Clicking on the title of an accordion item should toggle its content visibility.
Only One Open: Ensure that only one accordion item is open at a time.
Task 2: Search Filter Component (Take-Home)

Objective:
Create a search filter component that filters a list of items based on user input.

Requirements:

Search Input: Add a text input for users to enter their search query.
Filter List: Display a list of items that match the search query.
Case Insensitive: Ensure the search is case insensitive.
Task 3: Implementing and Testing Custom Middleware in Next.js (Take-Home)

Objective:
Create and test custom middleware for a Next.js application.

Requirements:

Middleware Creation: Implement custom middleware that checks if a user is authenticated before allowing access to certain pages (e.g., redirect to login if not authenticated).
Middleware Application: Apply the middleware to a specific route or set of routes.
Testing: Write a test to ensure the middleware correctly redirects unauthenticated users.
Task 4: Good Subarrays Count (Take-Home)

Objective:
Given an array nums and an integer K, return the number of good subarrays of nums.

Requirements:

A good subarray is one that contains exactly K different integers.
Task 5: Count of Smaller Elements to the Right (Take-Home)

Objective:
Given an integer array nums, return a new counts array where counts[i] is the number of smaller elements to the right of nums[i].

Set B
Task 1: Modal Component with Close Functionality Using URL Search Params

Objective:
Create a simple modal component that can be opened and closed.

Requirements:

Open Modal: Add a button that opens the modal when clicked.
Close Modal: Include a close button inside the modal that closes it.
Overlay Click: Allow the modal to close when clicking outside the modal content (on the overlay).
Task 2: Implement and Test a React Component with API Integration (Take-Home)

Objective:
Create a React component that fetches and displays data from an API, and write tests to ensure its correctness.

Requirements:

Data Fetching Component: Implement a React component that fetches a list of users from a public API (e.g., https://jsonplaceholder.typicode.com/users) and displays the user names in a list.
Error Handling: Add basic error handling to the component, displaying an error message if the API request fails.
Testing with Jest and React Testing Library:
Write unit tests to ensure that the component renders correctly when data is fetched successfully.
Mock the API request and test how the component handles loading states and errors.
Test that the error message is displayed when the API call fails.
Task 3: Longest Chain of Consecutive Numbers (Take-Home)

Objective:
Write a function that takes an array of positive integers and returns the length of the longest chain of consecutive numbers.

Requirements:

A chain is defined as a sequence of numbers in the array where each number is exactly one more than the previous number in the sequence, and the sequence can be in any order in the array.
Explain the time complexity and space complexity of the solution.
Task 4: Implement Authentication with Protected Routes in Next.js 14 (Take-Home)

Objective:
Set up authentication in a Next.js 14 application and protect certain routes, demonstrating an understanding of both client-side and server-side rendering.

Requirements:

Login Page: Create a simple login page where users can enter a username and password. Authentication logic can be basic (e.g., match against a hardcoded user).
Protected Route: Implement a protected dashboard route that only authenticated users can access. If a user is not authenticated, they should be redirected to the login page.
Session Handling: Use cookies or JWTs to manage the user's session, ensuring that the authentication state persists across page reloads.
Testing:
Write tests to verify that unauthenticated users are redirected to the login page when trying to access the protected route.
Test the login process to ensure that users are properly authenticated and redirected to the dashboard upon successful login.
Task 5: Count of Smaller Elements to the Right (Take-Home)

Objective:
Given an integer array nums, return a new counts array where counts[i] is the number of smaller elements to the right of nums[i].







