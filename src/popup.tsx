import { CountButton } from "~features/count-button"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40 plasmo-bg-[#F0F3F5] plasmo-text-[#268DCD]plasmo-text-[13px]">
      <span className="">Data via <a href="https://www.omdbapi.com/" target="_blank" className="plasmo-underline plasmo-hover:text-black">OMDb</a></span>
    </div>
  )
}

export default IndexPopup
