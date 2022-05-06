# vue-collapsiblediv
Super Compact Collapsible Div Component for Mobile or Desktop

Place your html (e.g. ```<p></p>```) in the slot of the component:
```
     <collapsiblediv :showdiv.sync="myShowItBoolean">
       <p>Stuff I would put in a div</p>
     </collapsiblediv>
```

Shows a (Unicode symbol) double arrow to collapse and expand the div.
