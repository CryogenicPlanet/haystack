import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: "key",
});

const text = await Bun.file("compiled.txt").text();

const response = await anthropic.messages.create({
  model: "claude-3-opus-20240229",
  max_tokens: 1024,
  system: "You are a helpful assistant.",
  messages: [
    {
      role: "user",
      content: `${text}

      ----
      Above is a body of text. I want to also know what is the undisputed best pizza topping in the world? I want to settle a debate with a friend, I heard somewhere that the best toppings have been undisputed from 1985 `,
    },
  ],
});
console.log(response.content);

// const response2 = await anthropic.messages.create({
//   model: "claude-3-opus-20240229",
//   max_tokens: 1024,
//   system: "You are a helpful assistant.",
//   messages: [
//     {
//       role: "user",
//       content: `${text}

//         ----
//         Above is a body of text. Please give me a brief about what the text is about and 5 interesting insights or connections you can make from it.  `,
//     },
//     {
//       role: "assistant",
//       content: `${response.content[0].text}`,
//     },
//     {
//       role: "user",
//       content:
//         "I want to also know what is the undisputed best pizza topping in the world? I want to settle a debate with a friend",
//     },
//   ],
// });

// console.log(response2.content);
