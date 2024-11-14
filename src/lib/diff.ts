export function generateDiff(oldContent: string, newContent: string) {
  const oldLines = oldContent.split('\n')
  const newLines = newContent.split('\n')
  
  const added: string[] = []
  const removed: string[] = []
  const modified: string[] = []

  let i = 0
  let j = 0

  while (i < oldLines.length || j < newLines.length) {
    if (i >= oldLines.length) {
      added.push(newLines[j])
      j++
    } else if (j >= newLines.length) {
      removed.push(oldLines[i])
      i++
    } else if (oldLines[i] !== newLines[j]) {
      if (oldLines[i].length === 0) {
        added.push(newLines[j])
        j++
      } else if (newLines[j].length === 0) {
        removed.push(oldLines[i])
        i++
      } else {
        modified.push(`${oldLines[i]} → ${newLines[j]}`)
        i++
        j++
      }
    } else {
      i++
      j++
    }
  }

  return { added, removed, modified }
}
