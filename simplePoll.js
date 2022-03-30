"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  // The type of display to show results, either an array or a string
  displayResults() {
    const type = 1;

    if (type === 1) {
      // Display of results of bonus in array format
      console.log(bonusObject.bonus1);
      console.log(bonusObject.bonus2);
      // Display of results (in array format)
      return this.answers;
    } else {
      // Display of results of bonus, not in array format
      console.log(`${bonusObject.bonus1}`);
      console.log(`${bonusObject.bonus2}`);

      // Display of this.displayResults, not in array format
      const [poll1, poll2, poll3, poll4] = this.answers;
      return `Poll results are ${poll1},${poll2},${poll3},${poll4}`;
    }
  },

  //   Function to determine user choice
  registerNewAnswer() {
    //   Destructuring the question
    const [poll1, poll2, poll3, poll4] = this.options;
    const quest = this.question.replace(this.question.slice(0), "\n");
    const firstPoll = poll1.replace(0, 1);
    const secondPoll = poll2.replace(1, 2);
    const thirdPoll = poll3.replace(2, 3);
    const fourthPoll = poll4.replace(3, 4);

    // Prompt for user input
    const type = Number(
      prompt(
        this.question +
          quest +
          "\n" +
          firstPoll +
          "\n" +
          secondPoll +
          "\n" +
          thirdPoll +
          "\n" +
          fourthPoll +
          "\n" +
          "(Write option number)"
      )
    );

    // If the number that's put in is higher than 4
    if (type != 1 && type != 2 && type != 3 && type != 4) {
      alert("Sorry, incorrect number or other value!");
    } else {
      type === 1 ? this.answers[0]++ : this.answers[0];
      type === 2 ? this.answers[1]++ : this.answers[1];
      type === 3 ? this.answers[2]++ : this.answers[2];
      type === 4 ? this.answers[3]++ : this.answers[3];

      console.log(this.displayResults());
    }
  },
  answers: [0, 0, 0, 0],
};

// Creating a value out of the function to use in arguments
const polls = poll.registerNewAnswer;

// Clicking the poll button
document.querySelector(".poll").addEventListener("click", polls.bind(poll));

// BONUS QUESTION
const bonusObject = {
  bonus1: [5, 2, 3],
  bonus2: [1, 5, 3, 9, 6, 1],
};

// This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

// console.log(this.registerNewAnswer);
