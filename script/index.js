const buttonLoad = () =>
{
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
    .then(res =>res.json())
    .then((json) => displayButton(json.data));
};

const displayButton = (buttons) =>
{
    // 1. get the container and empty
   const buttonContainer =  document.getElementById("button_container");
   buttonContainer.innerHTML = "";
    // 2. use for of loop
    for(let button of buttons)
    {
        
    // 3. in the loop create html element

    
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onClick="loadLevelWord(${button.level_no})" class="btn btn-outline btn-primary">
         <i class="fa-solid fa-book-open"></i>Lesson - ${button.level_no}</button>
        `;
// 4. appnend into container
        buttonContainer.append(btnDiv);
    }


};




//  LoadLevelword function er kaj suru

const loadLevelWord = (id) =>
{
    const url1 = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url1)
    .then(res => res.json()) 
    .then((data)=>displayWord(data.data)); 
}

const displayWord = (words) =>
{
    console.log(words);
    const wordContainer = document.getElementById("wordcontainer");
    wordContainer.innerHTML = "";

    // loop

    for(let word of words)
    {
       const cardDiv = document.createElement("div");
       cardDiv.innerHTML = `
             <div class="bg-white rounded-xl shadow-sm py-15 px-5 text-center  space-y-3">
            <h2 class="text-2xl font-bold">${word.word}</h2>
            <p class="font-semibold">Meaning/Pronunciation></p>
            <div class="text-2xl font-medium font-bangla">"আগ্রহী/এগার"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF]">click me</button>
                <button class="btn bg-[#1A91FF]">Buy me</button>
            </div>
        </div>
       `;
       wordContainer.append(cardDiv);
    }
};

 buttonLoad();






  