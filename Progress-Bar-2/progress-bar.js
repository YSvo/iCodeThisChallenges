function calcProgress() {
  const completionRate = Math.round(Math.random() * 100);
  document.getElementById("completion-amount").innerHTML = `${completionRate}&#37;`;
  document.getElementById("progress-bar").style.width = completionRate + "%";
}