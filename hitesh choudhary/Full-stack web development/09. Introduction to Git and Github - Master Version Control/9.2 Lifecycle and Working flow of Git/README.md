# Lifecycle and Working Flow of Git 
The Git lifecycle or Working Flow refers to the journey files through various states and structural areas where you manage version control. It is best understood by looking two core concepts: **File States** and **Operational Areas**. 

## The 4 Operational Areas 
Files moves sequentially across four key environments as they transition from a local concept into version history: 

| **Area**              | **Purpose**                                                                     | **Key Concept**               |
|-----------------------|---------------------------------------------------------------------------------|-------------------------------|
|**Working  Directory** |Your local repo where you can create, delete and modify files                    |Initialized via git init       |
|**Staging Area**(index)|Your middle ground where you prepare and package files for the next snapshot     | git add <file>                | 
|**Local Repository**   |Your local machine's hidden permanent database (.git) storing project history.   | git commit -m "msg"           | 
|**Remote Repository**  |The hosted server (e.g., GitHub, GitLab) used for sharing and team collaboration.| git push                      | 
                                  

## The 5  File States 
Within your local environment, git tracks every individual file's status through a distinct lifecycle: 
 
```text
       ┌─────────────┐
       │  New File   │
       └──────┬──────┘
              │
              ▼
       ┌─────────────┐
       │  Untracked  │
       └──────┬──────┘
              │ git add
              ▼
       ┌─────────────┐
       │   Staged    │
       └──────┬──────┘
              │ git commit
              ▼
       ┌─────────────┐
       │  Committed  │
       └─────────────┘
```

- **Untracked**: The file is new in the working directory or folder, and git doesn't know it exists. 
- **Tracked/Modified**: The file is known to git, and its content exactly matches the last saved snapshot.
- **Modified**: A tracked file has been changed in the working directory, but the changes haven't been staged yet. 
- **Staged**:  The modified file has been marked via git add to be included in the next snapshot.
- **Committed**:  The staged files are successfully saved into the Local Repository via git commit.


