

let api =  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
       
document.querySelector('.qr').addEventListener('click',()=>{
    generator();
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        generator();
    }
})

        function generator(){
            
            let inputElement = document.querySelector('.input-name').value;
            console.log(inputElement);
            let imageElement = document.querySelector('.qr-code');

            if(inputElement.length>0){
            imageElement.src = `${api}${inputElement}`;

            document.querySelector('.img-container').classList.add('img-contained');
            }
            else{
                
                document.querySelector('.img-container').classList.remove('img-contained');

                
                document.querySelector('.input-name').classList.add('error');
                imageElement.src= '';
                setTimeout(()=>{
                document.querySelector('.input-name').classList.remove('error');
                },1000);
            }
            

        }