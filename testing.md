# Toons Quiz -  Testing 

![Toons shown on a variety of screen sizes](documentation/page-layout/welcome-page.PNG)

Visit the deployed site: [Grizk Art Gallery](https://gokwori.github.io/Toons-Quiz/)

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

| Test Suite | Description | Functionality | Test Steps | Expected Result | Actual Result | Status | Snapshot |
|------------|-------------|---------------|------------|-----------------|---------------|--------|----------|
| `Home Page` | Verify the title bar functionality | Title Bar | Load the game <br> Click on the title bar | The home page refreshes/reloads | The home page refreshes/reloads | Pass | ![Title Bar](documentation/features/site-title.PNG) |
|  | Verify the How to Play button functionality | How to Play Button | Load the game <br> Click on How to Play button | The buttton directs to the correct page | The buttton directs to the correct page | Pass |![How to Play](testing/features-testing/how-to-play.PNG) <br> ![How to Play](testing/features-testing/how-to-play-1.PNG) |
|  | Verify the High Score button functionality | High Score Button | Load the game <br> Click on High Score button | The buttton directs to the correct page | The buttton directs to the correct page | Pass | ![High Score](testing/features-testing/high-score.PNG) <br> ![High Score](testing/features-testing/high-score-1.PNG) |
|  | Verify the Play Now button functionality | Play Now Button | Load the game <br> Click on Play Now button | The buttton directs to the correct page | The buttton directs to the correct page | Pass | ![Play Now](testing/features-testing/play-now.PNG) <br> ![Play Now](testing/features-testing/play-now-1.PNG) |
|  | Verify the Settings button functionality | Settings Button | Load the game <br> Click on Settings button | The buttton directs to the correct page | The buttton directs to the correct page | Pass | ![Settings](testing/features-testing/settings-button.PNG) <br> ![Settings](testing/features-testing/settings-button-1.PNG) |
|  | Verify the hover effect functionality | Title Bar | Load the game <br> Hover the mouse on the title bar | The title bar hovers | The title bar hovers | Pass | ![Title Bar](testing/features-testing/home-page.PNG) <br> ![Title Bar](testing/features-testing/home-page-1.PNG) |
|  | | How to Play Button | Load the game <br> Hover the mouse on the How to Play button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button  | Pass |![How to play](testing/features-testing/home-page.PNG) <br> ![How to Play](testing/features-testing/how-to-play-2.PNG) |
|  |  | High Score Button | Load the game <br> Hover the mouse on the High Score button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button | Pass | ![Title Bar](testing/features-testing/home-page.PNG) <br> ![High Score](testing/features-testing/high-score-2.PNG) |
|  |  | Play Now Button | Load the game <br> Hover the mouse on the Play Now button | The buttton hovers and transforms into a trasparent button | The buttton hovers and transforms into a trasparent button | Pass | ![Title Bar](testing/features-testing/home-page.PNG) <br> ![Play Now](testing/features-testing/play-now-2.PNG) |
|  |  | Settings Button | Load the game <br> Hover the mouse on the Settings button | The buttton hovers | The buttton hovers and transforms into a trasparent button| Pass | ![Title Bar](testing/features-testing/home-page.PNG) <br> ![Settings](testing/features-testing/settings-button-2.PNG)) |
| `How to play` | Verify the title bar functionality | Title Bar | Load the game <br> Click on the title bar | Redirected to the home page | Redirected to the home page | Pass | ![How to Play](testing/features-testing/how-to-play-2.PNG) <br> ![Home Page](testing/features-testing/home-page.PNG) |
|  | Verify the Power button functionality | Power Button | Load the game <br> Navigate to the How to play Section <br> Click the Power button | Redirected to the home page | Redirected to the home page | Pass |![How to Play](testing/features-testing/power-button.png) <br> ![How to Play](testing/features-testing/home-page.PNG) |
|  | Verify the hover effect functionality | Title Bar | Load the game <br> Navigate to the How to Play section <br> Hover the mouse on the title bar | The title bar hovers | The title bar hovers | Pass | ![Title Bar](testing/features-testing/how-to-play-2.PNG) <br> ![Title Bar](testing/features-testing/how-to-play-3.PNG) |
|  | | Power Button | Load the game <br> Navigate to the How to Play page <br> Hover the mouse on the Power button | The buttton hovers and transforms into a trasparent button  | The buttton hovers and transforms into a trasparent button  | Pass |![How to play](testing/features-testing/power-button.png) <br> ![How to Play](testing/features-testing/power-button-1.png) |
