import { Children, useState } from "react";

export const meta = () => {
  return [
    { title: "Tip calculator" },
    { name: "description", content: "Calculate tips easily!" },
  ];
};

export default function Index() {
  //set variables
  let [billAmount , setBillAmount]=useState(null);
  let [tipPercentage , setTipPercentage]= useState(null);
  let [peopleQuantity , setPeopleQuantity]=useState(null);
  let [tipAmount , setTipAmount]=useState(0);
  let [totalAmount , setTotalAmount] = useState(0)

  let tipPercentages=[5 , 10, 15, 25, 50];

   console.log({billAmount});
  console.log({tipPercentage});
  console.log({peopleQuantity});

  

  function calculateTotal(){
    console.log("calculating total");

    let tip = (Number(billAmount) * Number(tipPercentage)/100 );

    console.log({tip});
setTipAmount(tip);

    let total =Number(billAmount) + tipAmount;
    console.log({total});
    
    let perPerson = Number (total / peopleQuantity);
    console.log({perPerson});
    setTotalAmount(perPerson);
    
   
  }
  //function to reset button 
  function reset(){
    setBillAmount(null);
    setTipPercentage(null);
    setPeopleQuantity(null);
    setTipAmount(0);
    setTotalAmount(0);
    }
    //function to handle change in input fields
    function handleChange(event){
      let {name , value} = event.target;
      if(name === "billAmount"){
        setBillAmount(value);
        }else if(name === "tipPercentage"){
          setTipPercentage(value);
          }else if(name === "peopleQuantity"){
            setPeopleQuantity(value);
            }
            }





  
  


  return (
    <main className="grid  grid-cols gap-4 place-items-center w-full min-h-screen">
      
        <div className="grid lg:grid-cols-2 gap-4 bg-slate-600 lg:max-w-5xl mx-auto rounded-lg p-4">
        <div>
          <Label htmlFor="bill">Bill(ksh)</Label>
          <Input type="number" id="bill" name="bill" placeholder={1000} value={billAmount} setValue={setBillAmount} />

          <p className="mt-8 capitalize">Select tip %</p>
          <div className="mt-4 grid grid-cols-3 gap-4" >
          {tipPercentages.map((item , index)=>(
            <Tip key={index}
             percentage={item}
             tipPercentage={tipPercentage}
              setTipPercentage ={setTipPercentage } />
         ) )}
          



         
          <label  className=" px-4 py-2 rounded-md bg-gray-500 text-gray-800 flex gap-2 items-centee justify">
          <input type="radio" name="tip" value="custom"  /> custom
          </label>

          </div>


          <Label htmlFor="people">Number of people</Label>
          
          <Input type="number" id="people" name="people" placeholder={2} 
          value={peopleQuantity} 
          setValue={setPeopleQuantity} />
          <Button handleClick={calculateTotal}>Calculate Tip </Button> 
        </div>
 
        <div className="bg-brand-teal p-8 rounded-xl">
          <div className="flex justify-between">
            <div>
              <p>Tip amount</p>
              <p className="text-gray-400 text-sm">per person</p>
            </div>
            <Amount amount={tipAmount} />
          </div>

          <div className=" flex justify-between mt-6">
            <div>
              <p>Total</p>
              <p className="text-gray-400 text-sm">per person</p>
            </div>
            <Amount amount={totalAmount} />
          </div>

          <Button handleClick={reset}>
          
            Reset
          </Button>
        </div>
      </div>
    </main>
  );
}

// TIP COMPONENT
// using props
function Tip({percentage ,tipPercentage, setTipPercentage}){
  return (
    <label  className="px-4 py-2  rounded-md bg-brand-teal text-gray-800 flex gap-2 justify-center">
    <input type="radio" name="tip" 
    value={percentage} 
    onChange={(event)=> setTipPercentage(event.target. value)}
    checked={percentage === Number(tipPercentage)}
     /> {percentage}%
    </label>

  )
}
//input component
function Input ( {type , name, id, placeholder ,value, setValue}){
  return (
    <input 
    type={type}
     name={name} 
     id={id} 
     placeholder={placeholder} 
    value={value ?? ""}
    // defaultValue={defaultValue}
    onChange={(event)=> setValue(event.target.value)}
    className=" px-3 py-2 w-full block bg-gray-200 text-gray-800 rounded-lg border border-slate-500 " />

  )

}
// label component
// USING CHILDREN
function Label ({children , htmlFor}){
  return (
    <label htmlFor={htmlFor} className="txt-sm mt-10">{children}
    </label>
  )
} 

// AMOUNT COMPONENT
 function Amount({amount}){
  return (
    <p className="text-brand-light-teal text-3xl font-semibold">
              ${amount}
            </p>
  )
 }
 // BUTTON COMPONENT
 function Button({children , handleClick} ){
  return (
    <button type="button" className="bg-brand-light-blue px-6 py-3 uppercase text-gray-800 w-full mt-6 rounded-lg font-semibold"
      onClick={ handleClick} >
      {children}
      </button>
      )
    }
