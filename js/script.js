var button_write = document.querySelector(".button-write");
var write_us = document.querySelector(".write-us");
var button_close_write = document.querySelector(".button-close-write");
var overlay_write = document.querySelector(".pop-up-overlay");
var form_write = document.querySelector(".write-form");
var form_name = document.querySelector(".form-name");
var form_mail = document.querySelector(".form-mail");
var form_letter = document.querySelector(".form-letter");

var button_close_map = document.querySelector(".button-close-map");
var overlay_map = document.querySelector(".pop-up-overlay");
var button_action = document.querySelector(".button-action");
var map_large = document.querySelector(".map-large");
var button_map = document.querySelector(".button-map");

button_write.addEventListener ("click", function(event) {
  write_us.classList.add("write-us-open");
  overlay_write.classList.add("pop-up-overlay-open");
  if (!storage_name && !storage_mail) {
    form_name.focus();
  }
    else if (storage_name && !storage_mail) {
      form_name.value = storage_name;
      form_mail.focus();
    }
      else {
        form_name.value = storage_name;
        form_mail.value = storage_mail;
        form_letter.focus();
      }
});

var storage_name = localStorage.getItem("form-name");
var storage_mail = localStorage.getItem("form-mail");

form_write.addEventListener ("submit", function(event) {
  if (!form_name.value || !form_mail.value) {
    event.preventDefault();
    write_us.classList.remove("write-us-error");
    write_us.offsetWidth = write_us.offsetWidth;
    write_us.classList.add("write-us-error");
  }
   else {
    localStorage.setItem("form-name", form_name.value);
    localStorage.setItem("form-mail", form_mail.value);
  }

  if (!form_name.value) {
    form_name.classList.add("form-error");
  }
    else {
     form_name.classList.remove("form-error");
    }

  if (!form_mail.value) {
    form_mail.classList.add("form-error");
  }
    else {
     form_mail.classList.remove("form-error");
    }
});

button_close_write.addEventListener ("click", function(event) {
  write_us.classList.remove("write-us-open");
  write_us.classList.remove("write-us-error");
  overlay_write.classList.remove("pop-up-overlay-open");
  form_name.classList.remove("form-error");
  form_mail.classList.remove("form-error");
});

button_map.addEventListener ("click", function(event) {
  event.preventDefault();
  map_large.classList.add("map-large-open");
  overlay_map.classList.add("pop-up-overlay-open");
});

button_action.addEventListener ("click", function(event) {
  map_large.classList.add("map-large-open");
  overlay_map.classList.add("pop-up-overlay-open");
});

button_close_map.addEventListener ("click", function(event) {
  map_large.classList.remove("map-large-open");
  overlay_map.classList.remove("pop-up-overlay-open");
});

window.addEventListener ("keydown", function(event) {
  if (event.keyCode === 27) {
    if (write_us.classList.contains("write-us-open")) {
      write_us.classList.remove("write-us-open");
      write_us.classList.remove("write-us-error");
      overlay_write.classList.remove("pop-up-overlay-open");
      form_name.classList.remove("form-error");
      form_mail.classList.remove("form-error");
    }
    if (map_large.classList.contains("map-large-open")) {
      map_large.classList.remove("map-large-open");
      overlay_map.classList.remove("pop-up-overlay-open");
    }
  }
});
