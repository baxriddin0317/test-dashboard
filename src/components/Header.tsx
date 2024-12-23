import { ArrowUpRightIcon, BellIcon, BookAIcon, FileTextIcon, NewspaperIcon, TrophyIcon } from "../icons"
import AvatarImg from "../assets/avatar.jpg"

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-2 mt-12 h-10">
      <div>
        <h2 className="font-medium">Inkredits</h2>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2 opacity-50">
            <BookAIcon />
            <span>3999</span>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <FileTextIcon />
            <span>1999</span>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <NewspaperIcon />
            <span>2999</span>
          </div>
          <ArrowUpRightIcon />
        </div>
      </div>
      {/* ==== */}
      <div className="flex items-center justify-end ml-auto">
        <div>
          <h2 className="font-medium">Luca Bianchi</h2>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-2 opacity-50">
              <TrophyIcon />
              <span>Livello 10</span>
            </div>
            <ArrowUpRightIcon />
          </div>
        </div>
        <div className="ml-3 size-10 rounded-full overflow-hidden relative">
          <img className="absolute object-cover size-full" src={AvatarImg} alt="" />
        </div>
        <button className="h-full px-3 ml-2">
          <BellIcon />
        </button>
      </div>
    </header>
  )
}

export default Header