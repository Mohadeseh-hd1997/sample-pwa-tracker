var IconAdd = document.querySelector("#AddHome");
var defredprompt:any;
let installPrompt = null;

IconAdd?.addEventListener("click", function () {
  if (defredprompt) {
    defredprompt.prompt();
    defredprompt.userChoice.then(function (choice:any) {
      if (choice.outcome === "dismissed") {
        console.log("Cancel install PWA");
      } else {
        console.log("PWA installed");
      }
    });
    defredprompt = null;
  }
});


window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  defredprompt.removeAttribute("hidden");
});