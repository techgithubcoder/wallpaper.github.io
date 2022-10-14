
let img = document.getElementById("img")
let previous = document.getElementById("previous")
let next = document.getElementById("next")
let counter = 1
let images = [
    "images/1.JPG",
    "images/2.JPG",
    "images/3.JPG",
    "images/4.JPG",
    "images/5.JPG",
    "images/6.JPG",
    "images/7.JPG",
    "images/8.JPG",
    "images/9.JPG",
    "images/10.JPG",
    "images/11.JPG",
    "images/12.JPG",
    "images/13.JPG",
    "images/14.JPG",
    "images/15.JPG",
    "images/16.JPG",
    "images/17.JPG",
    "images/18.JPG",
    "images/19.JPG",
    "images/20.JPG",
    "images/21.JPEG",
    "images/22.JPEG",
    "images/23.JPG",
    "images/24.JPG",
    "images/25.JPG",
    "images/26.JPG",
    "images/27.JPG",
    "images/28.JPG",
    "images/29.JPG",
    "images/30.JPG",
    "images/31.JPG",
    "images/32.JPG",
    "images/33.JPG",
    "images/34.JPG",
    "images/35.JPG",
    "images/36.JPG",
    "images/37.JPG",
    "images/38.JPG",
    "images/39.JPG",
    "images/40.JPG",
    "images/41.JPG",
    "images/42.JPG",
    "images/43.JPG",
    "images/44.JPG",
    "images/45.JPG",
    "images/46.JPG",
    "images/47.JPG",
    "images/48.JPG",
    "images/49.JPG",
    "images/50.JPG",
    "images/51.JPG",
    "images/52.JPG",
    "images/53.JPG",
    "images/54.JPG",
    "images/55.JPG",
    "images/56.JPG",
    "images/57.JPG",
    "images/58.JPG",
    "images/59.JPG",
    "images/60.JPG",
    "images/61.JPG",
    "images/62.JPG",
    "images/63.JPG",
    "images/64.JPG",
    "images/65.JPG",
    "images/66.JPG",
   ]




        next.addEventListener("click", (e) => {
            counter++
            if(counter>images.length-1){
             counter=0   
            }
            img.src=images[counter]
            
        })
    
        previous.addEventListener("click",()=>{

            counter--

            if(counter<0){
                counter=images.length-1;
            }
            img.src=images[counter]
        })