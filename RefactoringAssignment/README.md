## Issues with Using `var`

The original code used `var` for all variables, which technically works, but it can cause confusion and bugs, especially as the code gets bigger.

### Scope Can Be Misleading

One of the biggest issues with `var` is that it’s function-scoped instead of block-scoped. In the original code, the `message` variable was declared inside both the `if` and `else` blocks, but because it used `var`, it was really the same variable. That makes it harder to reason about what value `message` actually has at any given time.

### Hoisting Makes Code Harder to Read

Variables declared with `var` are hoisted to the top of their scope and set to `undefined`. This can make the code feel unpredictable, because variables might exist before they logically should. When reading the code, it’s not always obvious where a variable is first meant to be used.

### Loop Variables Can Leak

The loop counter `i` was originally declared with `var`, which means it exists outside the loop block. This isn’t a problem in this small example, but in real applications it can lead to bugs, especially when working with asynchronous code. Using `let` keeps `i` scoped to the loop, which is safer.

### Easier to Make Mistakes

`var` allows redeclaring the same variable multiple times without throwing an error. This makes it easier to accidentally overwrite values. Using `let` and `const` helps catch these mistakes early and makes the code easier to maintain.
