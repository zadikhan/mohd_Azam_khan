console.log("running");
document.querySelector('.cancel').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cancel').style.display='none';
        
    }
    else{

        document.querySelector('.ham').style.display='none';
        setTimeout(() => { 

            document.querySelector('.cancel').style.display='inline';
        },400);

    }

})





contact  
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="CSS/style.css">
  <title>AZAM's world</title>
</head>

<body>
  <div class="container">
    <div class="sidebar">

      <nav>
        <ul>
          <li> <a href="/">HOME</a> </li>
          <li> <a href="/intro.ejs">INTRO</a> </li>
          <li> <a href="/social.ejs">PLATFORM</a> </li>
          <li> <a href="/contact.ejs">CONTACT</a> </li>
          <li> <a href="/skills.ejs">SKILLS</a> </li>
          <li> <a href="projects.ejs">PROJECTS</a> </li>
        </ul>
      </nav>
    </div>
    <div class="main">
      <div class="hamburger">
        <img class="ham" src="images/ham.png" alt="this is hamburger" width="23">
        <img class="cancel" src="images/cancelmark.png" alt="this is cancelmark" width="23">
      </div>
      <div class="contactform">
        <form action="/" method="post">
          <h1>Contact Me for work or General Enquiry</h1>

          <div class="namek">

            <label for="clientEmail1" class="form-label">Enter Your Name Here </label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="namex">
          </div>


          <div class="emailk">
            <label for="clientEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" name="emailx" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">
              <h2> We'll never share your email with anyone else.</h2>
            </div>
          </div>
          <div class="mb-3">
            <label for="clientPhone" class="form-label">Phone</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="phonex">
          </div>

          <div class="namek">
            <label for="clientEmail1" class="form-label">Any Enquiry </label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="enquiryx">
          </div>

          <div class="mb-3" id="form-check">
            <input type="checkbox" class="form-check-input" id="isClient">
            <label class="form-check-label" for="isClient" name="workx">Work on a project with me</label>
          </div>
          <button type="submit" class="btn">Submit</button>


        </form>


      </div>
    </div>

    <script>

      console.log("running");
      document.querySelector('.cancel').style.display = 'none';
      document.querySelector('.hamburger').addEventListener("click", () => {
        document.querySelector('.sidebar').classList.toggle('sidebarGo');

        if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
          document.querySelector('.ham').style.display = 'inline';
          document.querySelector('.cancel').style.display = 'none';

        }
        else {

          document.querySelector('.ham').style.display = 'none';
          setTimeout(() => {

            document.querySelector('.cancel').style.display = 'inline';
          }, 400);

        }

      })

    </script>
</body>

</html>