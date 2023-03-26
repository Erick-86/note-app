"use strict";

//Bg Overlay
//Confirm delete overlay
const overlay = document.getElementById("overlay"),
  confirmDelOverlay = document.getElementById("confirm-del-overlay");

//Btn to add new note
const addNoteBtn = document.querySelectorAll("#add-note-btn");

//Note forms modal
const noteForms = document.getElementById("note--form");

//Header counter
const headerCounter = document.getElementById("header-counter");

//Save and Delete btns
const saveBtn = document.getElementById("save-btn"),
  delNoteBtn = document.getElementById("del-btn");

//Confirm delete modal
const confirmDelModal = document.getElementById("confirm-del");

//Confirming delet btns
const confirmDelCont = document.getElementById("confirm-del--cont"),
  confirmDelCanc = document.getElementById("confirm-del--canc");

//Note Header Limit
const noteHeader = document.getElementById("note-header");

//Note header on delete modal
const noteHeader2Container = document.querySelector(".note-header2-container");
const noteHeader2 = document.getElementById("note-header2");

//Open Note forms when the (+) icon is click
for (let i = 0; i < addNoteBtn.length; i++) {
  addNoteBtn[i].addEventListener("click", addNewNoteModal);
}

function addNewNoteModal() {
  noteForms.classList.add("show-modal");
  overlay.style.display = "block";
}

//Confirming Delete
delNoteBtn.addEventListener("click", confirmDelete);

function confirmDelete() {
  confirmDelModal.style.display = "block";
  confirmDelOverlay.style.display = "block";
  confirmDelOverlay.style.zIndex = 3;
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
  saveBtn.disabled = true;
  saveBtn.classList.remove("allow-save-btn");
  noteHeader2Container.style.display = "none";
}

//Confirm Delete (no)
confirmDelCanc.addEventListener("click", cancDeleteNote);

function cancDeleteNote() {
  confirmDelModal.style.display = "none";
  confirmDelOverlay.style.display = "none";
  noteHeader2Container.style.display = "none";
}

noteHeader.addEventListener("input", () => {
  let noteHeaderLimit = noteHeader.maxLength;
  let inputChars = noteHeader.value.length;

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

//Disabling the save btn if the header and the text value is 0
noteTextarea.addEventListener("input", enableSaveBtn);
noteHeader.addEventListener("input", enableSaveBtn);

function enableSaveBtn() {
  if (noteHeader.value.length > 0 && noteTextarea.value.length > 0) {
    saveBtn.disabled = false;
    saveBtn.classList.add("allow-save-btn");
  } else {
    saveBtn.disabled = true;
    saveBtn.classList.remove("allow-save-btn");
  }
}

//Adding new notes when the save btn is clicked
saveBtn.addEventListener("click", saveNote);

function saveNote() {
  let parentEl = document.getElementById("notes-list-container");

  //Creating li, p and h2 elements
  const noteList = document.createElement("li");
  const noteBody = document.createElement("p");
  const noteHead = document.createElement("h2");

  //Delete and Edit btns
  const editAndDelBtnsContainer = document.createElement("div");
  const editAndDelBtns = document.createElement("div");
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  //Giving the btns classes
  noteList.classList.add("note-list");
  editAndDelBtns.classList.add("btns-container");
  editBtn.classList.add("edit-btn");
  delBtn.classList.add("del-btn");
  editAndDelBtnsContainer.classList.add("btns-main-container");

  //Btns text contents
  editBtn.innerText = "edit";
  delBtn.innerText = "Delete";

  //Appending the elements
  parentEl.appendChild(noteList);
  noteList.appendChild(noteHead);
  noteList.appendChild(noteBody);
  noteList.appendChild(editAndDelBtnsContainer);

  //Appending the del nd edit btns in the div
  editAndDelBtnsContainer.appendChild(editAndDelBtns);
  editAndDelBtns.appendChild(editBtn);
  editAndDelBtns.appendChild(delBtn);

  //Assigning the text contents of the h2 and p to note header and note body values
  noteHead.innerText = noteHeader.value;
  noteBody.innerText = noteTextarea.value;

  //Removing the modal
  noteForms.classList.remove("show-modal");

  //Removing the overlay
  overlay.style.display = "none";

  //Note header and textarea values set to empty
  noteHeader.value = "";
  noteTextarea.value = "";

  //Assigning the initial values when of the counters when a note is save
  noteCharsCount.innerText = 200;
  headerCounter.innerText = 20;

  //Displaying notes when note list length is 0 or greater
  const notesAdded = document.querySelectorAll(".note-list");
  const addNoteContainer = document.getElementById("add-note-contain");
  const notesListContainer = document.getElementById("notes_list");
  if (notesAdded.length >= 1) {
    addNoteContainer.style.display = "none";
    notesListContainer.style.display = "block";
  }

  //Deleting notes
  //Loop through the li elements to get their del btns
  //Each btn will trigger the confirm delete node
  for (let i = 0; i < notesAdded.length; i++) {
    const delAddedNoteBtn = notesAdded[i].querySelector(".del-btn");
    let warnNoteHeader = notesAdded[i].querySelector("h2").innerText;

    delAddedNoteBtn.addEventListener("click", () => {
      confirmDelete();

      //Showing the note header on the confirm warning modal
      noteHeader2Container.style.display = "block";
      noteHeader2.innerText = warnNoteHeader;
    });
    }
    
    //Disable the save btn when a note is saved
    saveBtn.disabled = true;
    saveBtn.classList.remove("allow-save-btn");
}
