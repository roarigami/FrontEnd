<!DOCTYPE html>
<html>

<head>
<title>Tab One</title>
<link rel = "icon" href=""/>

  <meta charset="utf-8">
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <meta property="og:url" content="">
  <meta property="og:title" content="">
  <meta property="og:site_name" content="">
  <meta property="og:description" content="">

  <!-- CSS -->
  <link href="css/style.css" rel="stylesheet">
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
  <!--JQuery -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>

    <style>

    </style>

<!-- Page Content -->
<div class="pageContent">

<div class="tabNav">
  <ul>
    <li class="tabUnderline"><button class="tabBtn tabOneBtn tabActive" id="tabOneBtn">Tab One</button></li>
    <li class=""><button class="tabBtn tabTwoBtn" id="tabTwoBtn">Tab Two</button></li>
  </ul>
</div>

<div class="tabContainer">

  <div id="loadScreen">
  <div class="loadScreenLoad">
    <!-- Loading Animation -->
    <div class="spinner" id="spinnerLoad">
         <div class="rect1"></div>
         <div class="rect2"></div>
         <div class="rect3"></div>
         <div class="rect4"></div>
         <div class="rect5"></div>
       </div>
     <!-- END OF LOAD ANIMATIONS -->
    </div>
</div>


<div class="tabBox" id="tabOneBox">

<h1>Tab One</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
  illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
   aut odit aut fugit,</p>

</div>


<div class="tabBox" id="tabTwoBox" style="display:none;">




</div>



</div>


</div>


  <script src="js/script.js"></script>
</body>

</html>
