// Get elements from the DOM
const registrationForm = document.getElementById('registrationForm');
const registrationMessage = document.getElementById('registrationMessage');
const voteCard = document.getElementById('voteCard');
const voteForm = document.getElementById('voteForm');
const voteMessage = document.getElementById('voteMessage');
const candidateSelect = document.getElementById('candidateSelect');
const showResultsButton = document.getElementById('showResultsButton');
const resultsContainer = document.getElementById('results');

let registeredVoters = []; // Store registered voters
let votes = { "Candidate 1": 0, "Candidate 2": 0, "Candidate 3": 0 }; // Store votes

// Registration Form Submit Event
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const voterName = document.getElementById('voterName').value;
    const voterEmail = document.getElementById('voterEmail').value;

    // Check if the voter is already registered
    if (registeredVoters.some(voter => voter.email === voterEmail)) {
        registrationMessage.style.display = 'block';
        registrationMessage.className = 'alert alert-warning';
        registrationMessage.textContent = 'You are already registered!';
    } else {
        // Register the voter
        registeredVoters.push({ name: voterName, email: voterEmail });
        registrationMessage.style.display = 'block';
        registrationMessage.className = 'alert alert-success';
        registrationMessage.textContent = 'Registration successful! You can now vote.';
        voteCard.style.display = 'block'; // Show vote form
        registrationForm.reset(); // Clear the registration form
    }
});

// Vote Form Submit Event
voteForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const selectedCandidate = candidateSelect.value;
    votes[selectedCandidate]++; // Increment the vote count for the selected candidate

    voteMessage.style.display = 'block';
    voteMessage.className = 'alert alert-success';
    voteMessage.textContent = `Thank you for voting for ${selectedCandidate}!`;

    voteForm.reset(); // Clear the vote form
});

// Show Results Button Event
showResultsButton.addEventListener('click', () => {
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `
        <h5>Voting Results:</h5>
        <p>Candidate 1: ${votes["Candidate 1"]} votes</p>
        <p>Candidate 2: ${votes["Candidate 2"]} votes</p>
        <p>Candidate 3: ${votes["Candidate 3"]} votes</p>
    `;
});
