 var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, {});document.addEventListener("DOMContentLoaded", function () {
 

  const adduserbottn = document.getElementById("add-user-button");
  adduserbottn.addEventListener("click", () => {
    document.querySelector(".add_user_model").classList.add("show");
    document.querySelector(".add_user_model_back").classList.remove("dis-none");
  });
  document
    .querySelector(".add_user_model_back")
    .addEventListener("click", () => {
      document.querySelector(".add_user_model").classList.remove("show");
      document
        .querySelector(".add_user_model_back")
        .classList.add("dis-none");
    });
});
