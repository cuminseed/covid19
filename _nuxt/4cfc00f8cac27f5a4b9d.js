(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{480:function(t,e,r){"use strict";r.r(e);var n=r(385),c=(r(41),r(11)),o=r(352),h=r(382),d=r(351),l={name:"ContactsCard",components:{TimeBarChart:o.a},data:function(){return{contacts:{loaded:!1,last_update:""},contactsGraph:[],convertToDateFromData:d.a}},created:function(){this.getContactsGraphFromAPI()},methods:{getContactsGraphFromAPI:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/contacts.json").then((function(e){t.contactsGraph=Object(h.a)(e.data),t.contacts.last_update=e.last_update,t.contacts.loaded=!0})).catch((function(e){t.$emit("failed","新型コロナコールセンター相談件数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},m=r(13),$=r(48),f=r.n($),C=r(475),component=Object(m.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{"chart-data":this.contactsGraph,date:this.convertToDateFromData(this.contacts.last_update),loaded:this.contacts.loaded,"source-from":this.$t("DATA-SMART CITY SAPPORO"),title:this.$t("新型コロナコールセンター相談件数(札幌市保健所値)"),unit:this.$t("件"),"title-id":"contacts","source-link":"https://ckan.pf-sapporo.jp/dataset/covid_19_soudan"}})],1)}),[],!1,null,null,null),v=component.exports;f()(component,{VCol:C.a});var y=r(386),k=r(384),w=r(383),_=r(388),T={components:{QuerentsCard:r(390).a,PatientsSummaryCard:_.a,PatientsCard:w.a,InspectionsCard:k.a,DischargesCard:y.a,ContactsCard:v,CurrentPatientsCard:n.a},data:function(){return{title:""}},created:function(){switch(this.$route.params.card){case"contacts":this.title=this.$t("新型コロナコールセンター相談件数(札幌市保健所値)");break;case"current-patients":this.title=this.$t("現在患者数");break;case"discharges-summary":this.title=this.$t("治療終了者数");break;case"inspections":this.title=this.$t("検査数");break;case"patients":this.title=this.$t("陽性患者の属性");break;case"patients-summary":this.title=this.$t("陽性患者数");break;case"querents":this.title=this.$t("帰国者・接触者電話相談センター相談件数(札幌市保健所値)")}},mounted:function(){"true"!==this.$route.query.embed&&"true"!==this.$route.query.ogp&&this.$router.push({path:this.localePath("/"),hash:this.$route.params.card})},head:function(){var t="https://stopcovid19.hokkaido.dev/",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/api/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/api/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.$t("当サイトは、道内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。開発は、ICTエンジニアやデザイナーなどによって結成された「JUST道IT」が行っています。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("北海道")+" "+this.$t("新型コロナウイルス{mobileBreak}まとめサイト",{mobileBreak:""})},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},D=Object(m.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:"true"===this.$route.query.embed||"true"===this.$route.query.ogp,expression:"\n    this.$route.query.embed === 'true' || this.$route.query.ogp === 'true'\n  "}]},["current-patients"===this.$route.params.card?e("current-patients-card"):"contacts"===this.$route.params.card?e("contacts-card"):"discharges-summary"===this.$route.params.card?e("discharges-card"):"inspections"===this.$route.params.card?e("inspections-card"):"patients"===this.$route.params.card?e("patients-card"):"patients-summary"===this.$route.params.card?e("patients-summary-card"):"querents"===this.$route.params.card?e("querents-card"):this._e()],1)}),[],!1,null,null,null);e.default=D.exports}}]);