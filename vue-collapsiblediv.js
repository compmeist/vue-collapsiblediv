/*
Usage: for VueJS v2
 <collapsiblediv :showdiv.sync="myShowItBoolean">
     <p>Stuff I would put in a div</p>
 </collapsiblediv>
*/

   Vue.component('collapsiblediv',{ 
      props: { 
        showdiv:{ type:Boolean,default:true } // use :showdiv.sync=
          ,showdivclass: {type:String, default:''}
          ,showdivstyleobj: 
           {type:Object, default:function() { return{}; }}
         }
      ,data: function() {
        return { showdivd: this.showdiv };
      }
      ,computed: {
       calcDubshowdivWrapperStyle: function() {
          return { textAlign:'inherit' };  // perhaps put some dynamic calculation here, if needed
        }
      }
      ,methods: {
         togOpen: function() {
           this.showdivd = !this.showdivd;
           this.$emit('update:showdiv',this.showdivd);
           this.$emit('open');
        }
        ,togClose: function() {
           this.showdivd = !this.showdivd;
           this.$emit('update:showdiv',this.showdivd);
           this.$emit('close');
        }
      }
      /* Unicode symbols: double left (xab) and double right arrow (xbb) */
      ,template:`<span :style="calcDubshowdivWrapperStyle" >
         &nbsp;<span v-if="!showdivd" @click="togOpen()">&#xbb;</span><span v-else="" @click="togClose()">&#xab;</span>
         &nbsp;
         <div v-show="showdivd" :class="showdivclass" :style="showdivstyleobj"><slot></slot></div>
        </span>`
    });
