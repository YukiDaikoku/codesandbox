/**
 * const、let等の変数宣言
 */
/*var val1 = "var変数";
console.log(val1);

//var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

//var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);*/

/*const val4={
  name:"じゃけぇ",
  age:28.
};
val4.name="jak";
val4.adress="Hiroshima";
console.log(val4);*/

/*const val5 =[1,"cat"];
val5[0]="bird";
val5.push("monkey");
console.log(val5);*/

/*テンプレート文字列*/
/*const name="じゃけぇ";
const age=28;
//「私の名前はじゃけぇです。年齢は28歳です。」
//従来の方法
const message1="私の名前は"+name+"です。年齢は"+age+"です";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);*/

//アロー関数
//下記は従来
/*function func1(str){
  return str;

}
const func1 = function(str){
  return str;
}
console.log(func1("func1です"));*/
//アロー関数
/*const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3=(num1,num2) => {
  return num1 + num2;
};
console.log(func3(10,20));  */

/*const myProfile = {
  name:"じゃけぇ",
  age: 28,
};
const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

const{name,age}=myProfile;
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);*/

// const myProfile = [`じゃけぇ`,28];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const sayHello =(name)=> console.log(`こんにちは${name}さん`);
// sayHello();

// const arr1=[1,2];
// const sumFunc=(num1,num2)=>console.log(num1+num2);
// sumFunc(arr1[0],arr[1]);
// sumFunc(...arr1);

// const nameArr2=nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name)=>console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const val1=1<0? `trueです`:`falseです`;
// console.log(val1);

// ||

// constnameArr = ["田中,"山田”,"じゃけぇ"];
// for(let index =0; index <)
