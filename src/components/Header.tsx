import { GenreResponseProps } from './SideBar'

interface IHeaderProps {
  selectedGenre: GenreResponseProps
}

export function Header({ selectedGenre }: IHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:
        <span> 
          {selectedGenre.title}
        </span>
      </span>
    </header>
  )
}