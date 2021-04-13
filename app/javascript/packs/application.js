// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

window.Noty = require("noty")

$(document).ready(() => {
    $('.toggle').on('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        $('#' + e.target.getAttribute('aria-controls')).toggleClass('is-hidden');
    })
})


Rails.start()
Turbolinks.start()
ActiveStorage.start()
