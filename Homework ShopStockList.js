const stockList = ["milk", "cheese", "cereal", "sugar"];
let customerChoice = prompt("What would you like to buy?");

for (let i=0; i<stockList.length; i++){

    if (customerChoice === stockList[i]) {
        document.write(customerChoice + " is in stock.");
        break;   
    } 
    
    if (stockList.length -1 === i && customerChoice != stockList[i]){
        
        let customerReply = prompt("That is not in stock, would you like to order some? Y/N");
        while (customerReply != "Y" && customerReply != "N"){
            customerReply = prompt("Please enter Y or N.");
        }
        
        if (customerReply == "N"){
            document.write("Thank you for visiting this shop.")
            break;
        }
        
        if (customerReply == "Y"){
            stockList.push(customerChoice);
            document.write(customerChoice + " is now on order.");
            console.log(stockList);
            break;
        }
        
    }
}



