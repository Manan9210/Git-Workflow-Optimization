# Intelligent Git Workflow Optimization for Full Stack Development

## 1. Project objective
Compare Git Flow, GitHub Flow and Trunk-Based Development using:
- Merge conflicts
- Code integration time
- Commit frequency
- Collaboration efficiency
- Deployment failure rate

This repository includes a small browser-based dashboard for entering and comparing measurements.

**Important:** The values in `data/sample-metrics.csv` and the dashboard are illustrative sample values. They are included to demonstrate the interface and analysis. Do not present them as measurements you personally collected. Run the practical trials below and replace them with your actual observations.

## 2. Requirements
- Windows / macOS / Linux
- Git installed
- VS Code (recommended)
- A browser
- GitHub account (optional for local demonstration; useful for submission)

No Node.js, database, Docker or Jenkins is required.

## 3. Run the dashboard
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Use **Update trial measurements** to enter observations. The table and summary update automatically.

## 4. Practical Git demonstration
Create a separate practice repository (or use a copy of this project). Run these commands in the VS Code terminal.

### A. Initialize
```bash
git init
git add .
git commit -m "Initial project setup"
git branch -M main
```

### B. GitHub Flow demonstration
```bash
git switch -c feature/github-flow-demo
echo "GitHub Flow demo" > github-flow-demo.txt
git add .
git commit -m "Add GitHub Flow demo"
git switch main
git merge feature/github-flow-demo
```
Explain that a short-lived feature branch is reviewed and merged into `main`. On GitHub, you can push the branch and create a Pull Request instead of merging locally.

### C. Git Flow demonstration (simplified)
```bash
git switch -c develop
git switch -c feature/git-flow-demo
echo "Git Flow demo" > git-flow-demo.txt
git add .
git commit -m "Add Git Flow demo"
git switch develop
git merge feature/git-flow-demo
```
Explain the separate `develop` integration branch and feature branches. A full Git Flow model can also include release and hotfix branches.

### D. Trunk-Based Development demonstration (simplified)
```bash
git switch main
echo "Small trunk-based change" > trunk-demo.txt
git add .
git commit -m "Add small trunk-based change"
```
Explain that small, frequent changes are integrated into the shared trunk (`main`). In a team, use automated tests and feature flags to reduce risk.

> These are simplified local demonstrations of the branching approaches, not a full multi-developer production simulation.

## 5. Collect your own measurements
For a fair mini-experiment:
1. Use the same small sample application and the same change task for each workflow.
2. Repeat each workflow at least three times if time permits.
3. Record the number of merge conflicts.
4. Measure the time from starting integration to a successful integrated build.
5. Count commits made during the trial.
6. Ask each participant to rate collaboration from 1 (poor) to 5 (excellent), or clearly state that it is your own assessment.
7. Record failed integration/deployment attempts and calculate:  
   `failure rate (%) = failed attempts / total attempts × 100`
8. Enter the observed values in the dashboard and update `data/sample-metrics.csv`.

Do not invent results. If you cannot run a real deployment, state that deployment failure rate was not measured and explain the limitation.

## 6. Workflow comparison (theory)
| Workflow | Advantages | Limitations |
|---|---|---|
| Git Flow | Clear release management; useful for scheduled releases | More branches and merge overhead |
| GitHub Flow | Simple; pull-request review; suitable for continuous delivery | Requires disciplined review and testing |
| Trunk-Based | Frequent integration; reduces long-lived branch divergence | Needs strong automated testing and small changes |

## 7. Conclusion template
Choose the workflow based on your actual observations. For a small web team deploying frequently, GitHub Flow is often a practical starting point because it uses short-lived branches and pull-request review. Trunk-Based Development can work very well when automated testing and team practices are mature. Git Flow may suit projects with planned release cycles and maintenance branches.

## 8. Viva questions
1. **What is version control?** A system that tracks changes to files over time.
2. **What is Git?** A distributed version control system.
3. **What is a branch?** An independent line of development.
4. **What is a merge conflict?** A situation where Git cannot automatically combine changes.
5. **What is Git Flow?** A branching model with main, develop, feature, release and hotfix branches.
6. **What is GitHub Flow?** A lightweight model based on feature branches, pull requests and merging into main.
7. **What is Trunk-Based Development?** A practice where developers integrate small changes frequently into a shared main branch.
8. **What is a pull request?** A request to review and merge proposed code changes.
9. **Why are frequent commits useful?** They make changes smaller and easier to review or troubleshoot.
10. **Which workflow is best?** It depends on team size, release process, testing maturity and deployment frequency.
11. **How is deployment failure rate calculated?** Failed deployments divided by total deployment attempts, multiplied by 100.
12. **How does this project support DevOps?** It studies collaboration and continuous integration practices that help teams deliver software reliably.

## 9. Suggested screenshots for submission
- Project dashboard opened in browser
- Git repository initialized and initial commit
- Feature branch and commit history
- Merge into main / develop
- Dashboard with your own measured values
- GitHub repository page (if published)

## 10. GitHub upload
Create an empty GitHub repository, then run:
```bash
git remote add origin https://github.com/YOUR-USERNAME/git-workflow-optimization.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username.
