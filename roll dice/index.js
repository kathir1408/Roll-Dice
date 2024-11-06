document.getElementById("but").onclick=function(){
    const count=document.getElementById("input").value;
    const res1=document.getElementById("res1");
    const res2=document.getElementById("res2");
    let val=[];
    let img=[];
    for(let i=0;i<count;i++){
        let value=Math.floor(Math.random()*6)+1;
        val.push(value);
        img.push(`<img src="dice_images/${value}.png " alt="Dice ${value}" ">`);

    }
    res1.textContent=`Dice: ${val.join(", ")}`;
    res2.innerHTML=img.join(``);
}