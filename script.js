// Bish's WhatsApp number
var phone = "2349124989075";

// Opens WhatsApp with a message already typed
function openWhatsApp(message) {
  var link = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(link);
}

// Order buttons
function orderNow(product) {
  openWhatsApp("Hi Bish, I want to order the " + product);
}

// "Ask with a picture" button
function askWithPicture() {
  openWhatsApp("Hi Bish, I'm sending a picture of an item I'd like to ask about.");
}

// Creatives button
function askForDesign() {
  openWhatsApp("Hi Bish, I want a design for my brand.");
}