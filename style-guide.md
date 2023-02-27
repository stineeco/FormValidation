# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Red: hsl(0, 100%, 74%) 
- Green: hsl(154, 59%, 51%)

### Accent

- Blue: hsl(248, 32%, 49%)

### Neutral

- Dark Blue: hsl(249, 10%, 26%) 
- Grayish Blue: hsl(246, 25%, 77%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400, 500, 600, 700





-  Learn to code by watching others

  See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. 

  Try it free 7 days then $20/mo. thereafter




    By clicking the button, you are agreeing to our Terms and Services



    <footer>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </p>
  </footer>


  .pro_deform{
    display: grid;
    grid-template-columns: repeat(2, 420px);
    justify-content: center;
    
   
    
}



.container{
    background-color: white ;
    padding: 5rem 5rem 5rem 5rem;
   
 
    
}




.form_control{
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
}


.form_control input{
    border: 2px solid black;
    padding: 12.5px 250px;
    padding-left: 10px;

    border-radius:4px ;
    display: block;
   
    font-size: 14px;
}



.form_control i{
   
  
    color:hsl(0, 100%, 74%)  ;
    position: absolute;
    top: 13px;
    right: 20px;
}

.form_control small{
    
   
    color: hsl(0, 100%, 74%) ;
    
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 8px;
    
}

.form_control medium{
   
    color:hsl(0, 100%, 74%) ;
    position: absolute;
    top: 11px;
    left: 13px;
}


.form button{
    background-color:hsl(154, 59%, 51%) ;
    color: white;
    border: 2px solid;
    display: block;
    width: 410px;
    padding: 10px;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;


}


.form_control.success input{
    border-color: greenyellow;

}

.form_control.form_control.error input{
    border-color: hsl(0, 100%, 74%) ;
}
.form_control.error i.fa-solid {
    
    visibility: visible;
}
.form_control.error medium{
    visibility: visible;
}


.form_control.error small{
    visibility: visible;
}
   


.terms{
    font-size: 10px;
    text-align: center;
}