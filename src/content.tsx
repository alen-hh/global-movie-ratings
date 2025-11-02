import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~features/count-button"

export const config: PlasmoCSConfig = {
  matches: ["https://movie.douban.com/subject/*"]
}

/**
 * Generates a style element with adjusted CSS to work correctly within a Shadow DOM.
 *
 * Tailwind CSS relies on `rem` units, which are based on the root font size (typically defined on the <html>
 * or <body> element). However, in a Shadow DOM (as used by Plasmo), there is no native root element, so the
 * rem values would reference the actual page's root font size—often leading to sizing inconsistencies.
 *
 * To address this, we:
 * 1. Replace the `:root` selector with `:host(plasmo-csui)` to properly scope the styles within the Shadow DOM.
 * 2. Convert all `rem` units to pixel values using a fixed base font size, ensuring consistent styling
 *    regardless of the host page's font size.
 */
export const getStyle = (): HTMLStyleElement => {
  const baseFontSize = 16

  let updatedCssText = cssText.replaceAll(":root", ":host(plasmo-csui)")
  const remRegex = /([\d.]+)rem/g
  updatedCssText = updatedCssText.replace(remRegex, (match, remValue) => {
    const pixelsValue = parseFloat(remValue) * baseFontSize

    return `${pixelsValue}px`
  })

  const styleElement = document.createElement("style")

  styleElement.textContent = updatedCssText

  return styleElement
}

const MovieScores = () => {
  return (
    <div className="plasmo-z-50 plasmo-fixed plasmo-top-60 plasmo-left-10">
      <div className="plasmo-bg-[#E2B616] plasmo-rounded plasmo-shadow-lg plasmo-p-4 plasmo-w-48">
        <div className="plasmo-text-sm plasmo-font-semibold plasmo-text-black plasmo-mb-3">
          Movie Scores
        </div>
        <div className="plasmo-space-y-2">
          <div className="plasmo-flex plasmo-justify-between plasmo-items-center">
            <span className="plasmo-text-xs plasmo-text-black">IMDb</span>
            <span className="plasmo-text-sm plasmo-font-medium plasmo-text-black">8.6/10</span>
          </div>
          <div className="plasmo-flex plasmo-justify-between plasmo-items-center">
            <span className="plasmo-text-xs plasmo-text-black">Rotten Tomatoes</span>
            <span className="plasmo-text-sm plasmo-font-medium plasmo-text-black">96%</span>
          </div>
          <div className="plasmo-flex plasmo-justify-between plasmo-items-center">
            <span className="plasmo-text-xs plasmo-text-black">Metacritic</span>
            <span className="plasmo-text-sm plasmo-font-medium plasmo-text-black">95/100</span>
          </div>
        </div>
        <div className="plasmo-text-xs plasmo-text-gray-700 plasmo-mt-3 plasmo-pt-2">
          Data via <a href="https://www.omdbapi.com/" target="_blank" className="plasmo-underline plasmo-hover:text-black">OMDb</a>
        </div>
      </div>
    </div>
  )
}

export default MovieScores
