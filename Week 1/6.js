function openTab(tabId) {

    let tabs = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("hidden");
    }

    let buttons = document.getElementsByClassName("tab-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.remove("hidden");

    event.target.classList.add("active");
}