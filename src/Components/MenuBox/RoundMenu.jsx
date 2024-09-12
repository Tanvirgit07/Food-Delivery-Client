const RoundMenu = (data) => {
  console.log(data.data.image);
  return (
    <div>
      <div className="w-20 h-20">
        <img className="rounded-full bg-cover" src={data.data.image} alt="menu-image" />
      </div>
      <div className="text-center mt-2 text-xl font-bold">
        <p>{data.data.label}</p>
      </div>
    </div>
  );
};

export default RoundMenu;
