normalMode()

function normalMode() {
    document.getElementById("css").href="../css/style.css"
    document.getElementById("normalMode").style.visibility="hidden"
    document.getElementById("darkMode").style.visibility="visible"
}

function darkMode() {
    document.getElementById("css").href="../css/dark.css"
    document.getElementById("normalMode").style.visibility="visible"
    document.getElementById("darkMode").style.visibility="hidden"
}