import { useEffect, useState } from "react"
import "~style.css"

function OptionsPage() {
  const [apiKey, setApiKey] = useState("")
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  const DEFAULT_API_KEY = "93941406"

  useEffect(() => {
    // Load saved API key from storage
    chrome.storage.sync.get(["omdbApiKey"], (result) => {
      setApiKey(result.omdbApiKey || DEFAULT_API_KEY)
      setLoading(false)
    })
  }, [])

  const handleSave = () => {
    const keyToSave = apiKey.trim() || DEFAULT_API_KEY
    
    chrome.storage.sync.set({ omdbApiKey: keyToSave }, () => {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    })
  }

  const handleReset = () => {
    setApiKey(DEFAULT_API_KEY)
    chrome.storage.sync.set({ omdbApiKey: DEFAULT_API_KEY }, () => {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    })
  }

  if (loading) {
    return (
      <div className="plasmo-min-h-screen plasmo-bg-gradient-to-br plasmo-from-purple-600 plasmo-to-purple-900 plasmo-p-5">
        <div className="plasmo-max-w-2xl plasmo-mx-auto plasmo-mt-10 plasmo-bg-white plasmo-rounded-xl plasmo-shadow-2xl plasmo-p-10">
          <p className="plasmo-text-gray-600">加载中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="plasmo-min-h-screen plasmo-bg-gradient-to-br plasmo-from-purple-600 plasmo-to-purple-900 plasmo-p-5">
      <div className="plasmo-max-w-2xl plasmo-mx-auto plasmo-mt-10 plasmo-bg-white plasmo-rounded-xl plasmo-shadow-2xl plasmo-p-10">
        <h1 className="plasmo-text-3xl plasmo-font-bold plasmo-text-gray-900 plasmo-mb-2">
          设置
        </h1>

        <div className="plasmo-mb-8">
          <label className="plasmo-block plasmo-text-sm plasmo-font-semibold plasmo-text-gray-800 plasmo-mb-2">
            OMDB API Key
            <span className="plasmo-block plasmo-text-xs plasmo-font-normal plasmo-text-gray-600 plasmo-mt-1">
              （从这里免费获取 API Key：{" "}
              <a
                href="https://www.omdbapi.com/apikey.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="plasmo-text-purple-600 hover:plasmo-underline">
                omdbapi.com
              </a>
              ）
            </span>
          </label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your OMDB API key"
            className="plasmo-w-full plasmo-px-4 plasmo-py-3 plasmo-text-sm plasmo-border-2 plasmo-border-gray-300 plasmo-rounded-lg focus:plasmo-outline-none focus:plasmo-border-purple-600 focus:plasmo-ring-4 focus:plasmo-ring-purple-100 plasmo-transition-all plasmo-font-mono"
          />
          <p className="plasmo-text-sm plasmo-text-gray-600 plasmo-mt-2 plasmo-leading-relaxed">
            默认使用内置的 API Key。如果遇到配额限制，可以申请自己的免费 API Key。
          </p>
        </div>

        <div className="plasmo-flex plasmo-gap-3 plasmo-mb-5">
          <button
            onClick={handleSave}
            className="plasmo-flex-1 plasmo-px-6 plasmo-py-3 plasmo-text-sm plasmo-font-semibold plasmo-text-white plasmo-bg-purple-600 plasmo-rounded-lg hover:plasmo-bg-purple-700 hover:plasmo--translate-y-0.5 hover:plasmo-shadow-lg plasmo-transition-all">
            保存设置
          </button>
          <button
            onClick={handleReset}
            className="plasmo-flex-1 plasmo-px-6 plasmo-py-3 plasmo-text-sm plasmo-font-semibold plasmo-text-gray-800 plasmo-bg-gray-200 plasmo-rounded-lg hover:plasmo-bg-gray-300 hover:plasmo--translate-y-0.5 plasmo-transition-all">
            恢复默认
          </button>
        </div>

        {saved && (
          <div className="plasmo-bg-green-100 plasmo-text-green-800 plasmo-px-4 plasmo-py-3 plasmo-rounded-lg plasmo-text-sm plasmo-mb-5 plasmo-animate-fade-in">
            ✓ 设置已保存！刷新电影页面以应用更改。
          </div>
        )}

        <div className="plasmo-bg-gray-100 plasmo-px-4 plasmo-py-4 plasmo-rounded-lg plasmo-mt-5">
          <p className="plasmo-text-sm plasmo-text-gray-700 plasmo-leading-relaxed">
            💡 提示: OMDB 免费 API 每天限制 1000 次请求。如果超出限制，请使用自己的
            API Key。
          </p>
        </div>
      </div>
    </div>
  )
}

export default OptionsPage

