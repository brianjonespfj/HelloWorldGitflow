# Gitflow Walkthrough for Hello World App

This document provides a step-by-step walkthrough of using Gitflow for a typical project lifecycle, including initializing Gitflow, managing features, releases, hotfixes, and bugfixes. Each step includes the standard Gitflow command and branch naming conventions.

---

## 1. Initialize Gitflow

**Command:**
```
git flow init
```

- Sets up `develop` branch from `master`.
- Standard branch prefixes:
  - Feature: `feature/`
  - Release: `release/`
  - Hotfix: `hotfix/`
  - Bugfix: `bugfix/`

---

## 2. Create Feature 1 from Develop and Complete Feature

**Start Feature:**
```
git flow feature start feature-1
```

**Work on feature, commit changes.**

**Finish Feature (merge to develop):**
```
git flow feature finish feature-1
```

---

## 3. Create Release 1 from Develop and Complete Release

**Start Release:**
```
git flow release start 1.0.0
```

**Work on release, update version, etc.**

---

### Create Bug on Release Branch and Fix It

**Start Bugfix (on release branch):**
```
git flow bugfix start bug-1
```

**Work on bugfix, commit changes.**

**Finish Bugfix (merge to release branch):**
```
git flow bugfix finish bug-1
```

---

**Finish Release (merge to master and develop, tag, PRs):**
```
git flow release finish 1.0.0
```

---

## 4. Create Feature 2 from Develop and Complete Feature

**Start Feature:**
```
git flow feature start feature-2
```

**Work on feature, commit changes.**

**Finish Feature:**
```
git flow feature finish feature-2
```

---

## 5. Create Feature 3 from Develop

**Start Feature:**
```
git flow feature start feature-3
```

**Work on feature, commit changes.**

---

## 6. Create Hotfix from Master (from Release 1 label)

**Start Hotfix:**
```
git flow hotfix start 1.0.1
```

**Work on hotfix, commit changes.**

---

## 7. Create Bugfix from Hotfix Branch and Complete Bugfix

**Start Bugfix:**
```
git flow bugfix start bug-1
```

**Work on bugfix, commit changes.**

**Finish Bugfix:**
```
git flow bugfix finish bug-1
```

---

## 8. Complete Hotfix (merge back to master and develop)

**Finish Hotfix:**
```
git flow hotfix finish 1.0.1
```

---

## 9. Complete Feature 3

**Finish Feature:**
```
git flow feature finish feature-3
```

---

## 10. Create Release v2 from Develop Branch

**Start Release:**
```
git flow release start 2.1.0
```

**Work on release, update version, etc.**

**Finish Release:**
```
git flow release finish 2.1.0
```

---

## Notes
- Each `finish` command merges the branch back to its parent (feature to develop, release/hotfix to master and develop).
- PRs may be created for merges if using a remote repository and code review is required.
- In Gitflow, the "finish" command for a feature, bugfix, or hotfix automates merging the branch back to its parent branch (e.g., feature to develop, hotfix to master and develop). However, in teams using pull requests (PRs) for code review, the process is slightly different:
  Instead of running "git flow feature finish" (or bugfix/hotfix finish), you push your branch to the remote repository.
  1. You create a PR from your branch (e.g., feature/feature-1) to the target branch (e.g., develop).
  2. The team reviews the PR, and once approved, the branch is merged via the PR interface.
  3. After merging, you can delete the branch locally and remotely.
  4. Optionally, you can run "git flow feature finish" locally to clean up the branch, but the actual merge is handled by the PR.
  Summary: With PRs, the merge step is performed via the PR interface, not by the "finish" command. The "finish" command is mainly for local branch cleanup after the PR is merged. This ensures code review and collaboration before integration.
- Tags are created for releases and hotfixes.
- Branch names follow standard Gitflow patterns: `feature/feature-1`, `release/2.0.0`, `hotfix/1.0.1`, `bugfix/bug-1`.

---

This walkthrough covers the full Gitflow lifecycle for a project, including features, releases, hotfixes, and bugfixes, using standard commands and branch naming conventions.
