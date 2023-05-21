// alert("dsfjalk")

let picture = document.getElementById("pic");

const btn = document.querySelector('.btn')

console.log(btn)
// btn.addEventListener('click',()=>{
//     btn.click();
// })
btn.addEventListener('click', function(){
    api();
})
function api() {
    async function get() {
        const response = await fetch(" https://api.thecatapi.com/v1/images/search")
        const data = await response.json()
        picture.src = data[0].url;
        console.log(data);
    }
    
    get();
}
