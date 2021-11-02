class DonutShop {
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.multiplierCount = 0;
        this.autoClickerCost = 100;
        this.multiplierCost = 10;
        this.donutsEarned = 1;
        this.spoiled = undefined;
    }
    
    donutMaker(){
        this.donutCount += this.donutsEarned;
    }

    donutAutoMaker(){
        this.donutCount = Math.round(this.donutCount - this.autoClickerCost);
        this.autoClickerCount +=1;
      
    }
    autoClickerNew(){
      this.autoClickerCost = this.autoClickerCost * 1.1;
     }

    donutMultiplierNew(){  
        this.multiplierCost = this.multiplierCost * 1.1; 
     }

    donutMultiplierBuy(){
        this.donutCount = Math.round(this.donutCount - this.multiplierCost);
        this.donutsEarned = this.donutsEarned * 1.2;
        this.multiplierCount +=1;
    }
    
    getDonutCount(){
        return Math.round(this.donutCount);
    }

    getDonutEarned(){
        return Math.round(this.donutsEarned);
    }
    
    getAutoClickerCount(){
        return this.autoClickerCount;
    }
    getMultiplierCount(){
        return this.multiplierCount;
    }
    getAutoClickerCost(){
        return Math.round(this.autoClickerCost)
    }
    getMultiplierCost(){
        return Math.round(this.multiplierCost)
    }

    startSpoiling(){
        if (this.spoiled == undefined)
{
        this.spoiled = self.setInterval(this.spoiling, 5000) //self is optional
}    }

    spoiling = () => {
        if(this.donutCount > 0){
            this.donutCount -=1;
        }
    }

}