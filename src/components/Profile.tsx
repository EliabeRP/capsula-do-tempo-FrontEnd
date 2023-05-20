//import {getUser} from "@/lib/auth"
import Image from "next/image";
import Link from "next/link";

export function profile(){
  // const {name, avatarUrl, } = getUser()
  const name = 'johnner';

  return(
    <div className="Flex items-center gap-3 text-left">
      <Image
        src = '../app/icon.png'
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
      <Link
        href= ''
        className="block text-red-400 hover:text-red-300"
        >
          Quero sair
      </Link>
      </p>
    </div>
  )
}
