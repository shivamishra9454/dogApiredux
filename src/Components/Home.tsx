type Props = {
  name: string;
};

function Home(props:any) {
  return (
    <figure className="md:flex flex bg-blue-100  h-20 text-2xl text-center	 items-center	 rounded-xl p-8 md:p-0 dark:bg-blue-800">
      {/* <div className="bg-zinc-950 dark:bg-white"> */}
      <h1 className="text-sky-500 dark:text-sky-400">{props.nameValue}</h1>
      {/* </div> */}
      <div className="flex items-center justify-space text-sky-500 dark:text-sky-400">
        <div className="px-4">01</div>
        <div className="px-12">02</div>
        <div className="px-8">03</div>
      </div>




      <div>
           
           <h1>Home Component</h1>
           <div className="cart-wrapper">
               <div className="img-wrapper item">
                   <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
               </div>
               <div className="text-wrapper item">
                   <span>
                       I-Phone
                   </span>
                   <span>
                       Price: $1000.00
                   </span>
               </div>
               <div className="btn-wrapper item">
                   <button 
                   onClick={
                       ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                       }>
                       Add To Cart</button>
               </div>
           </div>
       </div>
    </figure>
  );
}

export default Home;
