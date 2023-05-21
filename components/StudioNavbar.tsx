import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"
function StudioNavbar(props: any) {
  return (
    <div className="">
      <div className=" bg-[#0f0d15] flex items-center justify-between p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2"  /> Go to website</Link>

          <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
            <h1 className="font-bold text-white">
              CSA UFV 🚀
            </h1>

            <span className="text-white">
              Excecutives Only
            </span>

          </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar;