// Simulate the Donate Now button functionality
function donateNow() {
    alert("Redirecting to donation form...");
  }
  
  // Find Nearby Blood Banks
  function findNearbyBloodBanks() {
    // Simulate displaying a map or nearby blood banks list
    document.getElementById('map').innerHTML = "Map and list of nearby blood banks would be here.";
  }
  
  // Navigate to Emergency Blood Requirements
  function navigateToEmergencyBloodRequirements() {
    alert("Navigating to emergency blood requirements page...");
  }
  
  // Check Eligibility
  function checkEligibility(event) {
    event.preventDefault();
    const form = document.getElementById("eligibility-form");
    const isEligible = [...form.elements].every((el) => el.checked);
    const result = document.getElementById("eligibility-result");
  
    if (isEligible) {
      result.innerText = "You are eligible to donate blood!";
      result.style.color = "green";
    } else {
      result.innerText = "You may not be eligible to donate blood.";
      result.style.color = "red";
    }
  }
  
  // Emergency Blood Request Alert
  function alertEmergencyBloodRequest() {
    alert("Emergency blood request form will open here.");
  }
  