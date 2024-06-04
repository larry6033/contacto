function Footer() {
  return (
    <div className="bg-[green] flex justify-around items-center p-[3em]">
      <div className="flex float-start">
        <img
          src="src/assets/images/2.png"
          alt=""
          className="w-[150px]"
        />
      </div>
      <div>
        <ul>
          <li className="text-[2.3em] text-[white] my-[5px]">Departments</li>
          <li>Contacts</li>
          <li>Categories</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='my-[5px] text-[white] text-[2.3em]'>Contact Details</li>
          <li>Kibra, Mashimoni</li>
          <li>+254 790822547</li>
          <li>larry@gmail.com </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
