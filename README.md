## How to use this template

Click on **Use this template** at the top of GitHub.

Create your new repository.

---
To keep it updated with the original template:


### 1.  
```bash
git remote add template https://github.com/fgbyte/waitlist-template.git
```
- This adds a new **remote** called `template` pointing to the original template repository.  
- You’ll now have two remotes: usually `origin` (your own repo) and `template` (the upstream template).


### 2.  
```bash
git fetch template
```
- This downloads all the branches and commits from the `template` remote into your local Git.  
- It doesn’t change your files yet — it just makes the template’s code available locally under references like `template/main`.


### 3.  
```bash
git merge template/main
```
- This merges the latest changes from the template’s `main` branch into your current branch (usually `main`).  
- If there are differences, Git will try to combine them.  
- If there are conflicts (same lines changed in both repos), you’ll need to resolve them manually before completing the merge.


---

💡 **Alternative:**  
Instead of `merge`, you can use:  
```bash
git rebase template/main
```  
This reapplies your commits on top of the template’s commits, giving you a cleaner history.

---
