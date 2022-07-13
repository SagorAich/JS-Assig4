/* [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি শার্টের দাম – ১০০ টাকা

১ টি প্যান্টের দাম – ২০০ টাকা 

১ টি জুতার দাম – ৫০০ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে।  */

function totalSales(sh,p,s){
    const shirt=100;
    const pants=200;
    const shoes=500;
    sales=sh*shirt+p*pants+s*shoes;
    return sales;
}
console.log(totalSales(1,1,1));