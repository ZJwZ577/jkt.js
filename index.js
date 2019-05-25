/**
 * ZJwZ577 <zywe2009@gmail.com>
 * Copyright (c) 2019 Ju kai te https://jukaite.com
 * http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 * jkt.js v0.4.5 at 13/05/2019
 *
 * Add to Home Screen
 *
 * A useful modern JavaScript solution for adding a progressive
 * web application (PWA) to the home screen of your mobile
 * iOS device.
 *
 * @param settings Initial settings.
 * @return {HTMLElement}
 *
 * @example
 * import AddToHomeScreen from "jkt.js";
 * AddToHomeScreen({
 *  brandName: "Demo",
 *  fontFamily: "Tahoma, sans-serif",
 *  backgroundColor: "red",
 *  color: "white"
 * });
 */
var AddToHomeScreen = function(settings = {}) {
  // Container styles
  var backgroundColor = settings.backgroundColor || "#f9f9f9";
  var padding = settings.padding || "10px";
  var shadowColor = settings.shadowColor || "#e9e9e9";
  var shadowSize = settings.shadowSize || "10px";
  // Content styles
  var fontFamily = settings.fontFamily || "-apple-system, sans-serif";
  var color = settings.color || "#5d5d5d";
  var fontSize = settings.fontSize || "0.9rem";
  // Content
  var brandName = settings.brandName || "";
  var logoImage =
    settings.logoImage ||
     `<svg viewport-fill="lightblue">
  <image x="74" y="25" width="200" height="200" href="icon.png" />
</svg>`;
  var htmlContent =
    settings.htmlContent ||
    `Install <strong>${brandName} web app</strong> on your iOS device: tap share and <strong>Add to Home Screen</strong> ↓`;
  // Define iOS User-Agent variable
  var iOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  // Define standalone mode variable
  var standalone =
    "standalone" in window.navigator && window.navigator.standalone;
  // Check localStorage before render jkts container
  if (iOS && !standalone && !window.localStorage.jkts_message) {
    // Define container variable
    var div = document.createElement("div");
    // Define style variable
    var style = document.createElement("style");
    // Create styles
    style.innerHTML = `
      .jkts__container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        box-sizing: border-box;
        box-shadow: ${shadowColor} 0 0 ${shadowSize};
        background-color: ${backgroundColor};
        padding: ${padding};
        width: 100%;
        bottom: 0;
        right: 0;
        left: 0;
      }
      .jkts__container .jkts__logo {
        padding: ${padding};
      }
      .jkts__container .jkts__text {
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${color};
      }`;
    // Create message
    div.innerHTML = `<div class="jkts__logo">${logoImage}</div>
      <div class="jkts__text">${htmlContent}</div>`;
    // Add class to container
    div.setAttribute("class", "jkts__container");
    // Add onClick function
    div.onclick = function(event) {
      // Prevent default click
      event.preventDefault();
      // Hide jkts_message
      window.localStorage.setItem("jkts_message", "hide");
      // Remove jkts container from DOM
      document.querySelector(".jkts__container").remove();
    };
    // Render elements
    document.head.appendChild(style);
    document.body.appendChild(div);
  }
};

module.exports = AddToHomeScreen;
