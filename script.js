document.addEventListener('DOMContentLoaded', (event) => {
    const notepad = document.getElementById('notepad');
    const saveBtn = document.getElementById('saveBtn');

    // Load saved note from localStorage
    if (localStorage.getItem('note')) {
        notepad.value = localStorage.getItem('note');
    }

    // Save note to localStorage on button click
    saveBtn.addEventListener('click', () => {
        localStorage.setItem('note', notepad.value);
        alert('Note saved!');
    });
});
