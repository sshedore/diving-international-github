// A $( document ).ready() block.
$(document).ready(function () {
  //////////code for dropdown shirt size////////
  $("#custom").hide();
  $(document).on("change", "#shirt", checkshirt);

  function checkshirt() {
    var shirt = $("#shirt").val();
    // alert(shirt);
    if (shirt == "CUSTOM") {
      // alert(shirt);
      $("#custom").removeAttr("disabled");
      $("#custom").attr("required", true);
      $("#custom").show();
    } //end if shirt
    else {
      $("#custom").hide();
      $("#custom").attr("disabled", true);
      $("#custom").removeAttr("required");
      $("#custom").val("");
    } //end else
  } //end checkshirt function
  ////////////////////////code for the Time of day checkboxes//////////////////////
  // this solves the issue of having only one checkbox with the required attribute
  $(document).on("click", ".submit, .checkbox", chkCheckboxes);

  function chkCheckboxes() {
    var i = 0;
    $(".checkbox").each(function () {
      //var checkbox_value = $(this).val();

      if ($(this).is(":checked")) {
        i = i + 1;
        //alert(i);

        $(".checkbox").removeAttr("required");
      } else {
        if (i < 1) {
          $(".checkbox").attr("required", true);
        }
      } //end else if checkbox not checked
    }); //each
  } //function
  ////////////////////////code for the Time of day checkboxes//////////////////////
}); //end doc ready

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
