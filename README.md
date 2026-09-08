# Student Information System

A simple Student Information Web App built as a lab exercise in
**collaborative Git workflows** (branching, pull requests, merge conflicts).

The goal of this project is *not* to build a sophisticated web application.
The goal is to practise working as a team on a shared repository.

---

## Team Members

| Student | Role | Responsibility |
|---|---|---|
| Karan (Student 1) | Team Lead / Developer | Repository creation, base application, integration, PR reviews |
| _TBD_ (Student 2) | UI Developer | HTML / CSS improvements |
| _TBD_ (Student 3) | JavaScript Developer | Simple JavaScript functionality |

## Project Description

A static web page that displays a student's basic information — name,
register number and programme — with a **Show Details** button.
No database, backend or framework is used.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Git & GitHub

---

## Git Branching Strategy

`main` is the protected, always-working branch. **Nobody commits directly to `main`.**
Every change is made on a short-lived feature branch and merged through a Pull Request
reviewed by the Team Lead.

```
                    GitHub
                      |
                    main
                      |
       +--------------+--------------+
       |              |              |
  feature/ui   feature/javascript  feature/contact
       |              |              |
       +------- Pull Requests -------+
                      |
                    Merge
                      |
                    main
```

| Branch | Owner | Purpose |
|---|---|---|
| `main` | Student 1 | Integration branch |
| `feature/ui` | Student 2 | Improve HTML/CSS |
| `feature/javascript` | Student 3 | Add Show Details functionality |
| `feature/contact` | Student 2 | Add contact information |
| `feature/student-name` | Student 2 | Update application heading |
| `feature/app-title` | Student 3 | Update application title |

### Workflow every member follows

```bash
git checkout main
git pull origin main
git switch -c feature/<name>
# ...make changes...
git add .
git commit -m "Meaningful message describing the change"
git push -u origin feature/<name>
# then open a Pull Request into main
```

## Pull Requests Created

| # | Branch | Description | Reviewed by | Status |
|---|---|---|---|---|
| _TBD_ | `feature/ui` | Improve student information UI | Student 1 | _pending_ |
| _TBD_ | `feature/javascript` | Add student details functionality | Student 1 | _pending_ |
| _TBD_ | `feature/contact` | Add contact information | Student 1 | _pending_ |
| _TBD_ | `feature/student-name` | Update application heading | Student 1 | _pending_ |
| _TBD_ | `feature/app-title` | Update application title (conflict) | Student 1 | _pending_ |

## Merge Conflict

**What caused the conflict?**

_To be filled in after Part 6–10._
Two branches (`feature/student-name` and `feature/app-title`) were created from the
same commit on `main` and both edited the **same line** — the `<h1>` heading in
`index.html` — to different values. Git could not decide which version to keep.

**How was it resolved?**

_To be filled in after Part 10._
The conflict was resolved locally by merging `main` into `feature/app-title`,
editing `index.html` to keep a combined heading, removing the conflict markers
(`<<<<<<<`, `=======`, `>>>>>>>`), then committing and pushing the resolution.

---

## How to Run the Application

No build step and no server are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/rkaran112/student-info-app.git
   cd student-info-app
   ```
2. Open `index.html` in any web browser (double-click it, or right-click →
   *Open with* → your browser).

Alternatively, serve it locally:

```bash
python -m http.server 8000
```

then visit <http://localhost:8000>.
