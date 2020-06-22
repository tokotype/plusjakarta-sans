function updateFeatures() {
// update features based on user input:
var body = document.getElementById("typetester");
var codeLine = "";
var checkboxes = document.getElementsByClassName("otFeature")
for (i = 0; i < checkboxes.length; i++) {
var checkbox = checkboxes[i];
if (i!=0) { codeLine += ", " };
codeLine += '"'+checkbox.name+'" ';
codeLine += checkbox.checked ? '0' : '1';
if (checkbox.name=="ss01") {
body.style.setProperty("font-stylistic-alternates-1", checkbox.checked ? 'ss01' : 'none');
} else if (checkbox.name=="ss01") {
body.style.setProperty("font-stylistic-alternates-2", checkbox.checked ? 'ss02' : 'none');
} else if (checkbox.name=="ss02") {
body.style.setProperty("font-stylistic-alternates-3", checkbox.checked ? 'ss03' : 'no-none');
} else if (checkbox.name=="ss03") {
body.style.setProperty("font-variant-ligatures", checkbox.checked ? 'historical-ligatures' : 'no-historical-ligatures');
}
}
body.style.setProperty("font-feature-settings", codeLine);
}

function changeFont() {
var selector = document.getElementById('fontFamilySelector');
var selected_index = selector.selectedIndex;
var selected_option_text = selector.options[selected_index].text;
document.getElementById('typetester').style.fontFamily = selected_option_text;
}

function updateParagraph() {
// update paragraph text based on user input:
var userinput = document.getElementById("textInput");
var paragraph = document.getElementById("typetester");
paragraph.textContent = userinput.value;
}

function updateSlider() {
var body = document.getElementById("typetester");
var sliders = document.getElementsByClassName("slider");
var settingtext = "";
for (var i = 0; i < sliders.length; i++) {
var sliderID = sliders[i].id;
var sliderValue = sliders[i].value;
var label = document.getElementById("label_"+sliderID);
var labelName = label.getAttribute("name");

label.textContent = ""+labelName+": "+sliderValue;

if (sliderID == "fontsize") {
// Text Size Slider
body.style.setProperty("font-size", ""+sliderValue+"px");
label.textContent += "px";
} else if (sliderID == "lineheight") {
// Line Height Slider
body.style.setProperty("line-height", ""+sliderValue/100.0+"em");
label.textContent += "%";
} else {
// OTVar Slider: collect settings
(sliderID == "spacing")
body.style.setProperty("letter-spacing", ""+sliderValue/100.0+"em");
label.textContent += "em";
}
}
}

/*
function navBar(){
  jQuery('body').scrollspy({target: ".navbar", offset: 0});   
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}
*/

