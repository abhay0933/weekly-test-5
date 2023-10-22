const loadData = async()=>{
    const res =await fetch('https://openapi.programming-hero.com/api/phones?search=oppo');
    const data = await res.json();  
    const phone = data.data;
    console.log(phone);
}
loadData();