var Table = React.createClass({
render: function() {
  /* this render function can ONLY return ONE element, in this case we need to render a collection of elements so we have to encapsulate them in a div */
  return (
   <div>
      <Hand/>
      <Interface/>
      <Hand/>
   </div>
   );
}
});
