import Link from "next/link"
import { Camera, ChevronLeft } from "lucide-react";

export default function New() {
 return (
  <div className="flex flex-1 flex-col gap-4">
    <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
      <ChevronLeft className="h-4 w-4" />
      voltar à timeline
    </Link>

    <form className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
      <label htmlFor="media"
      className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100" 
    
      > 
      <Camera className="h-4 w-4"  /> 
      Anexar midia
      </label>

      <label htmlFor="IsPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
        <input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500" />
      </label>
      </div>
<input type="file"  id="media" className="invisible"/>
    </form>
  </div>
 )
}