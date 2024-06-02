interface SquareProps {
  value: string | null
  onClick: () => void
}

interface BoardProps {
  squares: Array<string | null>
  onClick: (i: number) => void
}
