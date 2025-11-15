import "~style.css"

function IndexPopup() {
  const openOptions = () => {
    chrome.runtime.openOptionsPage()
  }

  return (
    <div className="plasmo-w-80 plasmo-p-6 plasmo-bg-gradient-to-br plasmo-from-purple-50 plasmo-to-blue-50">
      {/* Header */}
      <div className="plasmo-mb-4">
        <h1 className="plasmo-text-xl plasmo-font-bold plasmo-text-gray-900 plasmo-mb-2">
          全球电影评分
        </h1>
        <p className="plasmo-text-sm plasmo-text-gray-600 plasmo-leading-relaxed">
          在豆瓣电影页面上自动显示该电影在 IMDb、烂番茄、Metacritic 的评分。
        </p>
      </div>

      {/* Features */}
      <div className="plasmo-bg-white plasmo-rounded-lg plasmo-p-4 plasmo-mb-4 plasmo-shadow-sm">
        <h2 className="plasmo-text-sm plasmo-font-semibold plasmo-text-gray-800 plasmo-mb-3">
          功能特点
        </h2>
        <ul className="plasmo-space-y-2 plasmo-text-xs plasmo-text-gray-600">
          <li className="plasmo-flex plasmo-items-start">
            <span className="plasmo-mr-2">✓</span>
            <span>自动获取全球电影评分数据</span>
          </li>
          <li className="plasmo-flex plasmo-items-start">
            <span className="plasmo-mr-2">✓</span>
            <span>支持 IMDb、烂番茄、Metacritic</span>
          </li>
          <li className="plasmo-flex plasmo-items-start">
            <span className="plasmo-mr-2">✓</span>
            <span>自定义 API Key（可选）</span>
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="plasmo-space-y-2">
        <button
          onClick={openOptions}
          className="plasmo-w-full plasmo-px-4 plasmo-py-2.5 plasmo-bg-purple-600 plasmo-text-white plasmo-text-sm plasmo-font-medium plasmo-rounded-lg hover:plasmo-bg-purple-700 plasmo-transition-colors plasmo-shadow-sm">
          ⚙️ 打开设置
        </button>
      </div>

      {/* Footer */}
      <div className="plasmo-mt-4 plasmo-pt-4 plasmo-border-t plasmo-border-gray-200 plasmo-text-center">
        <p className="plasmo-text-xs plasmo-text-gray-500">
          数据来源：
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="plasmo-text-purple-600 plasmo-underline hover:plasmo-text-purple-700">
            OMDb API
          </a>
        </p>
      </div>
    </div>
  )
}

export default IndexPopup
