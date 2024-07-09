const newNoteButton = document.getElementById("new-note-button");
const cardContent = document.getElementById("card-content");

function initializeNote() {
    const newNote = document.createElement("div");
    newNote.classList.add("new-note");

    //append name field
    const nameField = document.createElement("input");
    nameField.type = "text";
    nameField.classList.add("note-name");
    newNote.appendChild(nameField);

    //append content field
    const contentField = document.createElement("textarea");
    contentField.classList.add("note-content");
    newNote.appendChild(contentField);

    cardContent.appendChild(newNote);
}

newNoteButton.addEventListener("click", initializeNote);
document.addEventListener("DOMContentLoaded", initializeNote);
