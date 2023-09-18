$("#sendTo").click(function (e) {
    e.preventDefault()
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    $.ajax({
        type: 'POST',
        url: 'send-form.php',
        data: {name: name, email: email, phone: phone},
        success: function(response) {
            $('#success-message').html(response);
            $('#success-message').fadeIn().delay(5000).fadeOut();
            $('#contact-form')[0].reset();
        }
    });
});
/*<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<title>Business Website</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="container">
        <div class="circle">
            <img src="pic.png" alt="Picture">
        </div>
		<h1>גיא ארבל</h1>
        <h2>LI-CBT מטפל קוגניטיבי התנהגותי</h2> 
        <h3 style="text-decoration: underline;">קצת עליי</h3>
		<p>
            שמי גיא ארבל, אני גר בראשון לציון ובוגר הכשרת מטפלים במכז האקדמי וינגייט לוינסקי
            <br>
            בנוסף, אני מרצה ומכשיר מטפלים במרכז האקדמי וינגייט לוינסקי
            <br>
        </p>
        <h3> ?בכלל CBT אז מה זה </h3>
        <p>
            CBT - טיפול קוגניטיבי התנהגותי
            <br>
            זוהי שיטת הטיפול המתמחה בהתפתחות חרדות, דיכאונות, פוביות, פאניקות, דחיינות
            <br>
            ...דימוי וערך עצמי נמוך ועוד 
            <br>
            .הטיפול אפקטיבי ויעיל, על פי מחקרים רבים מוכחת יעילותו למעל מ91.8% מהמבקרים
            
        </p>
        <p> :יצירת קשר</p>
        <form
        action="https://formspree.io/f/xgejkbnd" method="POST">
        <input type="text" name="Name" placeholder="שם מלא  " required> 
        <input type="email" name="Email" placeholder="אימייל" required> 
        <input type="text" name="Message" placeholder="תוכן" required>
        <button type="submit" >שלח</button>
        </form>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="script.js"></script>
</body>
</html>*/