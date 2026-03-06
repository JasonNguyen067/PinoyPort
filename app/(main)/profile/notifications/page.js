export default function Notifications() {
  return (
    <div className="flex flex-col bg-white w-screen h-screen bg-linear-to-b from-[#0000004D] to-[#00000033] to-30%">
      <div className="relative top-[78px] left-[25px] font-mono text-black ">
        <h1 className="text-3xl">Notifications </h1>
        <div className="relative bg-[#00000033] w-[310px] h-[224px] rounded-[10px] mt-[10px]">
        <div className="relative top-[13px] left-[18px]">
          <h2 className="text-xl">Posts </h2>
          <hr className="relative border-[#0000001F] left-[-7px] w-[290px]"/>
          <div className="flex flex-col space-y-[17px] mt-[8px]">
            <div>Likes</div>
            <div>Comments</div>
            <div>Mentions</div>
            <div>Tags</div>
          </div>
        </div>
        </div>
        <div className="relative bg-[#00000033] w-[310px] h-[182px] rounded-[10px] mt-[10px]">
          <div className="relative top-[13px] left-[18px]">
            <h2 className="text-xl">Friends </h2>
            <hr className="relative border-[#0000001F] left-[-7px] w-[290px]"/>
          </div>
        </div>
      </div>
    </div>
  )
}
