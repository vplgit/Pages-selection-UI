import { useState } from 'react'
import { GrFormCheckmark } from 'react-icons/gr'

const Pages = () => {
  const [isHovered, setIsHovered]: any = useState({
    all: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false,
  })

  const handleMouseEnter = (page: any) => {
    setIsHovered((prevState: any) => ({
      ...prevState,
      [page]: true,
    }))
  }

  const handleMouseLeave = (page: any) => {
    setIsHovered((prevState: any) => ({
      ...prevState,
      [page]: false,
    }))
  }

  const [isSelected, setIsSelected] = useState(false)

  const setSelection = () => {
    setIsSelected(true)
  }

  return (
    <>
      <div className="flex pt-10 justify-center">
        <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl font-thin text-slate-600 text-base">
          <div className="space-y-4">
            {/* All Pages */}
            <div className="w-full border-collapse border-b-2 pb-2">
              <label
                onMouseEnter={() => handleMouseEnter('all')}
                onMouseLeave={() => handleMouseLeave('all')}
                className="flex items-center justify-between hover:cursor-pointer p-1"
              >
                <span className="">All pages</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className={`form-checkbox h-5 w-5 hover:cursor-pointer opacity-20 hover:opacity-25 ${
                      isSelected ? 'opacity-100' : 'opacity-20'
                    }`}
                    onClick={setSelection}
                  />
                  {isHovered.all && (
                    <GrFormCheckmark className="absolute left-0 bottom-1 right-1 text-2xl opacity-20 " />
                  )}
                </div>
              </label>
            </div>

            {/* Individual Pages */}
            <div className="h-32 overflow-y-auto hide-scrollbar">
              {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
                <label
                  key={`page-${pageNumber}`}
                  onMouseEnter={() => handleMouseEnter(`page${pageNumber}`)}
                  onMouseLeave={() => handleMouseLeave(`page${pageNumber}`)}
                  className="flex items-center justify-between p-1"
                >
                  <span className="">Page {pageNumber}</span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      className={`form-checkbox h-5 w-5 hover:cursor-pointer opacity-20 hover:opacity-25 ${
                        isSelected ? 'opacity-100' : 'opacity-20'
                      }`}
                      onClick={setSelection}
                    />
                    {isHovered[`page${pageNumber}`] && (
                      <GrFormCheckmark className="absolute left-0 bottom-1 right-1 text-2xl opacity-20 " />
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="border-collapse border-b-2 pt-3" />

          {/* Done Button */}
          <div className="mt-6">
            <button className="w-full rounded bg-yellow-400 px-4 py-2 text-white hover:bg-yellow-300">
              <span className="text-slate-600">Done</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pages
