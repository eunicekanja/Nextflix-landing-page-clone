const tabsContainer=document.querySelector('.tabBtnContainer');
const tabBtns=document.querySelectorAll('.tabBtn')
const tabs=document.querySelectorAll('.tab');
const bars=document.querySelectorAll('.bars')

//tabs toggling
tabsContainer.addEventListener('click',function(e){
    e.preventDefault();
    const id=e.target.dataset.id;
    console.log(id)
    if(id){
        tabBtns.forEach(btn=>btn.classList.remove('btnactive'));
        e.target.classList.add('btnactive');
        tabs.forEach(tab=>tab.classList.remove('active'));
        document.querySelector(`#${id}`).classList.add('active')
    }
})

//questions hiding
const questionsContainer=document.querySelectorAll('.question-container');
const answers=document.querySelectorAll('.answer');
questionsContainer.forEach(container=>{
    const btn=container.querySelector('.bars');
    btn.addEventListener('click',function(e){
        e.preventDefault();
        answers.forEach(ans=>{
            ans.classList.remove('active')
        })
        const answer=container.querySelector('.answer');
        answer.classList.toggle('active');
    })
})