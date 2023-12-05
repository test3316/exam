const Card = () => {
  return (
    <div className="inline-block ">
      <div className="flex-row bg-white h-[380px] w-[230px] rounded-md ml-[42px] mt-[10px]">
        <div>
          <img
            className="rounded-t-md"
            src="https://static.my.ge/myauto/photos/1/6/3/5/8/thumbs/98853619_1.jpg?v=18"
            alt=""
          />
        </div>
        <div className=" ml-2 mt-5 text-slate-400 text-sm">თბილისი</div>
        <div className="ml-2 mt-5">
          <a href="#">2017 - Kia Niro</a>
        </div>
        <div className="ml-2 mt-5 text-sm">ფასი შეთანხმებით</div>
        <div className="card-car-details flex justify-center mt-6 ">
          <p className=" bg-slate-300   rounded-lg p-1 text-slate-600 text-sm">
            კროსოვერი
          </p>
          <p className="ml-4 bg-slate-300   rounded-lg p-1 text-slate-600 text-sm">
            ჰიბრიდი
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
