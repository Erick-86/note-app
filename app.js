"use strict";

//Bg Overlay
//Confirm delete overlay
const overlay = document.getElementById("overlay"),
  confirmDelOverlay = document.getElementById("confirm-del-overlay");

//Btn to add new note
const addNoteBtn = document.getElementById("add-note-btn");

//Note forms modal
const noteForms = document.getElementById("note--form");

//Header counter
const headerCounter = document.getElementById("header-counter");

//Save and Delete btns
const saveBtn = document.getElementById("save-btn"),
  delBtn = document.getElementById("del-btn");

//Confirm delete modal
const confirmDelModal = document.getElementById("confirm-del");

//Confirming delet btns
const confirmDelCont = document.getElementById("confirm-del--cont"),
  confirmDelCanc = document.getElementById("confirm-del--canc");

//Note Header Limit
const noteHeader = document.getElementById("note-header");

//Open Note forms when the (+) icon is click
addNoteBtn.addEventListener("click", addNewNoteModal);

function addNewNoteModal() {
  noteForms.classList.add("show-modal");
  overlay.style.display = "block";
}

//Confirming Delete
delBtn.addEventListener("click", confirmDelete);

function confirmDelete() {
  confirmDelModal.style.display = "block";
  confirmDelOverlay.style.display = "block";
  confirmDelOverlay.style.zIndex = 1;
}

//Confirm Delete (yes)
confirmDelCont.addEventListener("click", deleteNote);

function deleteNote() {
  confirmDelModal.style.display = "none";
  confirmDelOverlay.style.display = "none";
  overlay.style.display = "none";
  noteForms.classList.remove("show-modal");
  noteHeader.value = "";
  noteTextarea.value = "";
  noteCharsCount.innerText = 200;
  headerCounter.innerText = 20;
}

//Confirm Delete (no)
confirmDelCanc.addEventListener("click", cancDeleteNote);

function cancDeleteNote() {
  confirmDelModal.style.display = "none";
  confirmDelOverlay.style.display = "none";
}

noteHeader.addEventListener("input", () => {
  let noteHeaderLimit = noteHeader.maxLength;
  let inputChars = noteHeader.value.length;
  console.log(inputChars);

  if (inputChars < 0) {
    noteHeaderLimit - inputChars;
  }

  let charLentgh = noteHeaderLimit - inputChars;

  headerCounter.textContent = charLentgh;
});

//Note Characters counts
const noteCharsCount = document.getElementById("note-chars-count");

//Note textarea
const noteTextarea = document.getElementById("note-textarea");

noteTextarea.addEventListener("input", () => {
  let noteLimit = noteTextarea.maxLength;
  let inputChars = noteTextarea.value.length;

  if (inputChars < 0) {
    noteLimit - inputChars;
  }

  let charLentgh = noteLimit - inputChars;

  noteCharsCount.textContent = charLentgh;
});

// //Adding a note
// let notesAdded = [];

// saveBtn.addEventListener("click", addNewNote);

// function addNewNote() {

// }
