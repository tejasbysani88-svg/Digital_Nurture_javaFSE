# Git Hands-On Labs Execution Report

This report documents the automated execution of the Git Hands-On Labs.

- **User**: tejasbysani88-svg
- **Email**: tejasbysani88@gmail.com
- **Execution Date**: 2026-07-24 17:55:05
- **Repository Location**: D:\ai-content-generator\Mockito\Deepskilling\GIT\GitDemo

---

## Step 1.1: Check Git version
```bash
$ git --version
git version 2.53.0.windows.1
```

## Step 1.2: Configure User Name
```bash
$ git config --global user.name 'tejasbysani88-svg'
```

## Step 1.3: Configure User Email
```bash
$ git config --global user.email 'tejasbysani88@gmail.com'
```

## Step 1.4: Check Global Configuration
```bash
$ git config --global --list
user.email=tejasbysani88@gmail.com
user.name=tejasbysani88-svg
core.editor=notepad.exe
```

## Step 2.1: Configure core.editor to notepad
```bash
$ git config --global core.editor 'notepad.exe'
```

## Step 2.2: Verify default editor
```bash
$ git config --global core.editor
notepad.exe
```

## Step 3.1: Initialize Git Repository in GitDemo
```bash
$ git init
Initialized empty Git repository in D:/ai-content-generator/Mockito/Deepskilling/GIT/GitDemo/.git/
```

## Step 3.2: Check Git status before first commit
```bash
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	welcome.txt

nothing added to commit but untracked files present (use "git add" to track)
```

## Step 3.3: Add welcome.txt to staging
```bash
$ git add welcome.txt
```

## Step 3.4: Commit welcome.txt on default branch
```bash
$ git commit -m 'Initial commit - welcome.txt added'
[master (root-commit) c375da7] Initial commit - welcome.txt added
 1 file changed, 1 insertion(+)
 create mode 100644 welcome.txt
```

## Step 3.5: Rename default branch to master
```bash
$ git branch -M master
```

## Step 3.6: Verify hidden files in GitDemo
```bash
$ Get-ChildItem -Force
Directory: D:\ai-content-generator\Mockito\Deepskilling\GIT\GitDemo


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
da-h--        24-07-2026     17:55                .git                                                                 
-a----        24-07-2026     17:55             16 welcome.txt
```

## Step 3.7: Verify welcome.txt created
```bash
$ Get-ChildItem
Directory: D:\ai-content-generator\Mockito\Deepskilling\GIT\GitDemo


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----        24-07-2026     17:55             16 welcome.txt
```

## Step 3.8: Verify welcome.txt content
```bash
$ Get-Content welcome.txt
Welcome to Git
```

## Step 3.9: Check Git status
```bash
$ git status
On branch master
nothing to commit, working tree clean
```

## Step 4.1: Verify .gitignore content
```bash
$ Get-Content .gitignore
*.log
log/
logs/
*.orig
*.bak
```

## Step 4.2: Check Git status (verify log files/folders are ignored)
```bash
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore

nothing added to commit but untracked files present (use "git add" to track)
```

## Step 4.3: Add .gitignore to staging
```bash
$ git add .gitignore
Error/Warning:
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
```

## Step 4.4: Commit .gitignore
```bash
$ git commit -m 'Added .gitignore to ignore log files and folders'
[master e6d9f4b] Added .gitignore to ignore log files and folders
 1 file changed, 5 insertions(+)
 create mode 100644 .gitignore
```

## Step 5.1: Create branch GitNewBranch
```bash
$ git branch GitNewBranch
```

## Step 5.2: List branches
```bash
$ git branch -a
GitNewBranch
* master
```

## Step 5.3: Switch to GitNewBranch
```bash
$ git checkout GitNewBranch
Error/Warning:
Switched to branch 'GitNewBranch'
```

## Step 5.4: Add branch file to staging
```bash
$ git add branch_file.txt
```

## Step 5.5: Commit branch file
```bash
$ git commit -m 'Added branch_file.txt in GitNewBranch'
[GitNewBranch b9a9aca] Added branch_file.txt in GitNewBranch
 1 file changed, 1 insertion(+)
 create mode 100644 branch_file.txt
```

## Step 5.6: Check Git status in branch
```bash
$ git status
On branch GitNewBranch
nothing to commit, working tree clean
```

## Step 5.7: Switch back to master
```bash
$ git checkout master
Error/Warning:
Switched to branch 'master'
```

## Step 5.8: Diff between master and GitNewBranch
```bash
$ git diff master GitNewBranch
diff --git a/branch_file.txt b/branch_file.txt
new file mode 100644
index 0000000..f648d8f
--- /dev/null
+++ b/branch_file.txt
@@ -0,0 +1 @@
+This is a branch file
```

## Step 5.9: Merge GitNewBranch into master
```bash
$ git merge GitNewBranch
Updating e6d9f4b..b9a9aca
Fast-forward
 branch_file.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 branch_file.txt
```

## Step 5.10: View Git log graph
```bash
$ git log --oneline --graph --decorate
* b9a9aca (HEAD -> master, GitNewBranch) Added branch_file.txt in GitNewBranch
* e6d9f4b Added .gitignore to ignore log files and folders
* c375da7 Initial commit - welcome.txt added
```

## Step 5.11: Delete GitNewBranch
```bash
$ git branch -d GitNewBranch
Deleted branch GitNewBranch (was b9a9aca).
```

## Step 5.12: Check Git status after delete
```bash
$ git status
On branch master
nothing to commit, working tree clean
```

## Step 6.1: Verify master is clean
```bash
$ git status
On branch master
nothing to commit, working tree clean
```

## Step 6.2: Create branch GitWork
```bash
$ git branch GitWork
```

## Step 6.3: Switch to GitWork
```bash
$ git checkout GitWork
Error/Warning:
Switched to branch 'GitWork'
```

## Step 6.4: Add hello.xml in GitWork
```bash
$ git add hello.xml
Error/Warning:
warning: in the working copy of 'hello.xml', LF will be replaced by CRLF the next time Git touches it
```

## Step 6.5: Commit hello.xml in GitWork
```bash
$ git commit -m 'Added hello.xml in GitWork branch'
[GitWork a300e9d] Added hello.xml in GitWork branch
 1 file changed, 3 insertions(+)
 create mode 100644 hello.xml
```

## Step 6.6: Switch to master
```bash
$ git checkout master
Error/Warning:
Switched to branch 'master'
```

## Step 6.7: Add hello.xml in master
```bash
$ git add hello.xml
Error/Warning:
warning: in the working copy of 'hello.xml', LF will be replaced by CRLF the next time Git touches it
```

## Step 6.8: Commit hello.xml in master
```bash
$ git commit -m 'Added hello.xml in master branch'
[master fd2cd1d] Added hello.xml in master branch
 1 file changed, 3 insertions(+)
 create mode 100644 hello.xml
```

## Step 6.9: View Git log with all branches
```bash
$ git log --oneline --graph --decorate --all
* fd2cd1d (HEAD -> master) Added hello.xml in master branch
| * a300e9d (GitWork) Added hello.xml in GitWork branch
|/  
* b9a9aca Added branch_file.txt in GitNewBranch
* e6d9f4b Added .gitignore to ignore log files and folders
* c375da7 Initial commit - welcome.txt added
```

## Step 6.10: Diff master and GitWork
```bash
$ git diff master GitWork
diff --git a/hello.xml b/hello.xml
index 336533b..b422044 100644
--- a/hello.xml
+++ b/hello.xml
@@ -1,3 +1,3 @@
 <welcome>
-  <message>Hello from master branch</message>
+  <message>Hello from GitWork branch</message>
 </welcome>
```

## Step 6.11: Merge GitWork into master (expect conflict)
```bash
$ git merge GitWork
Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.
```

## Step 6.12: View hello.xml content with conflict markers
```bash
$ Get-Content hello.xml
<welcome>
<<<<<<< HEAD
  <message>Hello from master branch</message>
=======
  <message>Hello from GitWork branch</message>
>>>>>>> GitWork
</welcome>
```

## Step 6.13: Add resolved hello.xml
```bash
$ git add hello.xml
Error/Warning:
warning: in the working copy of 'hello.xml', LF will be replaced by CRLF the next time Git touches it
```

## Step 6.14: Commit merge resolution
```bash
$ git commit -m 'Resolved merge conflict in hello.xml'
[master 8dfbd29] Resolved merge conflict in hello.xml
```

## Step 6.15: Check Git status (verify hello.xml.orig is ignored)
```bash
$ git status
On branch master
nothing to commit, working tree clean
```

## Step 6.16: Delete branch GitWork
```bash
$ git branch -d GitWork
Deleted branch GitWork (was a300e9d).
```

## Step 6.17: View final log
```bash
$ git log --oneline --graph --decorate
*   8dfbd29 (HEAD -> master) Resolved merge conflict in hello.xml
|\  
| * a300e9d Added hello.xml in GitWork branch
* | fd2cd1d Added hello.xml in master branch
|/  
* b9a9aca Added branch_file.txt in GitNewBranch
* e6d9f4b Added .gitignore to ignore log files and folders
* c375da7 Initial commit - welcome.txt added
```

