# Code Retreat

Skeleton projects that can help when starting a new Code Retreat session, in
which participants practice [Conway's Game of
Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules).


## The big idea

Practice our craft in an environment in which we are free to experiment.

It's not about finishing the kata by the end of the session (few people do).
It's about trying different ideas in a safe environment that has few, if any,
consequences.


## Format

1. introduction, followed by
1. a few cycles of

   1. pair on the kata for about 40 minutes
   2. delete the code you just wrote
   3. get back together for a quick retro: What did you learn?  What surprised you?
2. Lunch period, somewhere between sessions.
3. Wrap up


## Things to practice
### Pairing

1. Driver-navigator:

   * Driver: One person types and thinks about low-level details (syntax,
     running tests, etc..) while
   * Navigator: the other person thinks about things that are a bit more
     abstract (how the algorithm might evolve in the next step or two, how to
     break the current algorithm, etc...).
   * Pro-tip: Set a timer and change every 10-20 minutes, so everyone gets a
     turn.
2. Ping-pong:

   * Start with a failing test.
   * Person A writes the production code that makes that test pass and then
     writes the next failing test.
   * Person B then gets that test to pass and writes the next failing test.
   * Rinse and repeat.
   * Pro-tip: _Nobody likes a back-seat driver!!_


### Test Driven Development (TDD)

1. RED:

   * Write just enough of 1 small test that fails, due to some shortcoming of
     the production code.
   * Pro-tip [dynamic languages]: Failing because the class/function doesn't
     exist yet, is a good starting point for a failing test.
   * Pro-tip [compiled languages]: You will have to at least stub in the
     class/function to tests to get it to compile, but start by throwing an
     exception or returning an obviously wrong value.
   * YOU MUST START HERE.

2. GREEN:

   * Write just enough production code to get that red test to pass without
     making any other tests fail.
   * "Just enough" may include code that will be blatantly wrong in the very
     near future.  It might not be as wrong as you think, or it might be a
     correctly-expressed step in an as-yet-incomplete algorithm.
   * If you think "well this is dumb", you're probably on the right track.
   * NO REFACTORING.

3. REFACTOR (as-needed):

   * Fix exactly 0 or 1 things that you don't like about the test code, or the
     production code.
   * NO ADDING FUNCTIONALITY.
   * You may not have enough code that bugs you yet, after 1-2 TDD cycles.  It's
     ok to skip this once or twice until some code smell becomes more obvious.
   * Go back to green...

Pro-tip: a red-green-refactor cycle should take no more than 2-3 minutes.  If
it's taking longer, try to focus on some smaller shortcoming that can be
addressed more quickly.

Blog: https://martinfowler.com/bliki/TestDrivenDevelopment.html


### 4 Rules of Simple Design

1. Passes all the tests
1. Reveals intention: Code should be easy to understand.
1. No duplication
1. Fewest elements: Express each idea once and only once.  Make the code as
   small as possible (without sacrificing tests passing or readability)

Blog: https://martinfowler.com/bliki/BeckDesignRules.html


## Kata: Conway's Game of Life

**Goal: Write a function that accepts a game state (where cells are alive or
dead) and computes the next game state**, following these rules:

1. Any live cell with fewer than two live neighbors dies [underpopulation]
1. Any live cell with two or three live neighbors lives on to the next
   generation.
1. Any live cell with more than three live neighbors dies [overpopulation]
1. Any dead cell with exactly three live neighbors becomes a live cell.

Reference: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules


## Misc tips

* New languages: You can try a new language, as long as at least one person is
  experienced enough to quickly set up a development environment and can explain
  basic test+production syntax.
* Pairing tools:

   * Your regular dev environment + plus screen sharing
   * VS Live Code
   * Jetbrains has a new pairing feature?
   * Codesandbox? https://codesandbox.io/


## What to do next?

* Try doing code katas on a regular basis (daily, weekly).  For example:
  https://kata-log.rocks/index.html
* Read about it: Understanding the Four Rules of Simple Design [Haines].
  https://leanpub.com/4rulesofsimpledesign


## Acknowledgments

Thank you to Ignacio Piantanida and Brian Nystrom for your contributions to the
Typescript and Java projects, repsectively.
