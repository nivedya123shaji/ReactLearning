 //Hello world in React .
 //It has 3 paramerters id heading is given to h1 tag.
 //the 3rd parameter is the children
 
 const heading=React.createElement("h1", {id:"heading"},
 "hello world Using React");

 //Put this heading in div for that need to create a root in react 
 const root=ReactDOM.createRoot(document.getElementById("root"));
 //render the heading in react
 root.render(heading);
 //react element it is object.pros are children 
 console.log(heading);

 /*
 <div id="parent">
 <div id="child">
 <h1>multiple div how to edit in react H1 tag</h1>
 <h2>sibbiling of h1 multiple child of div child</h2>
 </div>
 </div>
 */

 /*3rd parameter is the child So here it is another div
 as child so put it there.
 The 3rd parameter of child div next child is 
 h1 tag
 parent is the object a react react element*/
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
 
//Array is created as child div has 3rd parameter 2 child
    
    [React.createElement("h1",{},"H1 tag"),
    React.createElement("h2",{},"H2 tag")]
      ) );
   
    //root will print the current object ony  
    root.render(parent); //root is already there we are adding the next 2 div inside the root div
    console.log(parent);
    
    
    /* More ex of nested.As here you can see there are 
    2 child of parent so again just create Array
 <div id="parent">
 <div id="child">
 <h1>multiple div how to edit in react H1 tag</h1>
 <h2>sibbiling of h1 multiple child of div child</h2>
 </div>

 <div id="child2">
 <h1>multiple div how to edit in react H1 tag</h1>
 <h2>sibbiling of h1 multiple child of div child</h2>
 </div>

 </div>

 there are 2 child for parent hence we can create array 
 for it
 */

 const parent1=React.createElement("div",{id:"parent1"},
 [ React.createElement("div",{id:"child1"},
 [React.createElement("h1",{},"H1 tag"),
 React.createElement("h2",{},"H2 tag")]
   ),
   React.createElement("div",{id:"child2"},
 [React.createElement("h1",{},"H1 tag"),
 React.createElement("h2",{},"H2 tag")]
   ),
 ]
 );

  //root will print the current object ony  
 root.render(parent1);

 /*As you can see the above code will keep on increasing
we we inc more nested div in So here we make use of JSX
which will help us while creating tags*/


     
    