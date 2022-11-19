let submitbtn=document.querySelector('.btn-action')
let err= document.querySelector('.error-message');

submitbtn.addEventListener('click',function (e){
    e.preventDefault();
    let name=$("#name").val();
    let email=$("#email").val();
    let pwd=$("#pwd").val();
    let cnfrmpwd=$("#cnfrmpwd").val();
    let phn=$("#phn").val();

    if(pwd != cnfrmpwd)
        alert('Password does not match');
    else{
        $.ajax({
            url: "/guvi/php/register.php",
            type:"POST",
            data:{
                name:name,
                email:email,
                pwd:pwd,
                phn:phn,

            },
            async: true,
            success:function(response){
                alert(response);
            }

        });
    }

     
    

});