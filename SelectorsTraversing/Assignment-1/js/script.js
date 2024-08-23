$(document).ready(function(){
        
    $("#property").change(function(){
        if(this.checked){
            $("#editProperty").prop("checked",true);
            $("#removeProperty").prop("checked",true);
            $("#addProperty").prop("checked",true);
        }else{
            $("#editProperty").prop("checked",false);
            $("#removeProperty").prop("checked",false);
            $("#addProperty").prop("checked",false);
        }
    });
    $("#editProperty, #removeProperty,#addProperty").change(function(){
        if($("#editProperty").prop("checked") || $("#removeProperty").prop("checked") || $("#addProperty").prop("checked")){
            $("#property").prop("checked",true);
        }else{
            $("#property").prop("checked",false);
        }
    });


    $("#testimonial").change(function(){
        if(this.checked){
            $("#testimonialAdd").prop("checked",true);
            $("#testimonialRemove").prop("checked",true);
            $("#testimonialView").prop("checked",true);
            $("#testimonialEdit").prop("checked",true);
        }else{
            $("#testimonialAdd").prop("checked",false);
            $("#testimonialRemove").prop("checked",false);
            $("#testimonialView").prop("checked",false);
            $("#testimonialEdit").prop("checked",false);
        }
    });
    $("#testimonialAdd, #testimonialRemove,#testimonialView, #testimonialEdit").change(function(){
        if($("#testimonialAdd").prop("checked") || $("#testimonialRemove").prop("checked") || $("#testimonialView").prop("checked") || $("#testimonialEdit").prop("checked")){
            $("#testimonial").prop("checked",true);
        }else{
            $("#testimonial").prop("checked",false);
        }
    });
    

    $("#users").change(function(){
        if(this.checked){
            $("#userEdit").prop("checked",true);
            $("#userView").prop("checked",true);
            $("#userAdd").prop("checked",true);
        }else{
            $("#userEdit").prop("checked",false);
            $("#userView").prop("checked",false);
            $("#userAdd").prop("checked",false);
        }
    });
    $("#testimonialAdd, #testimonialRemove,#testimonialView, #testimonialEdit").change(function(){
        if($("#testimonialAdd").prop("checked") || $("#testimonialRemove").prop("checked") || $("#testimonialView").prop("checked") || $("#testimonialEdit").prop("checked")){
            $("#testimonial").prop("checked",true);
        }else{
            $("#testimonial").prop("checked",false);
        }
    });
});