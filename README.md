# Users List with Pagination

## Description
This React application fetches and displays a list of users from the ReqRes API with pagination and user deletion functionality. The UI is built using Radix UI components for a modern and interactive design.

## Features
- Fetches user data from `https://reqres.in/api/users`
- Displays user information in a table format
- Supports pagination with "Previous" and "Next" buttons
- Allows users to be deleted from the list with a confirmation dialog

## Technologies Used
- React
- Axios (for API requests)
- Radix UI (for UI components)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/users-list-pagination.git
   ```
2. Navigate to the project directory:
   ```sh
   cd users-list-pagination
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the application:
   ```sh
   npm start
   ```
2. The application will open in your browser at `http://localhost:3000`.
3. Navigate through the user list using pagination buttons.
4. Click the "Delete" button to remove a user (with a confirmation prompt).

index.js (Renders the application)
```

## API Details
- `GET https://reqres.in/api/users?page={page}` - Fetches user data for the given page.
- `DELETE https://reqres.in/api/users/{id}` - Simulates user deletion.

## Contributing
Pull requests are welcome! Please follow the standard guidelines:
- Fork the repository
- Create a new branch (`feature-xyz`)
- Commit your changes
- Push the branch and submit a PR
