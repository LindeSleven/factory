(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(325)},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(10),r=a.n(s),i=a(13),o=a(26),c=a.n(o),m=a(42),h=(a(133),a(20));a(134),a(135);var p=class extends n.a.Component{render(){return n.a.createElement("div",{onClick:this.props.onClick,className:"Navbar-icons"},this.props.lijst?n.a.createElement("i",{className:"fas fa-map"},n.a.createElement("span",null,"Plattegrond")):n.a.createElement("i",{className:"fas fa-list-ul"},n.a.createElement("span",null,"Lijst")))}};var d=class extends n.a.Component{constructor(...e){super(...e),this.handleIndividualHelp=(()=>{this.props.onHelpIndividual(this.props.index)})}render(){let e=this.props.hal;return n.a.createElement("div",{className:"Hal ".concat(this.props.help&&"help"," ").concat(this.props.helpIndividual&&"help"),style:this.props.lijst?{display:"block",border:"0px"}:{position:"absolute",width:e.width,height:e.height,top:e.top,left:e.left,backgroundColor:this.props.achtergrondKleur}},n.a.createElement("ul",{className:"Hal-list"},n.a.createElement("li",{className:"Hal-name ".concat(this.props.helpIndividual&&"help")},!this.props.lijst&&n.a.createElement("button",{onClick:this.handleIndividualHelp,className:"btn-danger"},"NOOD"),n.a.createElement(i.b,{className:"underline",to:"/".concat(e.naam)},e.naam)),n.a.createElement("li",null,"Oppervlakte: ",e.oppervlakte," m\xb2"),n.a.createElement("li",null,"Aantal apparaten: ",e.apparaten.length),n.a.createElement("li",null,"Aantal acties: ",function(e){let t=0;const a=new Date;let l=new Date;return l.setDate(a.getDate()+1),e.apparaten.forEach(e=>{new Date(e.volgendeActie.datum)<l&&t++}),t}(e))))}};var u=class extends n.a.Component{render(){return n.a.createElement("div",null,n.a.createElement(p,{onClick:this.props.onClick,lijst:this.props.lijst}),this.props.lijst?null:n.a.createElement("button",{onClick:this.props.onHelp,className:"btn-danger"},"NOOD"),n.a.createElement("div",{style:{position:"relative",height:500},className:"Hal-container"},this.props.hallen.map((e,t)=>n.a.createElement(d,{key:e+t,index:t,hal:e,help:this.props.help,helpIndividual:this.props.helpIndividual[t],lijst:this.props.lijst,achtergrondKleur:this.props.achtergrondKleur,onHelpIndividual:this.props.onHelpIndividual}))))}},g=a(126),v=(a(140),a(329)),E=a(328),C=a(330);a(141);var f=class extends n.a.Component{render(){return n.a.createElement(v.a,{key:"top",placement:"top",overlay:n.a.createElement(E.a,{id:"tooltip"},n.a.createElement("p",null,"ID: ",this.props.app.ID),n.a.createElement("p",null,this.props.app.omschrijving),n.a.createElement("p",null,"volgende actie: ",this.props.app.volgendeActie.datum),n.a.createElement("p",null,"type: ",this.props.app.volgendeActie.type))},n.a.createElement(C.a,{className:"btn btn-secondary py-0",style:{fontSize:"0.8em"}},"i"))}};var b=class extends l.Component{constructor(...e){super(...e),this.handleIndividualHelp=(()=>{this.props.onHelpIndividual(this.props.index)})}render(){let e=this.props.hal;const t={position:"absolute",width:e.width,height:e.height,top:e.top,left:e.left};function a(e){let t="";const a=new Date;let l=new Date;return l.setDate(a.getDate()+1),t=new Date(e.volgendeActie.datum)<l}return n.a.createElement("div",null,n.a.createElement("div",{style:{position:"relative",height:400}},n.a.createElement("div",{key:e.ID,style:Object(g.a)({},t,{backgroundColor:this.props.achtergrondKleur}),className:"Hal ".concat(this.props.help&&"help"," ").concat(this.props.helpIndividual&&"help")},n.a.createElement("h2",null,e.naam),n.a.createElement("button",{onClick:this.handleIndividualHelp,className:"btn-danger"},"NOOD"),n.a.createElement("ul",null,e.apparaten.map(t=>n.a.createElement("div",{style:{position:"absolute",width:t.width,height:t.height,top:t.top,left:t.left,border:"5px solid lightgrey"},key:t.ID,className:"HalDetails-plattegrond"},n.a.createElement("ul",null,n.a.createElement(f,{app:t}),n.a.createElement("li",{className:"HalDetails-AppNaam"},t.naam),"machine"===t.categorie&&n.a.createElement(i.b,{to:"/".concat(e.naam,"/apparaat/").concat(t.ID)},n.a.createElement("i",{className:"fas fa-cogs",style:a(t)?{color:"red"}:null})),"lamp"===t.categorie&&n.a.createElement(i.b,{to:"/".concat(e.naam,"/apparaat/").concat(t.ID)},n.a.createElement("i",{className:"fas fa-lightbulb",style:a(t)?{color:"red"}:null})),"band"===t.categorie&&n.a.createElement(i.b,{to:"/".concat(e.naam,"/apparaat/").concat(t.ID)},n.a.createElement("i",{className:"fas fa-dolly-flatbed",style:a(t)?{color:"red"}:null})))))))),n.a.createElement(i.b,{to:"/",className:"btn btn-info"},"Go Back"))}},N=(a(143),a(47)),y=a.n(N);var k=class extends n.a.Component{constructor(e){super(e),this.state={id:this.props.app.ID,halNaam:this.props.halNaam,naam:this.props.app.naam,omschrijving:this.props.app.omschrijving,datumLaatsteActie:this.props.app.laatstUitgevoerdeActie.datum,typeLaatsteActie:this.props.app.laatstUitgevoerdeActie.type,omschrijvingLaatsteActie:this.props.app.laatstUitgevoerdeActie.omschrijving,datumVolgendeActie:this.props.app.volgendeActie.datum,typeVolgendeActie:this.props.app.volgendeActie.type,omschrijvingVolgendeActie:this.props.app.volgendeActie.omschrijving,serverErr:!1,serverErrDesc:"",waitingServerRes:!1,serverResSucces:!1},this.handleChange=this.handleChange.bind(this),this.handleClick=this.handleClick.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleChange(e){this.setState({[e.target.name]:e.target.value})}handleClick(){this.setState({datumLaatsteActie:this.state.datumVolgendeActie,typeLaatsteActie:this.state.typeVolgendeActie,omschrijvingLaatsteActie:this.state.omschrijvingVolgendeActie})}handleSubmit(e){var t=this;return Object(m.a)(c.a.mark(function a(){var l,n,s;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),l={naam:t.state.naam,omschrijving:t.state.omschrijving,laatstUitgevoerdeActie:{datum:t.state.datumLaatsteActie,type:t.state.typeLaatsteActie,omschrijving:t.state.omschrijvingLaatsteActie},volgendeActie:{datum:t.state.datumVolgendeActie,type:t.state.typeVolgendeActie,omschrijving:t.state.omschrijvingVolgendeActie}},t.setState({waitingServerRes:!0}),a.prev=3,a.next=6,y.a.post("http://localhost:3000/".concat(t.state.halNaam,"/apparaat/").concat(t.state.id),l);case 6:n=a.sent,t.setState({serverResSucces:!0}),console.log("Successfully updated:"),console.log(n),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(3),a.t0.response?(console.error(a.t0),s="Fout ".concat(a.t0.response.status,": ").concat(404===a.t0.response.status?"Onmogelijk te updaten, URL niet gevonden":"Probleem met server"),t.setState({serverErr:!0,serverErrDesc:s})):a.t0.request?console.log(a.t0.request):console.log("Error",a.t0.message);case 15:t.setState({waitingServerRes:!1});case 16:case"end":return a.stop()}},a,null,[[3,12]])}))()}render(){let e=this.props.app;return n.a.createElement("div",null,n.a.createElement("h2",{className:"AppDetails-formTitle"},"Apparaat met ID ",e.ID," wijzigen"),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"ID",className:"col-sm-2 col-form-label"},"ID"),n.a.createElement("input",{type:"text",className:"form-control col-sm-8",placeholder:e.ID,id:"ID",readOnly:!0})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"categorie",className:"col-sm-2 col-form-label"},"Categorie"),n.a.createElement("input",{type:"text",className:"form-control col-sm-8",id:"categorie",placeholder:e.categorie,readOnly:!0})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"naam",className:"col-sm-2 col-form-label"},"Naam"),n.a.createElement("textarea",{className:"form-control col-sm-8",id:"naam",maxLength:"100",name:"naam",value:this.state.naam,required:!0,onChange:this.handleChange})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"omschrijving",className:"col-sm-2 col-form-label"},"Omschrijving"),n.a.createElement("textarea",{className:"form-control col-sm-8",id:"omschrijving",name:"omschrijving",value:this.state.omschrijving,onChange:this.handleChange})),n.a.createElement("section",null,n.a.createElement("h4",null,"Laatst uitgevoerde actie"),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"datumLaatsteActie",className:"col-sm-2 col-form-label"},"Datum"),n.a.createElement("input",{type:"date",className:"form-control col-sm-8",id:"datumLaatsteActie",name:"datumLaatsteActie",value:this.state.datumLaatsteActie,onChange:this.handleChange})),n.a.createElement("fieldset",{className:"form-group"},n.a.createElement("div",{className:"row"},n.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0 "},"Type"),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"typeLaatsteActie",name:"typeLaatsteActie",value:"vervanging",onChange:this.handleChange,checked:"vervanging"===this.state.typeLaatsteActie}),n.a.createElement("label",{htmlFor:"typeLaatsteActie",className:"form-check-label"},"vervanging")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"typeLaatsteActie",name:"typeLaatsteActie",value:"nazicht",checked:"nazicht"===this.state.typeLaatsteActie,onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"typeLaatsteActie",className:"form-check-label"},"nazicht")))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"omschrijving",className:"col-sm-2 col-form-label"},"Omschrijving"),n.a.createElement("textarea",{className:"form-control col-sm-8",id:"omschrijving",name:"omschrijvingLaatsteActie",value:this.state.omschrijvingLaatsteActie,onChange:this.handleChange}))),n.a.createElement("section",null,n.a.createElement("h4",{className:"AppDetails-volgende"},"Eerstvolgende actie"),n.a.createElement("button",{className:"btn btn-danger AppDetails-actieUitgevoerd",type:"button",onClick:this.handleClick},"Actie uitgevoerd"),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"datumVolgendeActie",className:"col-sm-2 col-form-label"},"Datum"),n.a.createElement("input",{type:"date",className:"form-control col-sm-8",id:"datumVolgendeActie",name:"datumVolgendeActie",value:this.state.datumVolgendeActie,onChange:this.handleChange})),n.a.createElement("fieldset",{className:"form-group"},n.a.createElement("div",{className:"row"},n.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0 "},"Type"),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"typeVolgendeActie",name:"typeVolgendeActie",value:"vervanging",onChange:this.handleChange,checked:"vervanging"===this.state.typeVolgendeActie}),n.a.createElement("label",{htmlFor:"typeVolgendeActie",className:"form-check-label"},"vervanging")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"typeVolgendeActie",name:"typeVolgendeActie",value:"nazicht",onChange:this.handleChange,checked:"nazicht"===this.state.typeVolgendeActie}),n.a.createElement("label",{htmlFor:"typeVolgendeActie",className:"form-check-label"},"nazicht")))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"omschrijving",className:"col-sm-2 col-form-label"},"Omschrijving"),n.a.createElement("textarea",{className:"form-control col-sm-8",id:"omschrijving",name:"omschrijvingVolgendeActie",value:this.state.omschrijvingVolgendeActie,onChange:this.handleChange}))),n.a.createElement(i.b,{to:"/",className:"btn btn-primary"},"Vorige"),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")),this.state.serverErr&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.serverErrDesc),this.state.waitingServerRes&&n.a.createElement("div",{className:"alert alert-secondary",role:"alert"},"Waiting for server..."),this.state.serverResSucces&&n.a.createElement("div",{className:"alert alert-success",role:"alert"},"Successfully updated!"))}};var A=class extends l.Component{render(){return n.a.createElement(h.d,null,n.a.createElement(h.b,{exact:!0,path:"/",render:()=>n.a.createElement(u,{hallen:this.props.hallen,lijst:this.props.lijst,help:this.props.help,helpIndividual:this.props.helpIndividual,onClick:this.props.onClick,onHelp:this.props.onHelp,achtergrondKleur:this.props.achtergrondKleur,onHelpIndividual:this.props.onHelpIndividual})}),n.a.createElement(h.b,{exact:!0,path:"/:naam",render:e=>{let t=e.match.params.naam,a=this.props.hallen.find(e=>e.naam.toLowerCase()===t.toLowerCase()),l=this.props.hallen.findIndex(e=>e.naam.toLowerCase()===t.toLowerCase());return n.a.createElement(b,Object.assign({},e,{hal:a,index:l,help:this.props.help,helpIndividual:this.props.helpIndividual[l],onHelpIndividual:this.props.onHelpIndividual,achtergrondKleur:this.props.achtergrondKleur}))}}),n.a.createElement(h.b,{exact:!0,path:"/:naam/apparaat/:id",render:e=>{let t=e.match.params.naam,a=e.match.params.id,l=this.props.hallen.find(e=>e.naam.toLowerCase()===t.toLowerCase()),s=l.apparaten.find(e=>e.ID.toLowerCase()===a.toLowerCase());return n.a.createElement(k,Object.assign({},e,{app:s,halNaam:l.naam}))}}),n.a.createElement(h.a,{to:"/"}))}},j=a(124);var w=class extends n.a.Component{constructor(...e){super(...e),this.state={displayColorPicker:!1,color:"#fff"},this.handleClick=(()=>{this.setState({displayColorPicker:!this.state.displayColorPicker})}),this.handleChangeComplete=(e=>{this.setState({color:e.hex}),this.props.onChangeColor(this.props.option,e.hex)}),this.handleClose=(()=>{this.setState({displayColorPicker:!1})})}render(){return n.a.createElement("div",null,n.a.createElement("button",{onClick:this.handleClick},"Pick Color"),this.state.displayColorPicker?n.a.createElement("div",{style:{position:"absolute",zIndex:"2"}},n.a.createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:this.handleClose}),n.a.createElement(j.ChromePicker,{color:this.state.color,onChangeComplete:this.handleChangeComplete})):null)}};a(323);var I=function(e){return n.a.createElement("div",null,n.a.createElement("section",{className:"ColorSettings-Section"},n.a.createElement("p",{className:"ColorSettings-Title"},"Achtergrond: "),n.a.createElement(w,{onChangeColor:e.onChangeColor,option:"achtergrondKleur"})),n.a.createElement("section",{className:"ColorSettings-Section"},n.a.createElement("p",{className:"ColorSettings-Title"},"Text: "),n.a.createElement(w,{onChangeColor:e.onChangeColor,option:"tekstKleur"})),n.a.createElement("section",{className:"ColorSettings-Section"},n.a.createElement("p",{className:"ColorSettings-Title"},"Alarm: "),n.a.createElement(w,{onChangeColor:e.onChangeColor,option:"alarmKleur"})))};a(324);var x=function(e){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header-colorsettings"},n.a.createElement(I,{onChangeColor:e.onChangeColor})),n.a.createElement("div",{className:"header-title"},n.a.createElement("h1",{className:"display-4"},"Factory",n.a.createElement("i",{className:"fas fa-industry"})))))};var S=class extends n.a.Component{constructor(e){super(e),this.handleToggleClick=(()=>{this.setState({lijstView:!this.state.lijstView})}),this.handleHelp=(()=>{this.setState({help:!this.state.help})}),this.onHelpIndividual=(e=>{let t=this.state.helpIndividual;t[e]=!t[e],this.setState({helpIndividual:t})}),this.handleChangeColor=((e,t)=>{switch(e){case"achtergrondKleur":this.setState({achtergrondKleur:t});break;case"tekstKleur":this.setState({tekstKleur:t});break;case"alarmKleur":this.setState({alarmKleur:t}),document.documentElement.style.setProperty("--color-animation","".concat(t));break;default:console.log("no valid color option...")}}),this.state={achtergrondKleur:"#FFFFFF",tekstKleur:"#000000",alarmKleur:"#ff4136",lijstView:!0,isLoading:!0,help:!1,hallen:[],helpIndividual:[]},this.handleToggleClick=this.handleToggleClick.bind(this),this.onHelpIndividual=this.onHelpIndividual.bind(this),this.handleChangeColor.bind=this.handleChangeColor.bind(this)}componentDidMount(){var e=this;return Object(m.a)(c.a.mark(function t(){var a,l;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("http://localhost:3000/hallen.json");case 2:a=t.sent,l=a.data.hallen,e.setState({isLoading:!1,hallen:l,helpIndividual:new Array(l.length).fill(!1)});case 5:case"end":return t.stop()}},t)}))()}render(){return this.state.isLoading?n.a.createElement("div",{className:"spinner"},n.a.createElement("i",{className:"fas fa-7x fa-spinner fa-spin"}),n.a.createElement("h1",null,"Loading...")):n.a.createElement("div",{style:{color:this.state.tekstKleur}},n.a.createElement(x,{onChangeColor:this.handleChangeColor}),n.a.createElement(A,{hallen:this.state.hallen,lijst:this.state.lijstView,help:this.state.help,helpIndividual:this.state.helpIndividual,onClick:this.handleToggleClick,onHelp:this.handleHelp,onHelpIndividual:this.onHelpIndividual,achtergrondKleur:this.state.achtergrondKleur}))}};const D=document.getElementById("root");r.a.render(n.a.createElement(i.a,null,n.a.createElement(S,null)),D)}},[[127,1,2]]]);
//# sourceMappingURL=main.ea6169e1.chunk.js.map