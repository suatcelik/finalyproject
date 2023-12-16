const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center gap-7 w-56 border hover:shadow-2xl hover:scale-[1.02] transition-all ">
      <img src={product.img} className="w-full" />
      <div className="flex flex-col items-center gap-4 pb-3">
        <p className="text-center text-slate-800 text-xl font-bold font-['Montserrat'] tracking-[0.2px]">
          {product.name}
        </p>
        <p className="text-center text-neutral-500 text-base font-bold font-['Montserrat'] tracking-[0.2px]">
          {product.description}
        </p>
        <p className="text-stone-300 text-xl font-bold font-['Montserrat'] tracking-[0.2px] flex justify-center gap-2">
          <span>{product.price}</span>
          <span className="text-teal-700">{product.priceDiscount}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
