# Student Information System

A small static Student Information web app, built as a college lab exercise in
**collaborative Git workflow**: feature branching, pull requests, code review,
and the deliberate creation and resolution of a merge conflict.

The application itself is intentionally simple. The Git history is the artifact
this project is really about.

Repository: <https://github.com/rkaran112/student-info-app>

---

## Team Members

| Student | Name | Role | Contribution |
|---|---|---|---|
| Student 1 | Karan (`rkaran112`) | Team Lead | Repository setup, base application, PR review and merges, conflict resolution |
| Student 2 | Enrita Fernandes | UI Developer | Interface styling, contact information section, heading update |
| Student 3 | Slaven Derick Pais | JavaScript Developer | Show Details behaviour, application title |

---

## Project Description

The page displays a single student record: name, register number, programme and
contact details. A **Show Details** button reveals the record using a small piece
of vanilla JavaScript. Styling is a self-contained stylesheet with a gradient
background, card-style detail rows and emoji icons.

There is no build step, no package manager and no backend. Every file in the
repository is served directly to the browser.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Layout, gradients, card styling, hover transitions |
| JavaScript (vanilla) | Show Details toggle behaviour |
| Git | Version control, branching, merge conflict resolution |
| GitHub | Remote hosting, pull requests, code review |

---

## Git Branching Strategy

`main` is the integration branch. Nobody works on it directly; every change
arrives through a short-lived feature branch and a reviewed pull request.

| Branch | Purpose | Author |
|---|---|---|
| `main` | Stable integration branch | — |
| `feature/ui` | Interface and styling improvements | Enrita Fernandes |
| `feature/javascript` | Show Details functionality | Slaven Derick Pais |
| `feature/contact` | Contact information section | Enrita Fernandes |
| `feature/student-name` | Heading text update | Enrita Fernandes |
| `feature/app-title` | Application title change | Slaven Derick Pais |

`feature/app-title` was branched from an earlier point on `main` than
`feature/student-name`, so the two edited the same heading independently. That
divergence is what produced the merge conflict described below.

---

## Pull Requests Created

| PR | Branch | Description | Outcome |
|---|---|---|---|
| #1 | `feature/ui` | Improve student information UI | Merged |
| #2 | `feature/javascript` | Add student details functionality | Merged |
| #3 | `feature/contact` | Add contact information | Merged |
| #4 | `feature/student-name` | Update student system heading | Merged |
| #5 | `revert-4-feature/student-name` | Revert PR #4 | Merged |
| #6 | `revert-5-revert-4-feature/student-name` | Revert the revert, restoring PR #4 | Merged |

Pull requests #5 and #6 are deliberate. #5 reverted the heading change, #6
restored it, and both were kept in history rather than rewritten. The history is
therefore honest about what happened instead of being tidied up afterwards.

All pull requests were reviewed and merged by the Team Lead.

---

## Merge Conflict

### What caused it

`feature/app-title` was created from `main` before the contact section was
merged. On that branch the page heading was changed to:

```html
<h1>;MCA Student Information Portal</h1>
```

(The leading semicolon was an accidental keystroke, corrected during the merge.)

Meanwhile `main` moved on. Through PR #4, its revert in #5 and the restoration in
#6, and a later direct edit, the same heading on `main` became:

```html
<h1>Student Management System</h1>
```

Both branches had therefore modified the **same line of `index.html`** starting
from a common ancestor. Git had no way to choose between them.

Running `git merge main` from `feature/app-title` produced:

```
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Git wrote both versions into the file, separated by conflict markers:

```html
<<<<<<< HEAD
  <h1>;MCA Student Information Portal</h1>
=======
  <h1>Student Management System</h1>
>>>>>>> main
```

### How it was resolved

The conflict was resolved by hand. Rather than discarding either side, both were
combined into a single heading that keeps the descriptive name from `main` and
the programme context from the feature branch. A stray semicolon that had been
typed into the feature branch version was dropped at the same time.

The whole conflict block, markers included, was replaced with a single line:

```html
  <h1>Student Management System – MCA</h1>
```

The resolution was then staged and committed:

```bash
git add index.html
git commit -m "Resolve merge conflict in application title"
git push origin feature/app-title
```

The resulting merge commit records both parents, so the graph still shows that
two lines of development came back together at this point.

---

## How to Run the Application

No build tools, dependencies or server are required.

```bash
git clone https://github.com/rkaran112/student-info-app.git
cd student-info-app
```

Then open `index.html` in any modern browser, either by double-clicking it or
with a one-line static server:

```bash
python -m http.server 8000
```

and visiting <http://localhost:8000>.

Click **Show Details** to display the student record.

---

## Repository Layout

```
student-info-app/
├── index.html   Page structure and student record
├── style.css    Layout, gradient background, card styling
├── script.js    Show Details toggle
└── README.md    This document
```
