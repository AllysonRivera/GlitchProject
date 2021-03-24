# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Allyson Rivera

Time spent: 5 hours spent in total

Link to project: (https://glitch.com/edit/#!/trusting-savory-jade?path=README.md%3A7%3A13)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] User can speed up the entire playback speed
- [X] User can choose to level up and gain more Game buttons

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![X](http://g.recordit.co/kGwtPxu4R9.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/colors/colors_picker.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    Some challenges I faced when I was creating the level-up buttons and the speed-up button. I knew that these 
  would be awesome features for the game so I went through the code and thought it through. I first made a plan 
  as to what I wanted the buttons to do. I knew I was going to need a button similar to how the start and stop 
  worked so I began with that. I want the new game blocks that I created to appear only when the level-up 
  button was activated. I used the prior code from the start and stop buttons in order to know how to hide these 
  new game buttons. I then ran into the issue of allowing the user to change the level-up feature but not start 
  the game.After a few trial-runs and replanning, I was able to debug the issue and got it to work. Next, I began
  to work on the speed up and slow down, for the most part, it was pretty simple since I had just done the level 
  up button which had a similar setup. However, I had to change up the speed which was difficult because I did not
  know how much time to take off of the pause variables. Once I found the right speed I was able to test out both 
  buttons and make sure they worked properly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
   Some questions I have about web development are how to overlay objects on each other. I ran into this problem
 when trying to add confetti to the game when the user would win. I also would like to know what other ways I 
 could use javascript, HTML, and CSS to allow the user to have more interactions with a website/game as well 
 as the overall design of the website. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    I would want to add a function to allow confetti to shoot out on the screen when the user wins the game. 
  This would be a nice feature for the user and make the game a little more engaging. I would also want to 
  add more features that allow the user to pick how many rounds they would want to play and how long the 
  sequence of the pattern would be. This way the user can customize their game experience to their preferences.
  I think adding in chances or health counter to the game would also, be a cool idea.


## License

    Copyright Allyson Rivera

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.