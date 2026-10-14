# Introduction to Git

## What is Git?

Git is a free, open-source **version control system** that helps us
track changes in a project's files over time.

Think of Git as a way to keep a history of our code. It records
snapshots of the project, so we can review earlier versions, understand
what changed, and return to a previous version when necessary---for
example, when a change introduces a bug.

Git is also useful when multiple developers work on the same project.
Each developer can work on their own machine, track their changes, and
collaborate with others.

> **Important:** Git itself is primarily a version control tool that
> runs on your machine. Services such as GitHub, GitLab, and Bitbucket
> can host remote repositories online. Pushing a local repository to a
> remote service helps keep a copy online and makes collaboration
> easier.

## What is a repository?

A **repository** (often shortened to *repo*) is a place where Git stores
a project's files and the history of changes made to those files.

A Git repository contains the project files along with Git's internal
data, which is stored in a hidden directory named `.git`.

## Why do we use Git?

Imagine you are building a software product with several other
developers. Git can help you:

-   **Track changes:** See how files have changed over time.
-   **Restore earlier versions:** Return to a previous state when
    needed.
-   **Collaborate:** Let developers work on the same project from
    different machines.
-   **Keep a remote copy:** Push your repository to a hosting service
    such as GitHub, GitLab, or Bitbucket.
-   **Investigate bugs:** Review the history to help understand when and
    why a problem may have appeared.

## How do we start using Git in a project?

Git does not automatically track every folder on your computer. First,
you need to initialize a Git repository in the project folder.

### 1. Check whether Git is installed

Open Git Bash or your terminal and run:

``` bash
git --version
```

This command displays the installed Git version. If the command is
recognized and displays a version number, Git is available in that
terminal.

### 2. Initialize a repository

Move into your project folder, then run:

``` bash
git init
```

This command initializes a new Git repository in the current folder. Git
creates a hidden `.git` directory to store repository data and its
history.

For example:

``` bash
cd my-project
git init
```

### 3. Understand what happens after `git init`

Running `git init` prepares the folder for version control, but it does
**not** immediately start tracking every file. New files are initially
shown as **untracked** until you add them to Git's staging area.

For example, you can check the repository's status with:

``` bash
git status
```

Later, you can use `git add` to stage files and `git commit` to save a
snapshot of the staged changes in the repository's history.

## Key takeaways

-   **Git** is a version control system that records changes to files.
-   A **repository** contains project files and Git's version history.
-   `git --version` checks the installed Git version.
-   `git init` initializes a repository in the current folder.
-   The `.git` directory stores Git's internal repository data.
-   `git init` does not automatically track every file; files must be
    added before Git tracks their changes.
-   **GitHub, GitLab, and Bitbucket** are hosting services that can
    store remote Git repositories. Git and these hosting services are
    related, but they are not the same thing.



