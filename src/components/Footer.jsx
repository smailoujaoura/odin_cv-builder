import Logo from "./Logo";
import Export from "./Export";

export default function Nav({onDownload}) {
	return (
    <div style={NavStyle} className="bg-white flex justify-between px-5 py-2.5 border-b-2 border-[#E4EBF2]">
      <Logo />
      <Export onClick={onDownload}/>
    </div>
  );
}

const NavStyle = {
  // backgroundColor: 'white',
  // display: 'flex',
  // justifyContent: 'space-between',
  // padding: '10px 20px 10px 20px',
  // borderBottom: '2px solid #E4EBF2'
};