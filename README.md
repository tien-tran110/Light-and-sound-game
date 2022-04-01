# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **TIEN TRAN**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/light-and-sound-mem-game?path=README.md%3A10%3A43)

The Game site: https://light-and-sound-mem-game.glitch.me/


## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess ->(3 mistakes)

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played (using the built-in Math.random() method)
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

  - w3schools | educative: syntax of Javascripts, HTML, CSS
    
  - stackOverFlow: setInterval, setTimeout usage


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I think the biggest challenge I encountered was setting the timer after each turn. I did some research on how to implement setInterval, clearInterval, setTimeout through w3school and stackoverflow. 
Then, I tried out the logic on my function. I thought that I would set the timer after the tune is finish playing. So I initialized a variable that represented the scenario when the sound is not playing.
However, that logic would give the players more times in between their turns rather than what a timer function supposed to be. So I changed my approach to set the timer when the game start and reset the time
when it receives a response. I struggled to set the intervals and combine the setTimeout at the same time. It seemed to have different intervals running all at once. So I lookup it up how to fix the errors on stackoverflow.
After checking the logic of the timer, I think that the bug must lie in the code. So I focused on the relevant code lines and tried to put several print statements to see what is the odd. I eventually realized that I accidentally
put the setInterval in the for loop same as the setTimeout

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [TIEN TRAN]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.