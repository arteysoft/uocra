/** Cant Iteraciones
* Callback nroIteracion:Integer, next:Function, abort: Function(Err)
*/

export type CallBackType = (n:number, next:Function, abort:Function) => void
export type onFinishType = (e:string|Error|null) => void

export let asyncForLoop = (cantIteraciones:number, callBack:CallBackType, onFinish:onFinishType) => {
   if (onFinish === undefined) {
       onFinish = z => {}
   }
   (function innerFunction(iteracionActual) {
       if (cantIteraciones === iteracionActual) {
           onFinish(null)
           return;
       }
       callBack(iteracionActual, () => {
           // next
           setTimeout(()=>{
               innerFunction(iteracionActual+1)
           },0)
       }, (err) => {
           // abort
           onFinish(err)
       })
   })(0)
}
