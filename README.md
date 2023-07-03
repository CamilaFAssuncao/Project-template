# Project-template
# Refactoring Exercise

## Part 1 - Refactor

💡 Refactoring can break a lot of your code if you're trying to modify big chunks. The secret is to work with small changes and commit every step. That will help you focus on one change and go back to your last commit if something goes wrong. Made a real mess? Ask your coach for help in time. Refactoring is also never really finished, it's okay to call it a day after some intense changes instead of dedicating the full week to getting it perfect.

1. Copy the files from this repository into your classroom project.
2. Follow the instructions in that project's README.
3. Observe the code in it.

### 🌱 Must-haves

#### Refactoring to functions

- Take the `script.js` file and reorganize (refactor) the code into as many functions as you can (minimum of 3 functions should be created).
- You can choose your preferred approach (function per function, top to bottom, etc.), but keep a few principles in mind:
  - Functions should only do ONE thing.
  - Function names should describe what the function does.
  - Functions can often be just a few lines long.

💡 Tip: Test and commit early. Spotting the bug after one change is easy, spotting the bug after half a day of changes is... well... not.

⚠️ Getting an error mentioning CORS policy? You'll need to run the code through a local server. Your IDE can do this for you without the need to install extra stuff. Ask your coach if you're not sure how to do this. Curious why? Well, we're loading JS as a module here, and this comes with its own benefits and limitations.

### 🌼 Nice-to-haves (doable)

#### Global variables

Global variables are great, right? Available everywhere, no hassle, ... Perfect - time to arrange a marriage! Or... should we? 🤔 When it seems too good to be true, 99% of the time it is (party pooper, I know).

What's the matter?

- A big list of global variables becomes hard to maintain when the project grows.
- As global variables are available everywhere, this also means that nowhere else a variable with the same name can exist (imagine this limitation for a big project or when using a library).

The challenge: How many global variables can you find in your project that can actually become local variables?

#### Chase the old-style code away

Found some older JS remains, like `var` or `function`? They might be interesting for studying history, but have no place in our up-to-date project - time to get rid of them! If you're not sure what to replace them with (or what the impact might be), discuss with your peers or coach first.

💡 `const`, `let`, and fat arrow functions behave slightly differently from their older counterparts. If you've split everything into small functions and got rid of global variables, it shouldn't give you too much trouble to replace everything.

### 🌳 Nice-to-haves (hard)

#### Clean code

If you have the time and strength to dive even deeper into "clean code," have a look at [this documentation](https://github.com/ryanmcdermott/clean-code-javascript).

Some of this is quite advanced stuff, but it's a very good resource to read about best practices and clean code!

---

Feel free to reach out if you have any questions. Happy refactoring!
