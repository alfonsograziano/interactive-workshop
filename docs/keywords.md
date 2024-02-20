---
sidebar_position: 3
sidebar_label: Keywords
---

# A06 Keywords

- Utilizing special keywords such as only, todo, and skip in test suites can significantly enhance test management and execution efficiency.
- `only`: Focuses on running a specific test or group of tests, useful for debugging or developing new features.
- `todo`: Marks tests as planned but not yet implemented, allowing for better test suite planning without breaking the execution.
- `skip`: Excludes tests from the execution run, useful for temporarily disabling tests without removing the test code.

# A06 The problem

- During development and testing phases, it's common to encounter scenarios where certain tests need to be prioritized, postponed, or temporarily disabled.
- Manually commenting out tests or altering test code to adjust the execution can be cumbersome and error-prone.
- In the `index.test.js` we have 4 tests. Based on the requirements written in the test file, apply the correct keywords yo apply the required behaviour

## It's your turn!

import CodeTextArea from "@site/src/components/CodeTextArea.js"

<CodeTextArea exerciseId={'a06-keywords'}/>
