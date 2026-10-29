const programgrid = document.getElementById("programgrid");
const progcount = document.getElementById("programcoun");
const seerchformysws = document.getElementById("searchform");
const searchinput = document.getElementById("srinput");
const categoryfilter = document.getElementById("categoryfilter");
const resultsts = document.getElementById("resultstatus");
const apiURL = "https://raw.githubusercontent.com/hackclub/YSWS-Catalog/main/api.json";
let programs = [];
async function loadprogs() {
    resultsts.textContent = "Loading programs...";
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("Failed to get your ysws");
        }
        const data = await response.json();
        programs = [
            ...data.limitedTime,
            ...data.recentlyEnded,
            ...data.indefinite
        ];
        showprogs();
    }catch (error){
        console.log("error on best", error);
        resultsts.textContent = "could not load";
    }
}
function showprogs() {
    programgrid.innerHTML = "";
    programs.forEach(function (program) {
        const card = document.createElement("div");
        card.className = "program-card";
        const title = document.createElement("h3");
        title.textContent = program.name || "Untitled Program";
        const description = document.createElement("p");
        description.textContent = program.description || "No Description available.";
        const link = document.createElement("a");
        link.textContent = "Learn more about this";
        link.href = program.website || "#";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);
        programgrid.appendChild(card);
    });
    if(progcount){
        progcount.textContent = programs.length;
    }
    resultsts.textContent = programs.length + " program Found"
}
loadprogs();