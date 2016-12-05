var Interface = React.createClass({
 render: function() {
   /* wow what a party of mixed elements (all inside a div because as you already know we can only return ONE main element */
   return (
     <div>
         {/* This will render the Outcome element */}
        <Outcome/>
         {/* but the following code is owned by Interface */}
        <div >
          <a>Dealer Score : </a>
          <a>Player Score : </a>
        </div>
        <button >Deal</button>
        <button>Hit</button>
        <button >Stand</button>
     </div>
     );
 }
});
