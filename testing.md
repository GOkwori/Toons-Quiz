# Toons Quiz -  Testing 

![Toons shown on a variety of screen sizes](documentation/page-layout/welcome-page.PNG)

Visit the deployed site: [Toons Quiz](https://gokwori.github.io/Toons-Quiz/)

- - -

## CONTENTS

* [Feature Testing](#feature-testing)
* [User Story Testing](#user-story-testing)
* [Browser Compatibility](#browser-compatibility)
* [Responsiveness Testing](#responsiveness-testing)
* [Code Validation](#code-validation)
* [Lighthouse](#lighthouse)

Testing occurred continuously throughout the entire development process. I employed Chrome Developer Tools extensively during the build to identify and resolve issues promptly.

Throughout the development phase, I incorporated Google Developer Tools to verify the proper functioning of elements and to aid in diagnosing problems when they arose.

The console within the developer tools was instrumental in dissecting and validating multiple sections of JavaScript code. It served not only to confirm the functionality of the code but also to troubleshoot any encountered issues.

To guarantee responsiveness across diverse screen sizes and devices, I meticulously reviewed each page using both Google Chrome Developer Tools and the Microsoft Edge Inspector tool.

- - -

## Feature Testing

I tested each feature of my website to make sure that user interactions, forms, navigation, and any implemented functionalities work seamlessly. This involves checking the accuracy, reliability, and user-friendliness of each feature.

### `Home Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify the title bar functionality | Title Bar | Load the game <br> Click on the title bar | The home page refreshes/reloads | The home page refreshes/reloads | Pass | ![Title Bar](documentation/features/site-title.PNG) |
| Verify the How to Play button functionality | How to Play Button | Load the game <br> Click on How to Play button | The buttton directs to the correct page | The buttton directs to the correct page | Pass |![How to Play](testing/features-testing/home-page/how-to-play-btn.PNG) <br> ![How to Play](testing/features-testing/how-to-play/how-to-play-page.PNG) |
| Verify the High Score button functionality | High Score Button | Load the game <br> Click on High Score button | The buttton directs to the correct page | The buttton directs to the correct page | Pass | ![High Score](testing/features-testing/home-page/high-score-btn.PNG) <br> ![High Score](testing/features-testing/high-score/high-score-page.PNG) |
| Verify the Play Now button functionality | Play Now Button | Load the game <br> Click on Play Now button | The buttton directs to the correct page | The buttton directs to the correct page | Pass | ![Play Now](testing/features-testing/home-page/play-now-btn.PNG) <br> ![Play Now](testing/features-testing/difficulty/difficulty-level-page.PNG) |
| Verify the Settings button functionality | Settings Button | Load the game <br> Click on Settings button | The buttton directs to the correct page | The buttton directs to the correct page | Pass | ![Settings](testing/features-testing/home-page/settings-btn.PNG) <br> ![Settings](testing/features-testing/settings/settings-page.PNG) |
| Verify the hover effect functionality | Title Bar | Load the game <br> Hover the mouse on the title bar | The title bar hovers | The title bar hovers | Pass | ![Title Bar](testing/features-testing/home-page/home-page.png) <br> ![Title Bar](testing/features-testing/home-page/home-title-hover.png) |
| | How to Play Button | Load the game <br> Hover the mouse on the How to Play button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button  | Pass |![How to play](testing/features-testing/home-page/how-to-play-btn.PNG) <br> ![How to Play](testing/features-testing/home-page/how-to-play-btn-hover.PNG) |
|  | High Score Button | Load the game <br> Hover the mouse on the High Score button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button | Pass | ![High Score](testing/features-testing/home-page/high-score-btn.PNG) <br> ![High Score](testing/features-testing/home-page/high-score-btn-hover.png) |
|  | Play Now Button | Load the game <br> Hover the mouse on the Play Now button | The buttton hovers and transforms into a trasparent button | The buttton hovers and transforms into a trasparent button | Pass | ![Play Now](testing/features-testing/home-page/play-now-btn.PNG) <br> ![Play Now](testing/features-testing/home-page/play-now-btn-hover.png) |
|  | Settings Button | Load the game <br> Hover the mouse on the Settings button | The buttton hovers | The buttton hovers and transforms into a trasparent button| Pass | ![Settings](testing/features-testing/home-page/settings-btn.PNG) <br> ![Settings](testing/features-testing/home-page/settings-btn-hover.png) |

### `How To Play Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify the title bar functionality | Title Bar | Load the game <br> Navigate to the How to Play page <br> Click on the title bar | Redirected to the home page | Redirected to the home page | Pass | ![How to Play](testing/features-testing/how-to-play/how-to-play-page.PNG) <br> ![Home Page](testing/features-testing/home-page/home-page.png) |
| Verify the Power button functionality | Power Button | Load the game <br> Navigate to the How to play Section <br> Click the Power button | Redirected to the home page | Redirected to the home page | Pass |![How to Play](testing/features-testing/how-to-play/how-to-play-power-btn.png) <br> ![Home Page](testing/features-testing/home-page/home-page.png) |
| Verify the hover effect functionality | Title Bar | Load the game <br> Navigate to the How to Play section <br> Hover the mouse on the title bar | The title bar hovers | The title bar hovers | Pass | ![How to Play](testing/features-testing/how-to-play/how-to-play-page.PNG) <br> ![Title Bar](testing/features-testing/how-to-play/how-to-play-title-hover.png) |
| | Power Button | Load the game <br> Navigate to the How to Play page <br> Hover the mouse on the Power button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button  | Pass |![How to Play](testing/features-testing/how-to-play/how-to-play-power-btn.png) <br> ![How to Play](testing/features-testing/how-to-play/how-to-play-power-btn-hover.png) |

### `High Score Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify the title bar functionality | Title Bar | Navigate to the high score page <br> Click on the title bar | Redirected to the home page | Redirected to the home page | Pass | ![High Score](testing/features-testing/high-score/high-score-page.PNG) <br> ![Home Page](testing/features-testing/home-page/home-page.png) |
| Verify the Power button functionality | Power Button | Load the game <br> Navigate to the High Score Page <br> Click the Power button | Redirected to the home page | Redirected to the home page | Pass |![High Score](testing/features-testing/high-score/high-score-power.PNG) <br> ![Home Page](testing/features-testing/home-page/home-page.png) |
| Verify the Reset Score button functionality | Reset Score Button | Load the game <br> Navigate to the High Score Page <br> Click the Reset button <br> Navigate to the prompt to clear Score <br> Click Ok | Clears High Score | Cleared High Score | Pass |![High Score](testing/features-testing/high-score/high-score-reset.PNG) <br> ![Home Page](testing/features-testing/high-score/high-score-reset-prompt.PNG) <br> ![High Score](testing/features-testing/high-score/high-score-reset-prompt-ok.PNG) <br> ![High Score](testing/features-testing/high-score/high-score-reset-prompt-cleared.png)|
| Verify the hover effect functionality | Title Bar | Load the game <br> Navigate to the High Score Page <br> Hover the mouse on the title bar | The title bar hovers | The title bar hovers | Pass | ![Title Bar](testing/features-testing/high-score/high-score-page.PNG) <br> ![Title Bar](testing/features-testing/high-score/high-score-title-hover.png) |
| | Power Button | Load the game <br> Navigate to the High Score page <br> Hover the mouse on the Power button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button  | Pass |![High Score](testing/features-testing/high-score/high-score-power.PNG) <br> ![High Score](testing/features-testing/high-score/high-score-power-hover.PNG) |
| | Reset Button | Load the game <br> Navigate to the High Score page <br> Hover the mouse on the Reset button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button  | Pass |![High Score](testing/features-testing/high-score/high-score-reset.PNG) <br> ![High Score](testing/features-testing/high-score/high-score-reset-hover.PNG) |

### `Difficulty Level Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify the title bar functionality | Title Bar | Navigate to the Difficulty Level Page <br> Click on the title bar | Redirected to the home page | Redirected to the home page | Pass | ![Difficulty Level](testing/features-testing/difficulty/difficulty-level-page.PNG) <br> ![Home Page](testing/features-testing/home-page/home-page.png)|
| Verify the Power button functionality | Power Button | Load the game <br> Navigate to the Difficulty Level Page <br> Click the Power button | Redirected to the home page | Redirected to the home page | Pass | ![Power Button](testing/features-testing/difficulty/difficulty-level-power-btn.PNG) <br> ![Home Page](testing/features-testing/home-page/home-page.png) |
| Verify difficulty selection functionality | Difficulty Buttons | Load the game <br> Navigate to the Difficulty Level Page <br> Select a difficulty level (Easy, Medium, Hard) | Redirected to the game page with selected difficulty | Redirected to the game page with selected difficulty | Pass | ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-easy-btn.PNG) <br> ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-medium-btn.PNG) <br> ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-hard-btn.PNG) <br> ![GamePage](testing/features-testing/game-page/game-page.png)|
| Verify the hover effect functionality on difficulty buttons | Difficulty Buttons | Load the game <br> Navigate to the Difficulty Level Page <br> Hover the mouse on each difficulty button (Easy, Medium, Hard) | The button hovers and transforms into a transparent button | The button hovers and transforms into a transparent button | Pass | ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-easy-btn.PNG) <br> ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-easy-btn-hover.png) <br> ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-medium-btn.PNG) <br> ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-medium-btn-hover.png) <br> ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-hard-btn.PNG) <br> ![Difficulty Selection](testing/features-testing/difficulty/difficulty-level-hard-btn-hover.png) |

### `Game Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify the title bar functionality | Title Bar | Navigate to the Game Page <br> Click on the title bar | Redirected to the home page | Redirected to the home page | Pass | ![Game Page](testing/features-testing/game-page/game-page.png) <br> ![Home Page](testing/features-testing/home-page/home-page.png)|
| Verify the Power button functionality | Power Button | Load the game <br> Navigate to the Game Page <br> Click the Power button | Redirected to the exit game page | Redirected to the exit game page | Pass | ![Power Button](testing/features-testing/game-page/game-page-power-btn.PNG) <br> ![Exit Page](testing/features-testing/exit-game/exit-game-page.png) |
| Verify question display | Question Display | Start the game <br> Observe the question area | A new question is displayed with multiple-choice answers | A new question is displayed with multiple-choice answers | Pass | ![Question Display](testing/features-testing/game-page/game-page-main-question.PNG)|
| Verify answer selection and feedback | Answer Selection | Choose an answer <br> Observe feedback | Correct answers turn green, incorrect answers turn red | Correct answers turn green, incorrect answers turn red | Pass | ![Answer Feedback](testing/features-testing/game-page/game-page-feedback-response.png) |
| Verify the Next button functionality | Next Button | Select an answer <br> Click the Next button | Displays the next question | Displays the next question | Pass | ![Next Button](testing/features-testing/game-page/game-page-nxt-btn.PNG) <br> ![Next Page](testing/features-testing/game-page/game-page-nxt-btn-nav.png)|
| Verify score update | Score Update | Correctly answer a question | Score increments according to the correct answer | Score increments according to the correct answer | Pass | ![Score Update](testing/features-testing/game-page/game-page-score.PNG) <br> ![Score Update](testing/features-testing/game-page/game-page-score-update.PNG)|
| Verify progress bar update | Progress Bar | Answer a question | Progress bar fills according to the number of questions answered | Progress bar fills according to the number of questions answered | Pass | ![Progress Bar](testing/features-testing/game-page/game-page-progress-bar.PNG) <br> ![Progress Bar](testing/features-testing/game-page/game-page-progress-bar-update.PNG) |
| Verify game completion redirects to End Game Page | Game Completion | Complete all questions <br> Observe redirection | Redirected to the End Game Page | Redirected to the End Game Page | Pass | ![End Game Redirection](testing/features-testing/end-game/end-game-page.png)|
| Verify question option hover effect | Option Hover | Hover the mouse over question options | Options change appearance or highlights | Options change appearance or highlights | Pass | ![Game Option Hover](testing/features-testing/game-page/game-page-question-option.PNG) <br> ![Game Option Hover](testing/features-testing/game-page/game-page-question-option-hover.png)|
| Verify the Next button hover effect | Next Button Hover | Hover the mouse over the Next button | Next button changes appearance or highlights | Next button changes appearance or highlights | Pass | ![Game Next Hover](testing/features-testing/game-page/game-page-nxt-btn.PNG) <br> ![Game Next Hover](testing/features-testing/game-page/game-page-nxt-btn-hover.PNG)|

### `End Game Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify final score display | Final Score Display | Navigate to the End Game Page after completing a quiz | Displays the final score achieved in the quiz | Displays the final score achieved in the quiz | Pass | ![Final Score](testing/features-testing/end-game/end-game-page.png) |
| Verify username input functionality | Username Input | Enter a username in the input field | Enables the Save Score button upon entering a username | Enables the Save Score button upon entering a username | Pass | ![Username Input](testing/features-testing/end-game/end-game-page-username.PNG) |
| Verify Save Score button functionality | Save Score Button | Enter a username and click the Save Score button | Saves the score with the username | Saves the score with the username | Pass | ![Save Score](testing/features-testing/end-game/end-game-page-save-btn.PNG) <br> ![End Game](testing/features-testing/high-score/high-score-page.PNG) |
| Verify Play Again button functionality | Play Again Button | Click the Play Again button | Redirects to the difficulty level selection page to start a new game | Redirects to the difficulty level selection page to start a new game | Pass | ![End Game](testing/features-testing/end-game/end-game-page-play-btn.PNG) <br> ![End Game](testing/features-testing/difficulty/difficulty-level-page.PNG)|
| Verify title bar functionality | Title Bar | Click on the title bar | Redirected to the home page | Redirected to the home page | Pass | ![Title Bar](testing/features-testing/end-game/end-game-page.png) <br> ![End Game](testing/features-testing/home-page/home-page.png) |
| Verify the Power button functionality | Power Button | Click the Power button | Redirected to the home page | Redirected to the home page | Pass | ![Power Button](testing/features-testing/end-game/end-game-page-power-btn.PNG) <br> ![End Game](testing/features-testing/home-page/home-page.png)|
| Verify Play Again button hover effect | Restart Button Hover | Hover the mouse over the Play Again button | Play Again button changes appearance or highlights | Play Again button changes appearance or highlights | Pass | ![End Game Restart Hover](testing/features-testing/end-game/end-game-page-play-btn.PNG) <br> ![End Game](testing/features-testing/end-game/end-game-page-power-btn-hover.PNG)|
| Verify Save button hover effect | Restart Button Hover | Hover the mouse over the Save button | Save button changes appearance or highlights | Save button changes appearance or highlights | Pass | ![End Game Restart Hover](testing/features-testing/end-game/end-game-page-save-btn.PNG) <br> ![End Game](testing/features-testing/end-game/end-game-page-save-btn-hover.png) |
| Verify Power button hover effect | Restart Button Hover | Hover the mouse over the Power button | Power button changes appearance or highlights | Power button changes appearance or highlights | Pass | ![End Game Restart Hover](testing/features-testing/end-game/end-game-page-power-btn.PNG)<br> ![End Game](testing/features-testing/end-game/end-game-page-power-btn-hover.PNG)|
| Verify the title bar hover effect | Title Bar Hover | Hover the mouse over the title bar | Title bar changes appearance or highlights | Title bar changes appearance or highlights | Pass | ![End Game Title Hover](testing/features-testing/end-game/end-game-page.png) <br> ![End Game](testing/features-testing/end-game/end-game-page-title-hover.png) |

### `Exit Game Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify the display of the exit confirmation message | Exit Confirmation | Navigate to the Exit Game Page | Displays a confirmation message asking if the user wants to exit | Displays a confirmation message asking if the user wants to exit | Pass | ![Exit Confirmation](testing/features-testing/exit-game/exit-game-page.png) |
| Verify the "Yes" button functionality | "Yes" Button | Click the "Yes" button on the Exit Game Page | Redirects to the Home Page, effectively exiting the game | Redirects to the Home Page, effectively exiting the game | Pass | ![Yes Button](testing/features-testing/exit-game/exit-game-page-yes.PNG) <br> ![Yes Button](testing/features-testing/home-page/home-page.png) |
| Verify the "No" button functionality | "No" Button | Click the "No" button on the Exit Game Page | Returns the user to the game or the last page they were on before the exit prompt | Returns the user to the game or the last page they were on before the exit prompt | Pass | ![No Button](testing/features-testing/exit-game/exit-game-page-no.PNG) <br> ![No Button](testing/features-testing/game-page/game-page-nxt-btn-nav.png) |
| Verify title bar functionality | Title Bar | Click on the title bar from the Exit Game Page | Redirected to the home page | Redirected to the home page | Pass | ![Title Bar](testing/features-testing/exit-game/exit-game-page.png) <br> ![Title Bar](testing/features-testing/home-page/home-page.png)  |
| Verify "Yes" button hover effect | "Yes" Button Hover | Hover the mouse over the "Yes" button | "Yes" button changes appearance or highlights | "Yes" button changes appearance or highlights | Pass | ![Exit Yes Hover](testing/features-testing/exit-game/exit-game-page-yes.PNG) <br> ![Exit Yes Hover](testing/features-testing/exit-game/exit-game-page-yes-hover.png) |
| Verify "No" button hover effect | "No" Button Hover | Hover the mouse over the "No" button | "No" button changes appearance or highlights | "No" button changes appearance or highlights | Pass | ![Exit No Hover](testing/features-testing/exit-game/exit-game-page-no.PNG) <br> ![Exit No Hover](testing/features-testing/exit-game/exit-game-page-no-hover.png) |

### `Settings Page`

| **Description** | **Functionality** | **Test Steps** | **Expected Result** | **Actual Result** | **Status** | **Snapshot** |
|-------------|---------------|------------|-----------------|---------------|--------|----------|
| Verify sound checkbox functionality | Sound Checkbox | Navigate to the Settings Page <br> Toggle the sound checkbox | Background music starts or stops based on toggle | Background music starts or stops based on toggle | Pass | ![Settings Sound](testing/features-testing/settings/settings-page.PNG) |
| Verify theme checkbox functionality | Theme Checkbox | Navigate to the Settings Page <br> Toggle the theme checkbox | Page theme switches between light and dark mode | Page theme switches between light and dark mode  | Pass  | ![Settings Theme](testing/features-testing/settings/settings-page.PNG) <br> ![Settings Theme](testing/features-testing/settings/settings-page-theme.png) |
| Verify title bar hover effect | Title Bar Hover | Hover the mouse over the title bar | Title bar changes appearance or highlights | Title bar changes appearance or highlights| Pass | ![Settings Title Hover](testing/features-testing/settings/settings-page.PNG) <br> ![Settings Title Hover](testing/features-testing/settings/settings-page-title-hover.png) |
| Verify Power button functionality  | Power Button | Click the Power button | Redirected to the home page | Redirected to the home page | Pass| ![Settings Power](testing/features-testing/settings/settings-page-power-btn.PNG) <br> ![Settings Power](testing/features-testing/home-page/home-page.png) |
| Verify Power button hover effect    | Power Button Hover     | Hover the mouse over the Power button     | Power button changes appearance or highlights     | Power button changes appearance or highlights| Pass| ![Settings Power Hover](testing/features-testing/settings/settings-page-power-btn-hover.png) <br> ![Settings Power Hover](testing/features-testing/settings/settings-page-power-btn-hover.png)|

## User Story Testing

To ensure the Toons Quiz Game meets the diverse expectations and enhances the user experience for different demographics, I conducted user story testing across various categories. Here’s an in-depth look at how the game addresses the goals of first-time users, returning users, frequent users, game developers, and from a business standpoint:

### `First-Time Users`

| Goals | How are they achieved? |
| :--- | :--- |
| I want an easy-to-navigate interface to start playing immediately. | Upon landing on the home page, users are greeted with a clear and visually appealing layout that directs them to start playing, access how-to-play instructions, or adjust settings for a personalized experience. |
| I wish to understand the game mechanics without effort. | A dedicated "How to Play" page provides simple, straightforward instructions alongside tips to enhance the user's gameplay, ensuring a smooth introduction to the game's mechanics. |

### `Returning Users`

| Goals | How are they achieved? |
| :--- | :--- |
| I'm interested in new content to keep the experience fresh. | Based on future implementations, the game will regularly update with new quiz questions and occasionally introduces themed quizzes, ensuring returning users always have something new to explore. |
| I want to review my past performance and set new goals. | The "High Score" page not only displays the user's personal best scores but also encourages them to surpass their previous achievements, fostering a continuous drive for improvement. |

### `Frequent Users`

| Goals | How are they achieved? |
| :--- | :--- |
| I seek a challenging environment to test my knowledge to the fullest. | The game includes a variety of difficulty levels, catering to users who desire a more challenging and competitive quiz experience. |
| I aspire to be recognized within the game community. | Future implementations will include leaderboards and social sharing features which allow users to compare scores, share achievements, and challenge friends, thereby cultivating a vibrant and competitive community. |

### `Game Developer`

| Goals | How are they achieved? |
| :--- | :--- |
| I aim to provide an accessible and engaging game for all users. | Through careful design and testing, the game supports screen readers and keyboard navigation, ensuring an inclusive experience. Feedback mechanisms are in place for continuous improvement based on user suggestions. |
| I intend to grow the game's user base and foster a dedicated community. | Regular content updates, social media integration, and community engagement strategies are to be employed to attract new users and retain existing ones, creating a loyal fanbase around the Toons Quiz Game. |

### `Business Perspective`

| Goals | How are they achieved? |
| :--- | :--- |
| Our goal is to establish a widely recognized and monetizable gaming platform. | By providing a diverse range of quizzes, and ensuring high-quality content, the game aims to attract a broad audience. Monetization strategies such as in-game advertisements or premium content are to be explored to generate revenue while maintaining a positive user experience. |
| We aim to utilize user data to improve engagement and tailor experiences. | Analytic tools would be implemented to gather insights on user behavior, preferences, and engagement patterns. This data informs the development of new features and the optimization of existing ones to meet user needs more effectively, driving further growth and engagement. |

- - -

## Browser Compatibility

I confirmed that my website performs consistently across various web browsers. Testing on popular browsers like Google Chrome, Safari, and Microsoft Edge was crucial to ensure a consistent and reliable user experience.

| Browser Tested | Intended Appearance | Intended Responsiveness | Screen Shot | 
| --- | --- | --- | --- | 
| `Google Chrome` | Good  | Good | ![Chrome](testing/browser-compatibility/chrome-home.png) <br> ![Chrome](testing/browser-compatibility/chrome-how-to-play.png) <br> ![Chrome](testing/browser-compatibility/chrome-highscore.png) <br> ![Chrome](testing/browser-compatibility/chrome-difficulty.png) <br> ![Chrome](testing/browser-compatibility/chrome-game-page.png) <br> ![Chrome](testing/browser-compatibility/chrome-exit.png) <br> ![Chrome](testing/browser-compatibility/chrome-home.png) <br> ![Chrome](testing/browser-compatibility/chrome-end.png)|
| `Safari`| Good  | Good | ![Safari](testing/browser-compatibility/safari-home.png) <br> ![Safari](testing/browser-compatibility/safari-how-to-play.png) <br> ![Safari](testing/browser-compatibility/safari-highscore.png) <br> ![Safari](testing/browser-compatibility/chrome-difficulty.png) <br> ![Safari](testing/browser-compatibility/safari-game.png) <br> ![Safari](testing/browser-compatibility/safari-exit.png) <br> ![Safari](testing/browser-compatibility/safari-end.png) <br> ![Safari](testing/browser-compatibility/safari-settings.png) |
| `Microsoft Edge` | Good  | Good | ![Edge](testing/browser-compatibility/edge-home.png) <br> ![Edge](testing/browser-compatibility/edge-how-to-play.png) <br> ![Edge](testing/browser-compatibility/edge-highscore.png) <br> ![Edge](testing/browser-compatibility/edge-difficulty.png) <br> ![Edge](testing/browser-compatibility/edge-game-page.png) <br> ![Edge](testing/browser-compatibility/edge-exit.png) <br> ![Edge](testing/browser-compatibility/edge-end.png) <br> ![Edge](testing/browser-compatibility/edge-settings.png) |

- - -

## Responsiveness Testing for Toons Quiz Game

The responsiveness of the Toons Quiz Game was thoroughly tested to ensure a seamless and engaging experience across a variety of devices and screen sizes. This was crucial to ensure that every aspect of the game, from layout to interactivity and visuals, is optimized for all users.

### `Tested Devices and Results`

| Device Tested | Screen Size | Site Response | Renders as Intended | Screen Shot |
|---------------|-------------|---------------|---------------------|---------------------|
| `iPhone 12 Pro` | 390px * 844px | Good | Yes | |
| `iPhone 14 Pro Max` | 430px * 932px | Good | Yes | |
| `iPad Mini` | 768px * 1024px | Good | Yes | |
| `iPad Air` | 820px * 1180px | Good | Yes | |

Full testing was also performed on the following devices with the same test outcome as above:

* `Laptop`:
  * Macbook Pro 2017 13"
  * Hp Spectre x360
  * HP EliteBook 830 G10 13.3"
  * Dell Latitude 5530 15"

* `Mobile Devices`:
  * iPhone 13 Pro Max
  * Samsung S10+

Each device tested the site using the following browsers:

* Google Chrome
* Safari
* Microsoft Edge

- - -

## Code Validation

To ensure the Toons Quiz Game meets web standards and provides a high-quality experience across all browsers and devices, extensive code validation was performed. This process involved utilizing industry-standard tools to check the HTML, CSS, and JavaScript files for compliance with current web standards, accessibility guidelines, and best practices.

### `HTML Validation`

The HTML code for each page of the Toons Quiz Game was validated using the [W3C Markup Validation Service](https://validator.w3.org/) to ensure it is free from errors and complies with the HTML5 standard.

| Page Tested | Validation Output |
|-------------|-------------------|
| Home Page | ![Home Page HTML](testing/w3/index-html.png) |
| How to Play Page | ![How to Play HTML](testing/w3/howtoplay-html.png) |
| High Score Page | ![High Score HTML](testing/w3/highscore-html.png) |
| Difficulty Level Page | ![Difficulty Level HTML](testing/w3/difficultylevel-html.png) |
| Game Page | ![Game Page HTML](testing/w3/game-html.png) |
| End Game Page | ![End Game HTML](testing/w3/endgame-html.png) |
| Exit Game Page | ![Exit Game HTML](testing/w3/exitgame-html.png) |
| Settings Page | ![Settings HTML](testing/w3/settings-html.png) |

### `CSS Validation`

The CSS files were validated using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to ensure the styling adheres to the CSS3 standard, enhancing the visual consistency and performance across various platforms.

| CSS File | Validation Output |
|----------|-------------------|
| Main Stylesheet | ![Main CSS](testing/w3/main-css.png) |

### `JavaScript Validation`

JavaScript code was tested for syntax errors and compatibility issues to ensure seamless interactivity and functionality across different browsers. Tools such as [JSHint](https://jshint.com/) were utilized for this purpose.

| JS File | Validation Output |
|---------|-------------------|
| Game Logic | ![Game Logic JS](testing/w3/gamelogic-js.png) |
| Settings | ![Settings JS](testing/w3/settings-js.png) |

Through rigorous validation and testing, the Toons Quiz Game aims to deliver a reliable, accessible, and enjoyable experience for all users.

- - -

## Lighthouse Performance Assessment

To ensure that the Toons Quiz Game offers an optimized user experience, we conducted a series of performance and quality assessments using Google's Lighthouse tool within Chrome Developer Tools. This allowed us to evaluate the game's performance, accessibility, adherence to best practices, and SEO effectiveness across both desktop and mobile platforms. Here are the summarized results:

### `Desktop Results`

The desktop version of the Toons Quiz Game demonstrated excellent performance, with all pages scoring above 90 in the key areas of performance, accessibility, best practices, and SEO.

| Page Tested | Performance | Accessibility | Best Practices | SEO |
|-------------|-------------|---------------|----------------|-----|
| Home Page | ![Desktop Home](testing/lighthouse/desktop-home-page.png) |
| How to Play Page | ![Desktop How to Play](testing/lighthouse/desktop-howtoplay-page.png) |
| High Score Page | ![Desktop High Score](testing/lighthouse/desktop-highscore-page.png) |
| Difficulty Level Page | ![Desktop Difficulty](testing/lighthouse/desktop-difficultylevel-page.png) |
| Game Page | ![Desktop Game](testing/lighthouse/desktop-game-page.png) |
| End Game Page | ![Desktop End Game](testing/lighthouse/desktop-endgame-page.png) |
| Exit Game Page | ![Desktop Exit Game](testing/lighthouse/desktop-exitgame-page.png) |
| Settings Page | ![Desktop Settings](testing/lighthouse/desktop-settings-page.png) |

### `Mobile Results`

Similarly, the mobile version of the Toons Quiz Game achieved impressive results, maintaining scores above 90 across the evaluated categories, ensuring a seamless experience for mobile users.

| Page Tested | Performance | Accessibility | Best Practices | SEO |
|-------------|-------------|---------------|----------------|-----|
| Home Page | ![Mobile Home](testing/lighthouse/mobile-home-page.png) |
| How to Play Page | ![Mobile How to Play](testing/lighthouse/mobile-howtoplay-page.png) |
| High Score Page | ![Mobile High Score](testing/lighthouse/mobile-highscore-page.png) |
| Difficulty Level Page | ![Mobile Difficulty](testing/lighthouse/mobile-difficultylevel-page.png) |
| Game Page | ![Mobile Game](testing/lighthouse/mobile-game-page.png) |
| End Game Page | ![Mobile End Game](testing/lighthouse/mobile-endgame-page.png) |
| Exit Game Page | ![Mobile Exit Game](testing/lighthouse/mobile-exitgame-page.png) |
| Settings Page | ![Mobile Settings](testing/lighthouse/mobile-settings-page.png) |

  
- - -