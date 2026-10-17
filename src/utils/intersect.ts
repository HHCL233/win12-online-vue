export function isOverlapping(a: DOMRect, b: DOMRect) {
  return !(
    a.right <= b.left || // A 在 B 左侧
    a.left >= b.right || // A 在 B 右侧
    a.bottom <= b.top || // A 在 B 上方
    a.top >= b.bottom // A 在 B 下方
  )
}
