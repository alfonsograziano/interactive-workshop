---
sidebar_position: 1
sidebar_label: Introduction
---

# Node.js Test Runner Workshop

---

# What’s a Test Runner?

A test runner is a tool that automates the process of executing tests in the development of software, ensuring that code changes do not break existing functionality.

It allows developers to run tests across different environments and conditions systematically.

Test runners can be part of a larger **test framework** or standalone tools.

---

# Usual features

- **Test Discovery:** Automatically detecting and running all test cases within specified directories or files.
- **Test Organization:** Allowing tests to be grouped, categorized, or tagged for selective execution.
- **Result Reporting:** Providing detailed reports on test outcomes, including successes, failures, and exceptions.
- **Integration Support:** Offering compatibility with Continuous Integration (CI) systems for automated testing within development pipelines.

---

# Poplular examples

- Test runners are tools designed to execute your test suites and report the results. They are essential in automating the testing process.
- Python: `pytest` is widely appreciated for its powerful features and simple syntax, making it suitable for both simple and complex projects.
- Java: `JUnit` is the de facto standard for unit testing in Java development, known for its rich annotation-based configuration.
- JavaScript: `Jest` is a flexible test framework with a focus on asynchronous testing, offering rich features for running tests in Node.js and the browser.
- .NET: `NUnit` is a popular choice for .NET developers, similar to JUnit but with a focus on the .NET framework.

Choosing the right test runner involves considering the programming language, project complexity, and specific requirements.

---

# Test runner VS Testing Framework

- Test Runner: A tool that executes tests and reports the results. It is responsible for loading your test code, running it, and then providing feedback.
- Testing Framework: Provides the structure and guidelines for writing tests. It includes assertions, test cases, and test suites, but doesn't run tests by itself.
- The main difference lies in their roles; while a testing framework defines how to write tests, a test runner actually executes them.
- Some tools, like `pytest` and `Jest`, combine both functionalities, acting as both test runners and frameworks.

---

# Why Node.js decided to ship its own test runner?

- Integration: Built-in support for testing within the Node.js ecosystem simplifies setup and configuration for developers.
- Standardization: Aims to provide a standard testing solution that leverages Node.js features and best practices.
- Performance: Optimized for the Node.js environment, it can offer better performance and efficiency for JavaScript projects.
- Features: Tailored to meet the specific needs of Node.js developers, incorporating feedback and evolving with the platform.

---
