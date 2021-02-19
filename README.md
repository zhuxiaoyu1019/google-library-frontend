# Google Library Frontend

![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

This is a React-based Google Books Search app built with Node, Express and MongoDB. The application create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches.

## Table of Contents

- [Deployed Application](#Deployed-Application)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Deployed Application

[Google Library]()

## Usage

![Google Library demo]()

- This application has 2 pages:

  - Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  - Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

## Installation

To install necessary dependencies, run the following command:

      npm i

## Contributing

      folk / pull

## Questions

If you have any questions about the repo, open an issue or contact me directly @[xiaoyz28@uw.edu](xiaoyz28@uw.edu). You can find more of my work at [zhuxiaoyu1019](https://github.com/zhuxiaoyu1019).

## License

Copyright (c) Rita Z. All rights reserved.

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

### Bonus Live Updates to Saved Books

- Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.

  - Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.

  - [Socket.io NPM package](https://www.npmjs.com/package/socket.io)
