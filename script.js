function launchPage() {
    const selectedPage = document.getElementById('page-select').value;
    
    if (selectedPage) {
        window.open(selectedPage, '_blank');
    } else {
        alert('Please select a version to launch!');
    }
}
