(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reminder"],{"0d39":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=function(e){return Object(r["u"])("data-v-7a023d07"),e=e(),Object(r["s"])(),e},u={class:"reminder"},a=c((function(){return Object(r["f"])("h1",null,"Create Reminder",-1)})),i=c((function(){return Object(r["f"])("hr",null,null,-1)})),o=c((function(){return Object(r["f"])("label",null,"Reminder Message",-1)})),f=c((function(){return Object(r["f"])("small",null,"Please write what the reminder is for",-1)})),l=c((function(){return Object(r["f"])("hr",null,null,-1)})),s=c((function(){return Object(r["f"])("label",null,"Ticket number*",-1)})),d=c((function(){return Object(r["f"])("hr",null,null,-1)})),b=c((function(){return Object(r["f"])("button",null,"Submit",-1)})),m=c((function(){return Object(r["f"])("label",null,"* = optional",-1)}));function p(e,t,n,c,p,j){return Object(r["r"])(),Object(r["e"])("div",u,[a,i,Object(r["f"])("form",{onSubmit:t[2]||(t[2]=Object(r["G"])((function(){return j.createEntryAPI&&j.createEntryAPI.apply(j,arguments)}),["prevent"]))},[o,Object(r["F"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.reminderMsg=e})},null,512),[[r["C"],p.reminderMsg]]),f,l,s,Object(r["F"])(Object(r["f"])("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.ticketID=e})},null,512),[[r["C"],p.ticketID]]),d,b,m],32)])}var j=n("1da1"),h=(n("96cf"),n("d3b7"),n("99af"),"".concat("https://clv-it-whiteboard-api.azurewebsites.net","/api")),O={name:"Reminder",data:function(){return{userDetails:"Test",userID:1234,reminderMsg:null,ticketID:null}},methods:{createEntryAPI:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h,"/reminder-post?userDetails=").concat(e.userDetails,"&userID=").concat(e.userID,"&reminderMsg=").concat(e.reminderMsg,"&ticketID=").concat(e.ticketID));case 2:return t.next=4,t.sent.json().then((function(e){}));case 4:case"end":return t.stop()}}),t)})))()}}},v=(n("faf9"),n("d959")),w=n.n(v);const I=w()(O,[["render",p],["__scopeId","data-v-7a023d07"]]);t["default"]=I},8418:function(e,t,n){"use strict";var r=n("a04b"),c=n("9bf2"),u=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?c.f(e,a,u(0,n)):e[a]=n}},"99af":function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),u=n("d039"),a=n("e8b5"),i=n("861d"),o=n("7b0b"),f=n("07fa"),l=n("8418"),s=n("65f0"),d=n("1dde"),b=n("b622"),m=n("2d00"),p=b("isConcatSpreadable"),j=9007199254740991,h="Maximum allowed index exceeded",O=c.TypeError,v=m>=51||!u((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),w=d("concat"),I=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},g=!v||!w;r({target:"Array",proto:!0,forced:g},{concat:function(e){var t,n,r,c,u,a=o(this),i=s(a,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(u=-1===t?a:arguments[t],I(u)){if(c=f(u),d+c>j)throw O(h);for(n=0;n<c;n++,d++)n in u&&l(i,d,u[n])}else{if(d>=j)throw O(h);l(i,d++,u)}return i.length=d,i}})},a90e:function(e,t,n){},faf9:function(e,t,n){"use strict";n("a90e")}}]);
//# sourceMappingURL=reminder.1204bf9d.js.map