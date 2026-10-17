export interface File {
  id: string
  name: string
  size: number
  icon: string
  type: 'folder' | 'file'
  child?: Files
  content?: string
}

export type Files = File[]
