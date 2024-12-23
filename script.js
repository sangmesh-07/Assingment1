function closeModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function showAssignmentInfo() {
    document.getElementById('assignmentModal').style.display = 'block';
}

function closeAssignmentModal() {
    document.getElementById('assignmentModal').style.display = 'none';
}
function showProfile(profileIndex) {
    switch (profileIndex) {
        case 0:
            window.location.href = "sanath.html";
            break;
        case 1:
            window.location.href = "niteesh.html";
            break;
        case 2:
            window.location.href = "sangmesh.html";
            break;
        case 3:
            window.location.href = "srinivas.html";
            break;
        case 4:
            window.location.href = "srujan.html";
            break;
        case 5:
            window.location.href = "yeshwanth.html"; 
            break;
        default:
            alert("Profile not available!");
            break;
    }
}


