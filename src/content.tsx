import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://movie.douban.com/subject/*"]
}

export const getInlineAnchor = async () => {
  return document.querySelector(".rating_betterthan")
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

interface Rating {
  Source: string
  Value: string
}

interface OMDBResponse {
  Title: string
  Year: string
  Ratings: Rating[]
  imdbRating: string
  Response: string
}

const MovieScores = () => {
  const [shouldRender, setShouldRender] = useState(false)
  const [scores, setScores] = useState({
    imdb: "N/A",
    rottenTomatoes: "N/A",
    metacritic: "N/A"
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovieScores = async () => {
      try {
        // Find the IMDb ID by looking for the "IMDb:" label in the #info section
        const infoDiv = document.querySelector("#info")
        if (!infoDiv) {
          setShouldRender(false)
          setLoading(false)
          return
        }

        // Find all spans with class "pl" (labels)
        const labels = infoDiv.querySelectorAll("span.pl")
        let imdbId = ""

        // Look for the "IMDb:" label
        for (const label of labels) {
          if (label.textContent?.includes("IMDb")) {
            // Get the next sibling after "IMDb:" label
            let nextNode = label.nextSibling
            while (nextNode) {
              if (nextNode.nodeType === Node.TEXT_NODE) {
                const text = nextNode.textContent?.trim()
                if (text && text !== ":") {
                  imdbId = text.replace(/^:\s*/, "").trim()
                  break
                }
              } else if (
                nextNode.nodeType === Node.ELEMENT_NODE &&
                (nextNode as Element).tagName === "SPAN"
              ) {
                imdbId = (nextNode as Element).textContent?.trim() || ""
                break
              }
              nextNode = nextNode.nextSibling
            }
            break
          }
        }

        // Don't render if IMDb ID is empty
        if (!imdbId) {
          setShouldRender(false)
          setLoading(false)
          return
        }

        setShouldRender(true)

        // Get API key from storage or use default
        const DEFAULT_API_KEY = "93941406"
        const result = await chrome.storage.sync.get(["omdbApiKey"])
        const apiKey = result.omdbApiKey || DEFAULT_API_KEY
        
        const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&type=movie&r=json`

        // Print the API key, API URL, and IMDb ID to check if they are correct
        console.log("API Key:", apiKey)
        console.log("API URL:", apiUrl)
        console.log("IMDb ID:", imdbId)
        
        const response = await fetch(apiUrl)
        const data: OMDBResponse = await response.json()

        if (data.Response === "True" && data.Ratings) {
          const newScores = {
            imdb: "N/A",
            rottenTomatoes: "N/A",
            metacritic: "N/A"
          }

          // Parse ratings from API response
          data.Ratings.forEach((rating) => {
            if (rating.Source === "Internet Movie Database") {
              newScores.imdb = rating.Value
            } else if (rating.Source === "Rotten Tomatoes") {
              newScores.rottenTomatoes = rating.Value
            } else if (rating.Source === "Metacritic") {
              newScores.metacritic = rating.Value
            }
          })

          setScores(newScores)
        }
      } catch (error) {
        console.error("Error fetching movie scores:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieScores()
  }, [])

  // Don't render if the XPath value is empty
  if (!shouldRender) {
    return null
  }

  return (
    <div className="plasmo-my-4 plasmo-w-full">
      {/* Container */}
      <div className="plasmo-bg-[#F0F3F5] plasmo-rounded plasmo-p-4 plasmo-w-full plasmo-text-[13px] plasmo-text-[#268DCD]">
        {/* Title */}
        <div className="plasmo-flex plasmo-justify-between plasmo-items-center plasmo-font-semibold plasmo-mb-4">
          <span className="">全球评分</span>
        </div>
        {/* Scores */}
        <div className="plasmo-flex plasmo-flex-col plasmo-space-y-2 plasmo-my-3">
          <div className="plasmo-flex plasmo-justify-between">
            <span className="">IMDb</span>
            <span className="" id="imdb-score">
              {loading ? "加载中..." : scores.imdb}
            </span>
          </div>
          <hr className="my-4"></hr>
          <div className="plasmo-flex plasmo-justify-between">
            <span className="">烂番茄</span>
            <span className="" id="rotten-tomatoes-score">
              {loading ? "加载中..." : scores.rottenTomatoes}
            </span>
          </div>
          <hr className="my-4"></hr>
          <div className="plasmo-flex plasmo-justify-between">
            <span className="">Metacritic</span>
            <span className="" id="metacritic-score">
              {loading ? "加载中..." : scores.metacritic}
            </span>
          </div>
        </div>
        {/* Data Source */}
        <div className="plasmo-flex plasmo-justify-between plasmo-items-center3 plasmo-text-gray-400 plasmo-mt-4">
          <span className="">Data via <a href="https://www.omdbapi.com/" target="_blank" className="plasmo-underline plasmo-hover:text-black">OMDb</a></span>
        </div>
      </div>
    </div>
  )
}

export default MovieScores
