function selectYear(){for(var t="",e=new Date,a=e.getFullYear()+2,i=2007;i<a;i++)t+="<option value="+i+">"+i+"</option>";$("#year").html(t),selectMonth()}function selectMonth(){for(var t='<option value="#"> Escolha um mês... </option>',e=1;e<13;e++)t+="<option value="+e+">"+e+"</option>";$("#month").html(t)}function start(){$(".pages").hide(),$("#forToday").show(),tableForToday(1)}function cleanTable(){$("#table").html(""),$(".newLine").html("")}function changingRoom(t){formTable("room1"==t?1:"room2"==t?2:3)}function formTable(t){var e=$("li[class='active mainLinks'] a").attr("href");"#forToday"==e?tableForToday(t):"#listMeetings"==e?tableComplete(t):formInclusion()}function tableForToday(t){cleanTable(),dateToday(),$("#pagesAndTable").show();var e=new Date,a=e.getDate(),i=e.getMonth()+1,s=e.getFullYear(),n="",o=table.forToday;i<10&&(i="0"+i.toString()),$.ajax({type:"GET",url:ip.query+t+"/"+s+"/"+i+"/"+a,dataType:"html",async:!1,success:function(t){n+=t}}),$("#table").html(o),$(".newLine").append(n)}function tableComplete(t){cleanTable(),selectYear(),$("#pagesAndTable").show();var e="",a=table.complete;$("#table").html(a),$(".newLine").append(e)}function formInclusion(){$("#pagesAndTable").hide(),cleanTable()}function dateToday(){var t=new Date,e=t.getDate(),a=t.getMonth()+1,i=t.getFullYear(),s='<i class="fa fa-calendar" aria-hidden="true"></i> '+[e,a,i].join("/");$("#dateToday").html(s)}var ip={query:"http://localhost:9000/search/"},table={forToday:'<table class="table table-bordered table-striped"><thead><tr><th>Início</th><th>Término</th><th>Responsável</th><th>Pauta</th></tr></thead><tbody class="newLine"></tbody></table>',complete:'<table class="table table-bordered table-striped"><thead><tr><th>Data</th><th>Início</th><th>Término</th><th>Responsável</th><th>Pauta</th></tr></thead><tbody class="newLine"></tbody></table>'};$(document).ready(function(){start(),$(".links").click(function(){$("li[class='active activeRoom']").removeClass("active activeRoom"),$("li a[id='room1']").parent().addClass("active activeRoom");var t=$(this).attr("href");$("li[class='active mainLinks']").removeClass("active mainLinks"),$("li a[href='"+t+"']").parent().addClass("active mainLinks"),$(".pages").hide(),$(t).show(),formTable(1)}),$(".room").click(function(){var t=$(this).attr("id");$("li[class='active activeRoom']").removeClass("active activeRoom"),$("li a[id='"+t+"']").parent().addClass("active activeRoom"),changingRoom(t)}),$("#repeat").click(function(){$("#myModal").modal()}),$("#calendar").datepicker({format:"dd/mm/yyyy",language:"pt-br"}),$("#month").change(function(){})}),function(t){function e(){return new Date(Date.UTC.apply(Date,arguments))}function a(e,a){var i,s=t(e).data(),n={},o=new RegExp("^"+a.toLowerCase()+"([A-Z])"),a=new RegExp("^"+a.toLowerCase());for(var r in s)a.test(r)&&(i=r.replace(o,function(t,e){return e.toLowerCase()}),n[i]=s[r]);return n}function i(e){var a={};if(l[e]||(e=e.split("-")[0],l[e])){var i=l[e];return t.each(d,function(t,e){e in i&&(a[e]=i[e])}),a}}var s=t(window),n=function(e,a){this._process_options(a),this.element=t(e),this.isInline=!1,this.isInput=this.element.is("input"),this.component=!!this.element.is(".date")&&this.element.find(".add-on, .btn"),this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=t(c.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(t,e){return parseInt(e)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};n.prototype={constructor:n,_process_options:function(e){this._o=t.extend({},this._o,e);var a=this.o=t.extend({},this._o),i=a.language;switch(l[i]||(i=i.split("-")[0],l[i]||(i=h.language)),a.language=i,a.startView){case 2:case"decade":a.startView=2;break;case 1:case"year":a.startView=1;break;default:a.startView=0}switch(a.minViewMode){case 1:case"months":a.minViewMode=1;break;case 2:case"years":a.minViewMode=2;break;default:a.minViewMode=0}a.startView=Math.max(a.startView,a.minViewMode),a.weekStart%=7,a.weekEnd=(a.weekStart+6)%7;var s=c.parseFormat(a.format);a.startDate!==-(1/0)&&(a.startDate?a.startDate instanceof Date?a.startDate=this._local_to_utc(this._zero_time(a.startDate)):a.startDate=c.parseDate(a.startDate,s,a.language):a.startDate=-(1/0)),a.endDate!==1/0&&(a.endDate?a.endDate instanceof Date?a.endDate=this._local_to_utc(this._zero_time(a.endDate)):a.endDate=c.parseDate(a.endDate,s,a.language):a.endDate=1/0),a.daysOfWeekDisabled=a.daysOfWeekDisabled||[],t.isArray(a.daysOfWeekDisabled)||(a.daysOfWeekDisabled=a.daysOfWeekDisabled.split(/[,\s]*/)),a.daysOfWeekDisabled=t.map(a.daysOfWeekDisabled,function(t){return parseInt(t,10)});var n=String(a.orientation).toLowerCase().split(/\s+/g),o=a.orientation.toLowerCase();if(n=t.grep(n,function(t){return/^auto|left|right|top|bottom$/.test(t)}),a.orientation={x:"auto",y:"auto"},o&&"auto"!==o)if(1===n.length)switch(n[0]){case"top":case"bottom":a.orientation.y=n[0];break;case"left":case"right":a.orientation.x=n[0]}else o=t.grep(n,function(t){return/^left|right$/.test(t)}),a.orientation.x=o[0]||"auto",o=t.grep(n,function(t){return/^top|bottom$/.test(t)}),a.orientation.y=o[0]||"auto";else;},_events:[],_secondaryEvents:[],_applyEvents:function(t){for(var e,a,i=0;i<t.length;i++)e=t[i][0],a=t[i][1],e.on(a)},_unapplyEvents:function(t){for(var e,a,i=0;i<t.length;i++)e=t[i][0],a=t[i][1],e.off(a)},_buildEvents:function(){this.isInput?this._events=[[this.element,{focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}],[this.component,{click:t.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:t.proxy(this.show,this)}]],this._secondaryEvents=[[this.picker,{click:t.proxy(this.click,this)}],[t(window),{resize:t.proxy(this.place,this)}],[t(document),{mousedown:t.proxy(function(t){this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(e,a){var i=a||this.date,s=this._utc_to_local(i);this.element.trigger({type:e,date:s,format:t.proxy(function(t){var e=t||this.o.format;return c.formatDate(i,e,this.o.language)},this)})},show:function(t){this.isInline||this.picker.appendTo("body"),this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),this._attachSecondaryEvents(),t&&t.preventDefault(),this._trigger("show")},hide:function(t){this.isInline||this.picker.is(":visible")&&(this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"))},remove:function(){this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date},_utc_to_local:function(t){return new Date(t.getTime()+6e4*t.getTimezoneOffset())},_local_to_utc:function(t){return new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()))},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){return this.date},setDate:function(t){this.setUTCDate(this._local_to_utc(t))},setUTCDate:function(t){this.date=t,this.setValue()},setValue:function(){var t=this.getFormattedDate();this.isInput?this.element.val(t).change():this.component&&this.element.find("input").val(t).change()},getFormattedDate:function(t){return void 0===t&&(t=this.o.format),c.formatDate(this.date,t,this.o.language)},setStartDate:function(t){this._process_options({startDate:t}),this.update(),this.updateNavArrows()},setEndDate:function(t){this._process_options({endDate:t}),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(t){this._process_options({daysOfWeekDisabled:t}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var e=this.picker.outerWidth(),a=this.picker.outerHeight(),i=10,n=s.width(),o=s.height(),r=s.scrollTop(),h=parseInt(this.element.parents().filter(function(){return"auto"!=t(this).css("z-index")}).first().css("z-index"))+10,d=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),c=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),p=d.left,u=d.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(p-=e-c)):(this.picker.addClass("datepicker-orient-left"),d.left<0?p-=d.left-i:d.left+e>n&&(p=n-e-i));var f,g,v=this.o.orientation.y;"auto"===v&&(f=-r+d.top-a,g=r+o-(d.top+l+a),v=Math.max(f,g)===g?"top":"bottom"),this.picker.addClass("datepicker-orient-"+v),"top"===v?u+=l:u-=a+parseInt(this.picker.css("padding-top")),this.picker.css({top:u,left:p,zIndex:h})}},_allow_update:!0,update:function(){if(this._allow_update){var t,e=new Date(this.date),a=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(t=arguments[0],t instanceof Date&&(t=this._local_to_utc(t)),a=!0):(t=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),delete this.element.data().date),this.date=c.parseDate(t,this.o.format,this.o.language),a?this.setValue():t?e.getTime()!==this.date.getTime()&&this._trigger("changeDate"):this._trigger("clearDate"),this.date<this.o.startDate?(this.viewDate=new Date(this.o.startDate),this.date=new Date(this.o.startDate)):this.date>this.o.endDate?(this.viewDate=new Date(this.o.endDate),this.date=new Date(this.o.endDate)):(this.viewDate=new Date(this.date),this.date=new Date(this.date)),this.fill()}},fillDow:function(){var t=this.o.weekStart,e="<tr>";if(this.o.calendarWeeks){var a='<th class="cw">&nbsp;</th>';e+=a,this.picker.find(".datepicker-days thead tr:first-child").prepend(a)}for(;t<this.o.weekStart+7;)e+='<th class="dow">'+l[this.o.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){for(var t="",e=0;e<12;)t+='<span class="month">'+l[this.o.language].monthsShort[e++]+"</span>";this.picker.find(".datepicker-months td").html(t)},setRange:function(e){e&&e.length?this.range=t.map(e,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(e){var a=[],i=this.viewDate.getUTCFullYear(),s=this.viewDate.getUTCMonth(),n=this.date.valueOf(),o=new Date;return e.getUTCFullYear()<i||e.getUTCFullYear()==i&&e.getUTCMonth()<s?a.push("old"):(e.getUTCFullYear()>i||e.getUTCFullYear()==i&&e.getUTCMonth()>s)&&a.push("new"),this.o.todayHighlight&&e.getUTCFullYear()==o.getFullYear()&&e.getUTCMonth()==o.getMonth()&&e.getUTCDate()==o.getDate()&&a.push("today"),n&&e.valueOf()==n&&a.push("active"),(e.valueOf()<this.o.startDate||e.valueOf()>this.o.endDate||t.inArray(e.getUTCDay(),this.o.daysOfWeekDisabled)!==-1)&&a.push("disabled"),this.range&&(e>this.range[0]&&e<this.range[this.range.length-1]&&a.push("range"),t.inArray(e.valueOf(),this.range)!=-1&&a.push("selected")),a},fill:function(){var a,i=new Date(this.viewDate),s=i.getUTCFullYear(),n=i.getUTCMonth(),o=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),r=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,d=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0;this.date&&this.date.valueOf();this.picker.find(".datepicker-days thead th.datepicker-switch").text(l[this.o.language].months[n]+" "+s),this.picker.find("tfoot th.today").text(l[this.o.language].today).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot th.clear").text(l[this.o.language].clear).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var p=e(s,n-1,28,0,0,0,0),u=c.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(u),p.setUTCDate(u-(p.getUTCDay()-this.o.weekStart+7)%7);var f=new Date(p);f.setUTCDate(f.getUTCDate()+42),f=f.valueOf();for(var g,v=[];p.valueOf()<f;){if(p.getUTCDay()==this.o.weekStart&&(v.push("<tr>"),this.o.calendarWeeks)){var m=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),D=new Date(+m+(11-m.getUTCDay())%7*864e5),y=new Date(+(y=e(D.getUTCFullYear(),0,1))+(11-y.getUTCDay())%7*864e5),w=(D-y)/864e5/7+1;v.push('<td class="cw">'+w+"</td>")}if(g=this.getClassNames(p),g.push("day"),this.o.beforeShowDay!==t.noop){var k=this.o.beforeShowDay(this._utc_to_local(p));void 0===k?k={}:"boolean"==typeof k?k={enabled:k}:"string"==typeof k&&(k={classes:k}),k.enabled===!1&&g.push("disabled"),k.classes&&(g=g.concat(k.classes.split(/\s+/))),k.tooltip&&(a=k.tooltip)}g=t.unique(g),v.push('<td class="'+g.join(" ")+'"'+(a?' title="'+a+'"':"")+">"+p.getUTCDate()+"</td>"),p.getUTCDay()==this.o.weekEnd&&v.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(v.join(""));var T=this.date&&this.date.getUTCFullYear(),b=this.picker.find(".datepicker-months").find("th:eq(1)").text(s).end().find("span").removeClass("active");T&&T==s&&b.eq(this.date.getUTCMonth()).addClass("active"),(s<o||s>h)&&b.addClass("disabled"),s==o&&b.slice(0,r).addClass("disabled"),s==h&&b.slice(d+1).addClass("disabled"),v="",s=10*parseInt(s/10,10);var C=this.picker.find(".datepicker-years").find("th:eq(1)").text(s+"-"+(s+9)).end().find("td");s-=1;for(var _=-1;_<11;_++)v+='<span class="year'+(_==-1?" old":10==_?" new":"")+(T==s?" active":"")+(s<o||s>h?" disabled":"")+'">'+s+"</span>",s+=1;C.html(v)},updateNavArrows:function(){if(this._allow_update){var t=new Date(this.viewDate),e=t.getUTCFullYear(),a=t.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&e<=this.o.startDate.getUTCFullYear()&&a<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()&&a>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-(1/0)&&e<=this.o.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(a){a.preventDefault();var i=t(a.target).closest("span, td, th");if(1==i.length)switch(i[0].nodeName.toLowerCase()){case"th":switch(i[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var s=c.modes[this.viewMode].navStep*("prev"==i[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,s),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,s),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var n=new Date;n=e(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0),this.showMode(-2);var o="linked"==this.o.todayBtn?null:"view";this._setDate(n,o);break;case"clear":var r;this.isInput?r=this.element:this.component&&(r=this.element.find("input")),r&&r.val("").change(),this._trigger("changeDate"),this.update(),this.o.autoclose&&this.hide()}break;case"span":if(!i.is(".disabled")){if(this.viewDate.setUTCDate(1),i.is(".month")){var h=1,d=i.parent().find("span").index(i),l=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(d),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(e(l,d,h,0,0,0,0))}else{var l=parseInt(i.text(),10)||0,h=1,d=0;this.viewDate.setUTCFullYear(l),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(e(l,d,h,0,0,0,0))}this.showMode(-1),this.fill()}break;case"td":if(i.is(".day")&&!i.is(".disabled")){var h=parseInt(i.text(),10)||1,l=this.viewDate.getUTCFullYear(),d=this.viewDate.getUTCMonth();i.is(".old")?0===d?(d=11,l-=1):d-=1:i.is(".new")&&(11==d?(d=0,l+=1):d+=1),this._setDate(e(l,d,h,0,0,0,0))}}},_setDate:function(t,e){e&&"date"!=e||(this.date=new Date(t)),e&&"view"!=e||(this.viewDate=new Date(t)),this.fill(),this.setValue(),this._trigger("changeDate");var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.change(),!this.o.autoclose||e&&"date"!=e||this.hide()},moveMonth:function(t,e){if(!e)return t;var a,i,s=new Date(t.valueOf()),n=s.getUTCDate(),o=s.getUTCMonth(),r=Math.abs(e);if(e=e>0?1:-1,1==r)i=e==-1?function(){return s.getUTCMonth()==o}:function(){return s.getUTCMonth()!=a},a=o+e,s.setUTCMonth(a),(a<0||a>11)&&(a=(a+12)%12);else{for(var h=0;h<r;h++)s=this.moveMonth(s,e);a=s.getUTCMonth(),s.setUTCDate(n),i=function(){return a!=s.getUTCMonth()}}for(;i();)s.setUTCDate(--n),s.setUTCMonth(a);return s},moveYear:function(t,e){return this.moveMonth(t,12*e)},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(this.picker.is(":not(:visible)"))return void(27==t.keyCode&&this.show());var e,a,i,s=!1;switch(t.keyCode){case 27:this.hide(),t.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;e=37==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e),this._trigger("changeYear",this.viewDate)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e),this._trigger("changeMonth",this.viewDate)):(a=new Date(this.date),a.setUTCDate(this.date.getUTCDate()+e),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),s=!0);break;case 38:case 40:if(!this.o.keyboardNavigation)break;e=38==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e),this._trigger("changeYear",this.viewDate)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e),this._trigger("changeMonth",this.viewDate)):(a=new Date(this.date),a.setUTCDate(this.date.getUTCDate()+7*e),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+7*e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),s=!0);break;case 13:this.hide(),t.preventDefault();break;case 9:this.hide()}if(s){this._trigger("changeDate");var n;this.isInput?n=this.element:this.component&&(n=this.element.find("input")),n&&n.change()}},showMode:function(t){t&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+t))),this.picker.find(">div").hide().filter(".datepicker-"+c.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var o=function(e,a){this.element=t(e),this.inputs=t.map(a.inputs,function(t){return t.jquery?t[0]:t}),delete a.inputs,t(this.inputs).datepicker(a).bind("changeDate",t.proxy(this.dateUpdated,this)),this.pickers=t.map(this.inputs,function(e){return t(e).data("datepicker")}),this.updateDates()};o.prototype={updateDates:function(){this.dates=t.map(this.pickers,function(t){return t.date}),this.updateRanges()},updateRanges:function(){var e=t.map(this.dates,function(t){return t.valueOf()});t.each(this.pickers,function(t,a){a.setRange(e)})},dateUpdated:function(e){var a=t(e.target).data("datepicker"),i=a.getUTCDate(),s=t.inArray(e.target,this.inputs),n=this.inputs.length;if(s!=-1){if(i<this.dates[s])for(;s>=0&&i<this.dates[s];)this.pickers[s--].setUTCDate(i);else if(i>this.dates[s])for(;s<n&&i>this.dates[s];)this.pickers[s++].setUTCDate(i);this.updateDates()}},remove:function(){t.map(this.pickers,function(t){t.remove()}),delete this.element.data().datepicker}};var r=t.fn.datepicker;t.fn.datepicker=function(e){var s=Array.apply(null,arguments);s.shift();var r;return this.each(function(){var d=t(this),l=d.data("datepicker"),c="object"==typeof e&&e;if(!l){var p=a(this,"date"),u=t.extend({},h,p,c),f=i(u.language),g=t.extend({},h,f,p,c);if(d.is(".input-daterange")||g.inputs){var v={inputs:g.inputs||d.find("input").toArray()};d.data("datepicker",l=new o(this,t.extend(g,v)))}else d.data("datepicker",l=new n(this,g))}if("string"==typeof e&&"function"==typeof l[e]&&(r=l[e].apply(l,s),void 0!==r))return!1}),void 0!==r?r:this};var h=t.fn.datepicker.defaults={autoclose:!1,beforeShowDay:t.noop,calendarWeeks:!1,clearBtn:!1,daysOfWeekDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0},d=t.fn.datepicker.locale_opts=["format","rtl","weekStart"];t.fn.datepicker.Constructor=n;var l=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},c={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4===0&&t%100!==0||t%400===0},getDaysInMonth:function(t,e){return[31,c.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(t){var e=t.replace(this.validParts,"\0").split("\0"),a=t.match(this.validParts);if(!e||!e.length||!a||0===a.length)throw new Error("Invalid date format.");return{separators:e,parts:a}},parseDate:function(a,i,s){if(a instanceof Date)return a;if("string"==typeof i&&(i=c.parseFormat(i)),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)){var o,r,h=/([\-+]\d+)([dmwy])/,d=a.match(/([\-+]\d+)([dmwy])/g);a=new Date;for(var p=0;p<d.length;p++)switch(o=h.exec(d[p]),r=parseInt(o[1]),o[2]){case"d":a.setUTCDate(a.getUTCDate()+r);break;case"m":a=n.prototype.moveMonth.call(n.prototype,a,r);break;case"w":a.setUTCDate(a.getUTCDate()+7*r);break;case"y":a=n.prototype.moveYear.call(n.prototype,a,r)}return e(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),0,0,0)}var u,f,o,d=a&&a.match(this.nonpunctuation)||[],a=new Date,g={},v=["yyyy","yy","M","MM","m","mm","d","dd"],m={yyyy:function(t,e){return t.setUTCFullYear(e)},yy:function(t,e){return t.setUTCFullYear(2e3+e)},m:function(t,e){if(isNaN(t))return t;for(e-=1;e<0;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!=e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};m.M=m.MM=m.mm=m.m,m.dd=m.d,a=e(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0);var D=i.parts.slice();if(d.length!=D.length&&(D=t(D).filter(function(e,a){return t.inArray(a,v)!==-1}).toArray()),d.length==D.length){for(var p=0,y=D.length;p<y;p++){if(u=parseInt(d[p],10),o=D[p],isNaN(u))switch(o){case"MM":f=t(l[s].months).filter(function(){var t=this.slice(0,d[p].length),e=d[p].slice(0,t.length);return t==e}),u=t.inArray(f[0],l[s].months)+1;break;case"M":f=t(l[s].monthsShort).filter(function(){var t=this.slice(0,d[p].length),e=d[p].slice(0,t.length);return t==e}),u=t.inArray(f[0],l[s].monthsShort)+1}g[o]=u}for(var w,k,p=0;p<v.length;p++)k=v[p],k in g&&!isNaN(g[k])&&(w=new Date(a),m[k](w,g[k]),isNaN(w)||(a=w))}return a},formatDate:function(e,a,i){"string"==typeof a&&(a=c.parseFormat(a));var s={d:e.getUTCDate(),D:l[i].daysShort[e.getUTCDay()],DD:l[i].days[e.getUTCDay()],m:e.getUTCMonth()+1,M:l[i].monthsShort[e.getUTCMonth()],MM:l[i].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m;for(var e=[],n=t.extend([],a.separators),o=0,r=a.parts.length;o<=r;o++)n.length&&e.push(n.shift()),e.push(s[a.parts[o]]);return e.join("")},headTemplate:'<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};c.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+c.headTemplate+"<tbody></tbody>"+c.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+"</table></div></div>",t.fn.datepicker.DPGlobal=c,t.fn.datepicker.noConflict=function(){return t.fn.datepicker=r,this},t(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(e){var a=t(this);a.data("datepicker")||(e.preventDefault(),a.datepicker("show"))}),t(function(){t('[data-provide="datepicker-inline"]').datepicker()})}(window.jQuery);