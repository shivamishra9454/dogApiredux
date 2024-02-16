type Props = {
  name: string;
};

function Header( props : any) {
  console.warn(props.data)
  return (
    <figure className="md:flex flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
     
      <h1 className="text-sky-500 dark:text-sky-400">{props.nameValue}</h1>
      <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data ? props.data.length  : 2}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    </figure>
  );
}

export default Header;