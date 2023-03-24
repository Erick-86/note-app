"use strict";

//Bg Overlay
const overlay = document.getElementById("overlay")

//Btn to add new note
const addNoteBtn = document.getElementById("add-note-btn");

//Note forms modal
const noteForms = document.getElementById("note--form");

//Header counter
const headerCounter = document.getElementById("header-counter");

//Note header input
const noteHeader = document.getElementById("note-header");

//Note Characters counts
const noteCharsCount = document.getElementById("note-chars-count");

//Note textarea
const noteTextarea = document.getElementById("note-textarea");

//Save and Delete btns
const saveBtn = document.getElementById("save-btn"),
      delBtn = document.getElementById("del-btn");
      
//Open Note forms when the (+) icon is click

addNoteBtn.addEventListener("click", addNewNoteModal)

function addNewNoteModal() {
    noteForms.classList.add('show-modal')
    overlay.style.display = "block"
}

