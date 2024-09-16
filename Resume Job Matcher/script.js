document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById("resume-upload");
    const file = fileInput.files[0];
    const fileError = document.getElementById("file-error");
    
    if (!file || !file.name.endsWith('.pdf')) {
        fileError.textContent = "Please upload a valid PDF file.";
        return;
    }
    
    fileError.textContent = "";  // Clear any previous errors

    // Simulate ATS score and job matching logic
    const atsScore = calculateATSScore(file);
    const matchedJob = matchJobRole(file);

    // Display the results
    document.getElementById("ats-score").textContent = atsScore + "%";
    document.getElementById("matched-job").textContent = matchedJob;

    document.getElementById("result").style.display = "block";
});

// Simulate ATS score calculation
function calculateATSScore(file) {
    // For simplicity, return a random score between 50-100
    return Math.floor(Math.random() * 51) + 50;
}

// Simulate job matching based on file content and selected job role
function matchJobRole(file) {
    const jobDropdown = document.getElementById("job-dropdown");
    const selectedJob = jobDropdown.options[jobDropdown.selectedIndex].text;
    return selectedJob;
}