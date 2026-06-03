# Git Branch Workflow

## Create a New Local Branch

```bash
# Check current branches
git branch

# Create and switch to a new branch
git checkout -b feature/my-new-branch

# Verify current branch
git branch
```

## Push Branch to Remote

```bash
# Push branch to remote and set upstream
git push -u origin feature/my-new-branch
```

After the first push, you can simply use:

```bash
git push
```

## Pull Latest Changes

```bash
# Pull latest changes from the current tracked branch
git pull
```

Or pull changes from a specific branch:

```bash
git pull origin main
```

## Switch Between Branches

```bash
# Switch to an existing branch
git checkout main

# Or using the newer command
git switch main
```

## View Branches

```bash
# Local branches
git branch

# Remote branches
git branch -r

# All branches
git branch -a
```

## Delete a Local Branch

```bash
git branch -d feature/my-new-branch
```

Force delete:

```bash
git branch -D feature/my-new-branch
```
