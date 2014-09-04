$("#AnyID").click(function()
    {
        $.ajax({
            type: "get",
            url: "exponentiater.py",
            data: {'e':'x'},
            datatype:"script",
            async: false,
            success: function(response) {
            // response is string, convert it to json and apply conditions.
            var json_obj= eval('(' + response + ')');//$.parseJSON("'"+response+"'");
            if (json_obj.type == 'Error'){
              alert(json_obj.msg);
            }
            else {
              alert(json_obj.msg);
            }// else closed
            }, // success closed
            error:function(xhr,err)
            {
                alert("Error connecting to server, please contact system administator.");
            }
        })//ajax closed
}