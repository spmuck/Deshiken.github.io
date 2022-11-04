"use strict";(self.webpackChunkboard_game_helper=self.webpackChunkboard_game_helper||[]).push([[177],{665:(G,y,a)=>{a.d(y,{Fj:()=>B,u5:()=>sn,JJ:()=>Ue,On:()=>ie,YN:()=>nt,eT:()=>se,EJ:()=>L,Kr:()=>ot});var o=a(639),g=a(583),p=a(574),u=a(796),d=a(2),h=a(555),v=a(402);function x(n,t){return new p.y(e=>{const r=n.length;if(0===r)return void e.complete();const i=new Array(r);let s=0,l=0;for(let _=0;_<r;_++){const S=(0,v.D)(n[_]);let fe=!1;e.add(S.subscribe({next:E=>{fe||(fe=!0,l++),i[_]=E},error:E=>e.error(E),complete:()=>{s++,(s===r||!fe)&&(l===r&&e.next(t?t.reduce((E,an,ln)=>(E[an]=i[ln],E),{}):i),e.complete())}}))}})}let ge=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),D=(()=>{class n extends ge{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const m=new o.OlP("NgValueAccessor"),mt={provide:m,useExisting:(0,o.Gpc)(()=>B),multi:!0},yt=new o.OlP("CompositionEventMode");let B=(()=>{class n extends ge{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,g.q)()?(0,g.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(yt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([mt]),o.qOj]}),n})();const c=new o.OlP("NgValidators"),V=new o.OlP("NgAsyncValidators");function Ee(n){return null!=n}function Oe(n){const t=(0,o.QGY)(n)?(0,v.D)(n):n;return(0,o.CqO)(t),t}function Fe(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function we(n,t){return t.map(e=>e(n))}function Ne(n){return n.map(t=>function(n){return!n.validate}(t)?t:e=>t.validate(e))}function Y(n){return null!=n?function(n){if(!n)return null;const t=n.filter(Ee);return 0==t.length?null:function(e){return Fe(we(e,t))}}(Ne(n)):null}function W(n){return null!=n?function(n){if(!n)return null;const t=n.filter(Ee);return 0==t.length?null:function(e){return function(...n){if(1===n.length){const t=n[0];if((0,u.k)(t))return x(t,null);if((0,h.K)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return x(e.map(r=>t[r]),e)}}if("function"==typeof n[n.length-1]){const t=n.pop();return x(n=1===n.length&&(0,u.k)(n[0])?n[0]:n,null).pipe((0,d.U)(e=>t(...e)))}return x(n,null)}(we(e,t).map(Oe)).pipe((0,d.U)(Fe))}}(Ne(n)):null}function xe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function $(n){return n?Array.isArray(n)?n:[n]:[]}function k(n,t){return Array.isArray(n)?n.includes(t):n===t}function Te(n,t){const e=$(t);return $(n).forEach(i=>{k(e,i)||e.push(i)}),e}function Pe(n,t){return $(t).filter(e=>!k(n,e))}let Re=(()=>{class n{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Y(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=W(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n}),n})(),f=(()=>{class n extends Re{get formDirective(){return null}get path(){return null}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();class M extends Re{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let Ue=(()=>{class n extends class{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(M,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})();function O(n,t){(function(n,t){const e=function(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(xe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(xe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();I(t._rawValidators,i),I(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),function(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&je(n,t)})}(n,t),function(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&je(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function I(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function je(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function j(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const F="VALID",H="INVALID",b="PENDING",w="DISABLED";function X(n){return(te(n)?n.validators:n)||null}function Le(n){return Array.isArray(n)?Y(n):n||null}function ee(n,t){return(te(t)?t.asyncValidators:n)||null}function Ye(n){return Array.isArray(n)?W(n):n||null}function te(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class ne{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Le(this._rawValidators),this._composedAsyncValidatorFn=Ye(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===H}get pending(){return this.status==b}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Le(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Ye(t)}addValidators(t){this.setValidators(Te(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Pe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Pe(t,this._rawAsyncValidators))}hasValidator(t){return k(this._rawValidators,t)}hasAsyncValidator(t){return k(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=b,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=F,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===b)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;const e=Oe(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=r instanceof re?r.controls.hasOwnProperty(i)?r.controls[i]:null:r instanceof xt&&r.at(i)||null}),r}(this,t)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(H)?H:F}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){te(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class q extends ne{constructor(t=null,e,r){super(X(e),ee(r,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){j(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){j(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class re extends ne{constructor(t,e,r){super(X(e),ee(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e instanceof q?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class xt extends ne{constructor(t,e,r){super(X(e),ee(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((r,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof q?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Tt={provide:M,useExisting:(0,o.Gpc)(()=>ie)},ze=(()=>Promise.resolve(null))();let ie=(()=>{class n extends M{constructor(e,r,i,s){super(),this.control=new q,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===B?e=s:function(n){return Object.getPrototypeOf(n.constructor)===D}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),function(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function(n,t){return[...t.path,n]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){O(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ze.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=""===r||r&&"false"!==r;ze.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(f,9),o.Y36(c,10),o.Y36(V,10),o.Y36(m,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Tt]),o.qOj,o.TTD]}),n})(),Ze=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const jt={provide:m,useExisting:(0,o.Gpc)(()=>se),multi:!0};let se=(()=>{class n extends D{writeValue(e){this.setProperty("value",parseFloat(e))}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target.value)})("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([jt]),o.qOj]}),n})();const $t={provide:m,useExisting:(0,o.Gpc)(()=>L),multi:!0};function tt(n,t){return null==n?`${t}`:(t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let L=(()=>{class n extends D{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const r=this._getOptionId(e);null==r&&this.setProperty("selectedIndex",-1);const i=tt(r,e);this.setProperty("value",i)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){const r=function(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r):e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([$t]),o.qOj]}),n})(),nt=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(tt(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(L,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();const Jt={provide:m,useExisting:(0,o.Gpc)(()=>ce),multi:!0};function rt(n,t){return null==n?`${t}`:("string"==typeof t&&(t=`'${t}'`),t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let ce=(()=>{class n extends D{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let r;if(this.value=e,Array.isArray(e)){const i=e.map(s=>this._getOptionId(s));r=(s,l)=>{s._setSelected(i.indexOf(l.toString())>-1)}}else r=(i,s)=>{i._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{const i=[];if(void 0!==r.selectedOptions){const s=r.selectedOptions;for(let l=0;l<s.length;l++){const _=s.item(l),S=this._getOptionValue(_.value);i.push(S)}}else{const s=r.options;for(let l=0;l<s.length;l++){const _=s.item(l);if(_.selected){const S=this._getOptionValue(_.value);i.push(S)}}}this.value=i,e(i)}}_registerOption(e){const r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){const r=function(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([Jt]),o.qOj]}),n})(),ot=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(rt(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(rt(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(ce,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})(),pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[Ze]]}),n})(),sn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[pt]}),n})()},594:(G,y,a)=>{a.d(y,{V:()=>g});var o=a(238);const g=(0,o.X$)("simpleFadeAnimation",[(0,o.SB)("in",(0,o.oB)({opacity:1})),(0,o.eR)(":enter",[(0,o.oB)({opacity:0}),(0,o.jt)(400)]),(0,o.eR)(":leave",(0,o.jt)(400,(0,o.oB)({opacity:0})))])},592:(G,y,a)=>{a.d(y,{i:()=>p});var o=a(639),g=a(583);let p=(()=>{class u{constructor(h){this.location=h,this.title=""}ngOnInit(){}}return u.\u0275fac=function(h){return new(h||u)(o.Y36(g.Ye))},u.\u0275cmp=o.Xpm({type:u,selectors:[["app-heading-with-back"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"d-flex","justify-items-center","align-items-center","my-3"],[1,"bi","me-3","bi-arrow-left-circle",2,"font-size","2.4rem",3,"click"],[1,"text-center"]],template:function(h,v){1&h&&(o.TgZ(0,"div",0),o.TgZ(1,"i",1),o.NdJ("click",function(){return v.location.back()}),o.qZA(),o.TgZ(2,"h1",2),o._uU(3),o.qZA(),o.qZA()),2&h&&(o.xp6(3),o.Oqu(v.title))},styles:[""]}),u})()},532:(G,y,a)=>{a.d(y,{R:()=>g});var o=a(639);let g=(()=>{class p{constructor(){}getRandomEntryFromMap(d){const h=Array.from(d);return h[Math.floor(Math.random()*h.length)]}getRandomEntryFromArray(d){return d[Math.floor(Math.random()*d.length)]}deleteFromArray(d,h){const v=d.indexOf(h);v>-1&&d.splice(v,1)}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=o.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},466:(G,y,a)=>{a.d(y,{m:()=>p});var o=a(583),g=a(639);let p=(()=>{class u{}return u.\u0275fac=function(h){return new(h||u)},u.\u0275mod=g.oAB({type:u}),u.\u0275inj=g.cJS({imports:[[o.ez]]}),u})()}}]);