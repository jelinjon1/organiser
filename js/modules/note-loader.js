const sidebarElement = document.getElementById("sidebar");

document.addEventListener("DOMContentLoaded", loadNotes);

function loadNotes() {
    const note = {
        name: "test note",
        content: "cheche bru",
    };

    localStorage.setItem("notes", JSON.stringify(note));

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log(notes);
}
