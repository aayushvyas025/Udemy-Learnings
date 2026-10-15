
# Lifecycle and Working Flow of Git

The Git lifecycle or Working Flow refers to how files move through various states and operational areas used to manage version control. It is best understood through two core concepts: **File States** and **Operational Areas**.

## The 4 Operational Areas

Git uses four important operational areas to manage files, prepare changes, store project history, and collaborate with others.

| **Area** | **Purpose** | **Key Command / Concept** |
|---|---|---|
| **Working Directory** | Your local project directory where you create, delete, and modify files. | `git init` |
| **Staging Area (Index)** | The intermediate area where you select and prepare changes for the next snapshot. | `git add <file>` |
| **Local Repository** | The local Git database inside the `.git` directory that stores commits and project history. | `git commit -m "message"` |
| **Remote Repository** | A hosted repository, such as GitHub or GitLab, used for sharing and team collaboration. | `git push` |

### Working Flow

The typical workflow for saving and sharing changes follows this sequence:

1. **Working Directory:** Create or modify files.
2. **Staging Area:** Select changes using `git add`.
3. **Local Repository:** Record staged changes using `git commit`.
4. **Remote Repository:** Share local commits using `git push`.

> **Note:** These are operational areas, not file states. The remote repository is separate from your local environment, and `git push` transfers commits rather than individual unstaged files.

---

## The 4 Common File States

Within your local environment, Git tracks files according to their current status. The four commonly described file states are **Untracked, Unmodified, Modified, and Staged**.

### Git File Lifecycle Diagram

```mermaid
flowchart TD
    A["New File"] --> B["Untracked"]
    B -->|git add| C["Staged"]
    C -->|git commit| D["Committed Snapshot"]
    D --> E["Unmodified"]
    E -->|Edit File| F["Modified"]
    F -->|git add| C
    F -->|git restore| E
    C -->|git restore --staged| F

    style A fill:#e8f0fe,stroke:#4285f4,color:#1a1a1a
    style B fill:#fff3cd,stroke:#d6a100,color:#1a1a1a
    style C fill:#d1fae5,stroke:#059669,color:#1a1a1a
    style D fill:#ede9fe,stroke:#7c3aed,color:#1a1a1a
    style E fill:#d1fae5,stroke:#059669,color:#1a1a1a
    style F fill:#fee2e2,stroke:#dc2626,color:#1a1a1a
```

### Explanation of File States

- **Untracked:** A new file exists in the working directory, but Git is not tracking it yet.
- **Unmodified:** A tracked file's content in the working directory matches the version in the latest commit.
- **Modified:** A tracked file has been changed in the working directory, but its latest changes have not been staged.
- **Staged:** Changes have been added to the staging area using `git add` and are prepared for the next commit.

### What Happens After a Commit?

When you execute `git commit`, Git records the staged changes as a new snapshot in the local repository. If a tracked file's working copy matches that snapshot, its state becomes **Unmodified**.

Therefore, **Committed** describes the result of a commit operation rather than a separate ongoing file state.

---

## Essential Git Commands

| **Command** | **Purpose** |
|---|---|
| `git status` | Shows the current state of files in the working directory and staging area. |
| `git add <file>` | Stages a new file or changes to a tracked file. |
| `git add .` | Stages changes under the current directory, subject to Git's ignore rules. |
| `git commit -m "message"` | Records staged changes as a commit in the local repository. |
| `git restore <file>` | Discards unstaged changes to a tracked file by restoring it from the index. |
| `git restore --staged <file>` | Removes changes from the staging area while keeping the working-directory changes. |
| `git push` | Sends local commits to a configured remote repository. |
| `git fetch` | Downloads updates from a remote repository without integrating them into the current branch. |
| `git pull` | Fetches remote updates and integrates them into the current branch. |

> **Warning:** `git restore <file>` can permanently discard unstaged changes. Check `git status` before running it.

---

## Quick Mental Model

Remember the difference between Git's operational areas and file states:

- **Working Directory:** Where you create and modify files.
- **Staging Area:** Where you select changes for the next commit.
- **Local Repository:** Where Git stores committed snapshots and project history.
- **Remote Repository:** Where commits are shared for collaboration.

### The Core Workflow

```text
Working Directory
       |
       | git add
       v
Staging Area
       |
       | git commit
       v
Local Repository
       |
       | git push
       v
Remote Repository
```

**Key takeaway:** `git add` stages changes, `git commit` records a snapshot, and `git push` shares commits with a remote repository.


## Understanding the Workflow in Git

Understanding the workflow in Git is important because it helps us understand the different states our files go through as we make changes, prepare them for tracking, and save snapshots of our project.

Before exploring the Git workflow in depth, we should configure Git's global settings. This allows us to define our default commit identity and other preferences for the current operating system user.

### Global Configuration of Git

Global configuration in Git allows us to set preferences that apply to all repositories for the current operating system user account, unless overridden by more specific configuration settings.

These settings are commonly stored in a plain-text file named `.gitconfig`, located in the user's home directory.

| Operating System | Configuration File |
|---|---|
| macOS / Linux | `~/.gitconfig` |
| Windows | `C:\Users\<username>\.gitconfig` |

#### Commands Related to Global Configuration

To configure the global username and email address, run the following commands in a terminal or Git Bash.

```bash
# Set the global username
git config --global user.name "Your Name"

# Set the global email address
git config --global user.email "your.email@example.com"
```

Git uses these values as the default author name and email address for commits.

#### Verifying Global Configuration

To list all applicable configuration values:

```bash
git config --list
```

To list only the global configuration values:

```bash
git config --global --list
```

To check the configured username and email individually:

```bash
git config --global --get user.name
git config --global --get user.email
```

### Why Is Global Configuration Important?

- **Commit identity:** Defines the default author name and email recorded in commits.
- **Default preferences:** Lets us configure Git settings that apply across repositories.
- **Consistency:** Avoids repeating the same configuration in every repository.
- **Overrides:** Repository-specific settings can override global settings when needed.

**Important:** Global configuration does not track files or create commits. It configures Git's default identity and preferences. The actual workflow involves the working directory, staging area, and repository history.




