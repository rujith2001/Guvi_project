 <?php

$name=$_POST['name'];
$email=$_POST['email'];
$pwd=$_POST['pwd'];
$phn=$_POST['phn'];

$conn= mysqli_connect('localhost','root','','guvidb');
if($conn->connect_error){
    die("connection fail :".$conn->connect_error);

}
$select="select * from login where email='$email'";
$res=mysqli_query($conn,$select);
$count=mysqli_num_rows($res);

if($count < 1)
{
    $insert ="INSERT INTO `login`(`id`, `email`, `password`) VALUES ('','$email','$pwd')";
    mysqli_query($conn,$insert);
    echo json_encode("Account registered");
}

else{
    echo json_encode("Email exists");
    }
?>