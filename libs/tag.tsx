export const toTagList = (tag: string | null, tags: string[]): string[] => {
  if (typeof tag === 'string') {
    if (tag === '') return []
    return tag.split(',')
  }
  return tags
}

// 重複除去してカンマ区切りにする
export const toQuery = (tagList: string[]): string => {
  return Array.from(new Set(tagList)).join(',')
}

export const toggleTagQuery = (tag: string, selectedTags: string[]): string => {
  if (isSelected(tag, selectedTags)) {
    return toQuery(selectedTags.filter((t) => t !== tag))
  }
  return toQuery([...selectedTags, tag])
}

export const isSelected = (tag: string, selectedTags: string[]): boolean => {
  if (selectedTags.length === 0) return false
  return selectedTags.includes(tag)
}
