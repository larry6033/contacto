function Main() {
  return (
    <div>
      {/* <h2 className="flex justify-center text-[green] text-[2em] font-bold my-[2em]">
        Our Team{" "}
      </h2> */}
      <div>
        <h2 className="flex justify-center text-[green] text-[2em] font-bold">
          About Us{" "}
        </h2>
        <div className="flex justify-center  items-center  flex-wrap mr-[10em]">
          {" "}
          <p className="flex justify-center sm:w-[60%] w-[100%] text-center my-[3em]">
            we are a certified and a contact management app that helps you
            connect and manage all your contacts with friends and family all
            over the ccountry. we help you get in touch with your friend and
            even bussinaess partners for business meetings . we help you in
            managing all your contacts as well as bussiness ideas and help you
            put them to light . with us you get all your contacts arranged with
            all your details in one place making it easier for you to know each
            contact in your device personally.
          </p>
        </div>
      </div>
      <div className="container mx-[auto] flex justify-around flex-wrap my-[5em]  ">
        <div className=" flex flex-col items-center w-[20%] shadow-lg p-[3em]">
          <img
            src="src/assets/images/technology (2).png"
            className="w-[100px] rounded-full"
          />
          <h2 className="text-[green] text-[2em]">Techs</h2>
          <p>
            we have the most qualified technicians that make sure that your
            connections are really first removing any delays.
          </p>
        </div>
        <div className=" flex flex-col items-center w-[20%] shadow-lg p-[3em]">
          <img
            src="src/assets/images/technology (2).png"
            className="w-[100px] rounded-full"
          />
          <h2 className="text-[green] text-[2em]">Friendly</h2>
          <p>
            we are very friendly with our users so as to ensure that we give you
            the services you need.
          </p>
        </div>
        <div className=" flex flex-col items-center w-[20%] shadow-lg p-[3em] ">
          <img
            src="src/assets/images/technology (2).png"
            className="w-[100px] rounded-full"
          />
          <h2 className="text-[green] text-[2em]"></h2>
          <p>
            we have the most qualified technicians that make sure that your
            connections are really first removing any delays.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Main;
