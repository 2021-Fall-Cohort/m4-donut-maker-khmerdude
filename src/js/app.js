const MakeInput = document.getElementById("amount-of-donut");
const MakeButton = document.getElementById("create");
const AutoMakerButton = document.getElementById("auto")
const MultiplierButton = document.getElementById("multiplier")
const DonutCounter = document.getElementById("donut-per-click");
const AutoClickCounter = document.getElementById("number-of-bakers")
const MultiplierCounter = document.getElementById("increase-efficiency")
const AutoCost = document.getElementById("salary")
const MultiCost = document.getElementById("price")

const restarting = document.getElementById("reset")


let donut = new DonutShop();

MakeInput.value = donut.getDonutCount();
donut.startSpoiling()

MakeButton.addEventListener("click", function(){
    donut.donutMaker();
    MakeInput.innerText = donut.getDonutCount();
    console.log(donut.donutCount)
});

let refreshIntervalId = setInterval(updateDonutCount, 1000);


AutoMakerButton.addEventListener("click", function(){
    donut.donutAutoMaker();
    donut.autoClickerNew(); 
    console.log("working", donut)
})

MultiplierButton.addEventListener("click", function(){
    donut.donutMultiplierBuy(); 
    donut.donutMultiplierNew();

})

function updateDonutCount(){
    DonutCounter.innerText = donut.getDonutEarned();
    MakeInput.innerText = donut.getDonutCount();
    AutoClickCounter.innerText = donut.getAutoClickerCount();
    MultiplierCounter.innerText = donut.getMultiplierCount();
    AutoCost.innerText = donut.getAutoClickerCost();
    MultiCost.innerText = donut.getMultiplierCost();
    checkAutoCount();
    checkMultiplierCount();
}

function checkAutoCount(){
    if(donut.getDonutCount() >= donut.autoClickerCost){
        AutoMakerButton.hidden = false;
    }else {
        AutoMakerButton.hidden = true;
    }
}
function checkMultiplierCount(){
    if(donut.getDonutCount() >= donut.multiplierCost){
        MultiplierButton.hidden = false;
    }else {
        MultiplierButton.hidden = true;
    }
}
restarting.addEventListener("click", function(){
    location.reload();
})

function autoMaker(){
    for (let i = 0; i < donut.autoClickerCount; i++){
        donut.donutMaker();
    }
    updateDonutCount();
}

setInterval(autoMaker, 1000)
