(function(){var e,t,n,r,i,s,o,u,a,f;this.chancejs||(this.chancejs={}),s=function(){function e(e){this.seed=e!=null?e:0}return e.prototype.get=function(){return this.seed},e}(),r=function(){function e(){}return e.prototype.get=function(){return Math.random()},e}(),t=function(){function e(e){this.step=e!=null?e:1e9,this.iterator=0}return e.prototype.get=function(){var e;return e=this.iterator++/this.step,this.iterator>this.step&&(this.iterator=0),e},e}(),n=function(){function e(e){this.seed=e!=null?e:1}return e.prototype.plantSeed=function(e){this.seed=e!=null?e:1},e.prototype.get=function(){var e,t,n,r;return r=this.seed,n=r,n<<=1,t=r<<32,e=t+n,e&2147483648&&(e&=2147483647,e++),this.seed=e,e/2147483648},e}(),e=function(){function e(e){e==null&&(e=0),this.plantSeed(e)}return e.prototype.get=function(){var e;return e=this.u[this.i97]-this.u[this.j97],e<0&&(e+=1),this.u[this.i97]=e,--this.i97<0&&(this.i97=96),--this.j97<0&&(this.j97=96),this.c-=this.cd,this.c<0&&(this.c+=this.cm),e-=this.c,e<0&&(e+=1),e},e.prototype.plantSeed=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v;e==null&&(e=0),this.u=new Array(97),r=e/30082,u=e-30082*r,t=r/177%177+2,i=r%177+2,o=u/169%178+1,a=u%169;for(n=h=0;h<=96;n=++h){d=[0,.5],l=d[0],c=d[1];for(s=p=0;p<=23;s=++p)f=t*i%179*o%179,v=[i,o,f],t=v[0],i=v[1],o=v[2],a=(53*a+1)%169,a*f%64>=32&&(l+=c),c*=.5;this.u[n]=l}return this.c=362436/16777216,this.cd=7654321/16777216,this.cm=.9999998211860657,this.i97=96,this.j97=32},e}(),i=function(){function e(e){e==null&&(e=0),this.mt=Array(623),this.z=0,this.y=0,this.plantSeed(e)}return e.prototype.plantSeed=function(e){var t,n,r;e==null&&(e=0),this.mt[0]=e,r=[];for(t=n=1;n<=623;t=++n)r.push(this.mt[t]=69069*this.mt[t-1]+1&4294967295);return r},e.prototype.get=function(){return this.z>=623&&this.generateNumbers(),this.extractNumber(this.z++)/2147483648},e.prototype.generateNumbers=function(){var e,t,n;this.z=0,n=[];for(e=t=0;t<=623;e=++t)this.y=2147483648&this.mt[e]+2147483647&this.mt[(e+1)%623],this.y%2===0?n.push(this.mt[e]=this.mt[(e+397)%623]^this.y>>1):n.push(this.mt[e]=this.mt[(e+397)%623]^this.y>>1^2567483615);return n},e.prototype.extractNumber=function(e){return this.y=this.mt[e],this.y^=this.y>>11,this.y^=this.y<<7&2636928640,this.y^=this.y<<15&4022730752,this.y^=this.y>>18},e}(),o=function(){function e(e){this.seed=e}return e.prototype.get=function(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280},e}(),a=Math.floor,f=Math.round,u=function(){function e(e){this.generator=e}return e.prototype.get=function(){return this.generator.get()},e.prototype.boolean=function(e){return e==null&&(e=.5),0<=e&&e<=1||(e=.5),this.get()<e},e.prototype.bit=function(e){return e==null&&(e=.5),this.boolean(e)?1:0},e.prototype.sign=function(e){return e==null&&(e=.5),this.boolean(e)?1:-1},e.prototype.char=function(e,t){var n,r,i;e==null&&(i=["abcdefghijklmnopqrstuvwxyz",null],e=i[0],t=i[1]);switch(typeof e){case"string":return typeof t=="string"&&(r="",e.to(t,function(e){return r+=e}),e=r),e.substr(this.intRandom(e.length-1),1);case"number":return typeof t=="number"?n=String.fromCharCode(a(this.inRange(e,t))):String.fromCharCode(this.intRandom(e))}},e.prototype.inRange=function(e,t,n){var r,i;return i=e+this.random(t-e),typeof n=="number"&&(r=1/n,a(i*r)!==i*r&&(i-=i%n)),i=a(i*1e9)/1e9,i},e.prototype.inArray=function(e,t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m;if(e==null)return null;if(t==null)return e[this.intRandom(e.length-1)];if(t.length!==e.length)throw new Error("array and ratios arrays must have the same length");for(s=c=0,d=t.length;c<d;s=++c){i=t[s];if(s>0){r=t[s-1];if(r>i)throw new Error("ratios must be ordered when summed is true")}}if(n)o=t[t.length-1],t=t.map(function(e){return e/o});else{f=t.reduce(function(e,t){return e+t}),t=t.map(function(e){return e/f});for(s=h=0,v=t.length;h<v;s=++h)u=t[s],s>0&&(t[s]+=t[s-1])}a=this.get();for(s=p=0,m=t.length;p<m;s=++p){l=t[s];if(a<=l)return e[s]}},e.prototype["in"]=function(e,t,n){if(arguments.length>3)return this.inArray(arguments);switch(typeof e){case"number":return this.inRange(e,t);case"string":return this.inArray(e,t,n);case"object":if(Object.prototype.toString.call(e)==="[object Array]")return this.inArray(e,t,n);if(e.min!=null&&e.max!=null)return this.inRange(e.min,e.max,e.step);break;default:return null}},e.prototype.sort=function(){var e=this;return function(){return e.intPad(2)}},e.prototype.random=function(e){return this.get()*(e||1)},e.prototype.intRandom=function(e){return f(this.random(e))},e.prototype.pad=function(e){return e/2-this.random(e)},e.prototype.intPad=function(e){return f(this.pad(e))},e}(),this.chancejs.NoRandom=s,this.chancejs.MathRandom=r,this.chancejs.Linear=t,this.chancejs.LinearCongruential=n,this.chancejs.LaggedFibonnacci=e,this.chancejs.MersenneTwister=i,this.chancejs.PaulHoule=o,this.chancejs.Random=u}).call(this)