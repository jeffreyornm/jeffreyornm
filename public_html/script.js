$(document).ready(function () {
  /

  $("#contact").validate({
    debug: true,
    errorClass: "alert alert-danger",
    errorLabelContainer: "#output-area",
    errorElement: "div",

    rules: {
      name: {
        required:true
      },
      email: {
        email: true,
        required:true
      },
      message: {
        required:true,
        maxLength:2000
      }
    },

    messages: {
      name: {
        required: "Name is a required field"
      },
      email: {
        required: "Email is a required field",
        email: "Invalid Email"
      },
      message: {
        required: "Message is required",
        maxLength: "Message is too long"
      }
    },

    submitHandler: function (form) {
      $("#contact").ajaxSubmit({
        type: "POST",
        url: $("#contact").attr("action"),
        success: function (ajaxOutput) {
          $("#output-area").css("display", "")
          $("#output-area").html(ajaxOutput)

          // reset the form if it was successful
          if($(".alert-success").length >= 1) {
            $("#contact")[0].reset();
          }

        }
      })

    }
  })
})