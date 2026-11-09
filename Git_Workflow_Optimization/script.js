const sampleData = [
  {workflow:"Git Flow", conflicts:6, time:55, commits:3, collaboration:3.4, failures:12},
  {workflow:"GitHub Flow", conflicts:3, time:25, commits:6, collaboration:4.4, failures:6},
  {workflow:"Trunk-Based Development", conflicts:2, time:15, commits:9, collaboration:4.1, failures:4}
];
let measurements = sampleData.map(item => ({...item}));
const body = document.getElementById("comparisonBody");
const summary = document.getElementById("summary");
const status = document.getElementById("status");

function render() {
  body.innerHTML = "";
  measurements.forEach(item => {
    const row = document.createElement("tr");
    [item.workflow,item.conflicts,item.time,item.commits,item.collaboration,item.failures].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    body.appendChild(row);
  });
  const best = [...measurements].sort((a,b) => (a.time+a.conflicts*3+a.failures*2)-(b.time+b.conflicts*3+b.failures*2))[0];
  summary.textContent = `Based on the current entered values, ${best.workflow} has the lowest combined score for integration time, merge conflicts and deployment failures. This is a simple demonstration score, not a universal ranking. Consider team size, release frequency and testing maturity when selecting a workflow.`;
}
document.getElementById("dataForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("workflow").value;
  const values = {
    workflow:name,
    conflicts:Number(document.getElementById("conflicts").value),
    time:Number(document.getElementById("time").value),
    commits:Number(document.getElementById("commits").value),
    collaboration:Number(document.getElementById("collaboration").value),
    failures:Number(document.getElementById("failures").value)
  };
  const index = measurements.findIndex(item => item.workflow === name);
  if(index >= 0) measurements[index] = values;
  else measurements.push(values);
  render();
  status.textContent = `${name} measurements updated.`;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  measurements = sampleData.map(item => ({...item}));
  render();
  status.textContent = "Illustrative sample data restored.";
});
render();
