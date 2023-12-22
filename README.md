# My Word Bank
Author: Adnan Wazwaz

Version: 1.0

Original Date: 2023 December 22

Current Version Date: 2023 December 22

Adnanian Application #4

## Table of Contents

1. [Overview](#overview)

2. [Installation & Execution](#installation--execution)
    1. [Installation](#installation)
    2. [Execution](#execution)
3. [Usage](#usage)
4. [Future Plans](#future-plans)
5. [Credits](#credits)

## Overview

Learning Diary Lite is a web application that allows users to write educational and beneficial content that they consume. It serves as a space for users to explore material that they find interesting to learn (and more importantly, matter much more in life, than the nonsense that is shoved down our throats in the modern education system). With this handy tool, you never have to buy another notebook again. This is a basic application, that doesn't have user profile capabilities yet.

There are several technologies used to create this application: Firstly, the languages chosen were HTML, CSS, and JavaScript, with React.js. This application was written as an APA, with multiple pages being navigated using client side routing. Data is loaded and stored using a db.json file, powered by JSON server.

## Installation & Execution

### Installation

The good news is that installing this application is quite easy. This project is saved in my <a href="https://github.com/adnanian/learning-diary-lite" target="_blank">Flatiron School Phase 1 Project</a>. Please ensure that you have a GitHub account before attempting to install this application onto your local machine. Also ensure that you have Git installed on your local machine as well. If you don't, refer to <a href="https://github.com/git-guides/install-git" target="_blank">this help guide here.</a>

Once you have ensured the above two checks have passed, then all that's left is for you to fork and clone this repository. For those who are not as familiar with GitHub, here is a quick <a href="https://www.geeksforgeeks.org/difference-between-fork-and-clone-in-github/" target="_blank">GeeksForGeeks guide on forking and cloning</a>.

### Execution

To run the project, <b>open up your terminal</b>. Then, navigate to the directory where you have the repository cloned, and open the project. I stronly recommend opening this project with <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a>, but you may use any other application (such as Notepad++) of your choosing as long as you're able to open up the HTML file on your browser. <b>DO NOT CLOSE THE TERMINAL YET!</b>

Once the project is opened, you will need to ensure that you have that you have the JSON server installed onto your machine. If you don't, then type in the following command onto your terminal, and then press <strong>ENTER</strong>: <code>npm install -g json-server</code>

Once you have ensured that the JSON server is installed, you'll have to run it in the directory where you cloned the repository. Enter this command in that directory: <code>npm run server</code>

After that, run the application, using <code>npm run</code>. If asked to run on a different port, type "y" for "yes".

If you see the following page open up on your browser, then you have followed all instructions correctly:
![alt Successfully loaded application](./images/My%20Word%20Bank%20-%20Successfully%20Launched.png)

## Usage

Use the drop down to select different notebooks of educational material. Then click the button: "GO" to load all the information.

Modify the notes as you wish, and then click "Save" on the bottom. This will update the information stored in the json file and reload everything.

Add new reflection questions or notes using their appropriate forms located on the right side of the home page.

On the Learning Wishlist page, use the form to add educational content that you would like to consume in the future.

The last page is the about section, which basically describes what the application does.

## Future Plans
Adding login functionality.
Deploying the application.

## Credits
MIT License

Copyright (c) 2023 Adnan Wazwaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.